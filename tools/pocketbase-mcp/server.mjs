#!/usr/bin/env node

import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import PocketBase from "pocketbase";
import { z } from "zod";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
dotenv.config({ path: path.join(projectRoot, ".env.local"), quiet: true });

const url = normalizeUrl(process.env.POCKETBASE_URL || process.env.NEXT_PUBLIC_POCKETBASE_URL);
const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL;
const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD;

if (!url || !adminEmail || !adminPassword) {
  throw new Error(
    "Faltan NEXT_PUBLIC_POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL o POCKETBASE_ADMIN_PASSWORD en .env.local.",
  );
}

const pb = new PocketBase(url);
pb.autoCancellation(false);
let authenticated = false;

async function client() {
  if (!authenticated) {
    await pb.collection("_superusers").authWithPassword(adminEmail, adminPassword);
    authenticated = true;
  }

  return pb;
}

function result(value) {
  return { content: [{ type: "text", text: JSON.stringify(value, null, 2) }] };
}

function normalizeUrl(value) {
  return String(value || "").trim().replace(/\/$/, "");
}

const server = new McpServer({ name: "pocketbase-epixum-disopa", version: "1.0.0" });

server.registerTool("health", {
  description: "Verifica que la instancia PocketBase configurada sea accesible.",
}, async () => {
  const response = await fetch(`${url}/api/health`);
  return result({ url, ok: response.ok, status: response.status, body: await response.json().catch(() => null) });
});

server.registerTool("whoami", {
  description: "Confirma la autenticacion de administrador sin exponer tokens ni contrasenas.",
}, async () => {
  const pocketbase = await client();
  return result({ url, authenticated: pocketbase.authStore.isValid, model: pocketbase.authStore.model });
});

server.registerTool("list_collections", {
  description: "Lista las colecciones y su metadato de PocketBase.",
}, async () => result(await (await client()).collections.getFullList({ sort: "name" })));

server.registerTool("get_collection", {
  description: "Obtiene el esquema de una coleccion por nombre o id.",
  inputSchema: { collection: z.string().min(1) },
}, async ({ collection }) => result(await (await client()).collections.getOne(collection)));

server.registerTool("list_records", {
  description: "Lista registros paginados de una coleccion. filter usa la sintaxis de filtros de PocketBase.",
  inputSchema: {
    collection: z.string().min(1),
    page: z.number().int().min(1).default(1),
    perPage: z.number().int().min(1).max(500).default(50),
    sort: z.string().optional(),
    filter: z.string().optional(),
    expand: z.string().optional(),
    fields: z.string().optional(),
  },
}, async ({ collection, page, perPage, sort, filter, expand, fields }) => {
  const options = Object.fromEntries(Object.entries({ sort, filter, expand, fields }).filter(([, value]) => value));
  return result(await (await client()).collection(collection).getList(page, perPage, options));
});

server.registerTool("get_record", {
  description: "Obtiene un registro por coleccion e id.",
  inputSchema: {
    collection: z.string().min(1),
    id: z.string().min(1),
    expand: z.string().optional(),
    fields: z.string().optional(),
  },
}, async ({ collection, id, expand, fields }) => {
  const options = Object.fromEntries(Object.entries({ expand, fields }).filter(([, value]) => value));
  return result(await (await client()).collection(collection).getOne(id, options));
});

const recordInput = {
  collection: z.string().min(1),
  data: z.record(z.string(), z.unknown()),
};

server.registerTool("create_record", {
  description: "Crea un registro en una coleccion. Requiere aprobacion explicita antes de usarlo.",
  inputSchema: recordInput,
}, async ({ collection, data }) => result(await (await client()).collection(collection).create(data)));

server.registerTool("update_record", {
  description: "Actualiza un registro. Requiere aprobacion explicita antes de usarlo.",
  inputSchema: { ...recordInput, id: z.string().min(1) },
}, async ({ collection, id, data }) => result(await (await client()).collection(collection).update(id, data)));

server.registerTool("delete_record", {
  description: "Elimina un registro. Requiere aprobacion explicita antes de usarlo.",
  inputSchema: { collection: z.string().min(1), id: z.string().min(1) },
}, async ({ collection, id }) => {
  await (await client()).collection(collection).delete(id);
  return result({ deleted: true, collection, id });
});

await server.connect(new StdioServerTransport());
