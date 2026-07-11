const sessions = [
  {
    number: "01",
    title: "¿Qué decide un diseñador?",
    time: "Encuentro 1 · 3 horas",
    description:
      "Abrimos la cursada distinguiendo lo que una IA puede proponer de lo que un equipo debe comprender, decidir y verificar.",
    activities: [
      "Presentación de la materia, el caso SATE y sus hitos.",
      "Clasificación razonada: asistencia de IA, decisión humana o responsabilidad compartida.",
      "Lectura crítica de dos propuestas de solución para el mismo problema.",
    ],
  },
  {
    number: "02",
    title: "Carta de diseño inicial",
    time: "Encuentro 2 · 3 horas",
    description:
      "Convertimos una primera comprensión del problema en criterios de calidad, preguntas abiertas y decisiones que puedan explicarse.",
    activities: [
      "Introducción a mantenibilidad, extensibilidad, testabilidad, seguridad, rendimiento y simplicidad.",
      "Taller en equipos para completar una ficha de problema.",
      "Revisión entre pares y ajuste de la carta de diseño inicial.",
    ],
  },
];

const qualityAttributes = [
  ["Mantenibilidad", "Que un cambio futuro pueda entenderse y realizarse sin romper lo existente."],
  ["Testabilidad", "Que las reglas relevantes puedan verificarse con ejemplos y pruebas."],
  ["Privacidad", "Que cada rol acceda sólo a la información necesaria para acompañar trayectorias."],
  ["Simplicidad", "Que la primera versión sea proporcional al problema y al equipo que la construye."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-grid" />
        <div className="hero-content container">
          <p className="eyebrow">Diseño de Software y Patrones · Semana 1</p>
          <p className="course-label">Unidad 1 · Diseño de soluciones y decisiones arquitectónicas</p>
          <h1 id="page-title">Diseñar antes de pedir código.</h1>
          <p className="hero-copy">
            La inteligencia artificial puede acelerar borradores. El diseño sigue
            siendo la tarea de comprender el contexto, explicitar compromisos y
            verificar las decisiones.
          </p>
          <a className="hero-link" href="#recorrido">
            Ver el recorrido de la semana <span aria-hidden="true">↓</span>
          </a>
        </div>
        <aside className="week-card" aria-label="Datos de la semana">
          <span>Semana</span>
          <strong>01</strong>
          <div />
          <p>6 horas</p>
          <p>Dos encuentros</p>
          <p>Taller colaborativo</p>
        </aside>
      </section>

      <section className="container intro-section">
        <div className="section-kicker">La pregunta de partida</div>
        <div className="intro-layout">
          <h2>¿Qué puede producir una herramienta y qué debe decidir un profesional?</h2>
          <div>
            <p>
              No buscamos respuestas automáticas ni una arquitectura “de moda”.
              Buscamos formular buenas preguntas antes de construir: quiénes usan
              el sistema, qué necesitan, qué información es sensible y qué debe
              seguir funcionando cuando cambie el contexto.
            </p>
            <p>
              Esta semana inicia el trabajo con <strong>SATE</strong>, el Sistema
              de Acompañamiento de Trayectorias Estudiantiles. Durante la cursada
              será nuestro caso integrador para practicar decisiones de diseño con
              evidencia.
            </p>
          </div>
        </div>
      </section>

      <section id="recorrido" className="sessions-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Recorrido de aprendizaje</p>
              <h2>Dos encuentros para empezar a diseñar</h2>
            </div>
            <p>6 horas de trabajo: discutir, analizar, producir y revisar.</p>
          </div>

          <div className="sessions-grid">
            {sessions.map((session) => (
              <article className="session-card" key={session.number}>
                <span className="session-number">{session.number}</span>
                <p className="session-time">{session.time}</p>
                <h3>{session.title}</h3>
                <p>{session.description}</p>
                <ul>
                  {session.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container case-section" aria-labelledby="case-title">
        <div className="case-header">
          <p className="section-kicker">Caso integrador</p>
          <h2 id="case-title">SATE: acompañar trayectorias, no sólo administrar datos</h2>
        </div>
        <div className="case-content">
          <p>
            El sistema permitirá que estudiantes soliciten tutorías, que tutores
            registren disponibilidad y seguimiento, y que la coordinación asigne
            intervenciones y consulte indicadores agregados.
          </p>
          <div className="case-tags" aria-label="Alcance inicial del caso">
            <span>Solicitudes de tutoría</span>
            <span>Disponibilidad de tutores</span>
            <span>Asignaciones compatibles</span>
            <span>Seguimiento e indicadores</span>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="container">
          <div className="section-heading quality-heading">
            <div>
              <p className="section-kicker">Criterios de calidad</p>
              <h2>Una buena solución protege lo que importa</h2>
            </div>
            <p>
              Un atributo de calidad no es una palabra decorativa: debe poder
              observarse en una situación concreta.
            </p>
          </div>
          <div className="quality-grid">
            {qualityAttributes.map(([title, description], index) => (
              <article className="quality-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container contrast-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Lectura crítica</p>
            <h2>Dos respuestas rápidas. Ninguna es una decisión suficiente.</h2>
          </div>
        </div>
        <div className="contrast-grid">
          <article className="proposal proposal-a">
            <p className="proposal-label">Borrador A</p>
            <h3>“Escalable desde el primer día”</h3>
            <p>
              Propone microservicios, bases de datos separadas, eventos, gateway,
              colas y contenedores para una primera versión.
            </p>
            <strong>Pregunta clave</strong>
            <p>¿Qué necesidad concreta justifica hoy ese costo operativo?</p>
          </article>
          <article className="proposal proposal-b">
            <p className="proposal-label">Borrador B</p>
            <h3>“Rápido de construir”</h3>
            <p>
              Propone una única pantalla, controladores conectados directamente a
              datos y acceso amplio para facilitar las asignaciones.
            </p>
            <strong>Pregunta clave</strong>
            <p>¿Qué límites de privacidad, evolución y prueba deja sin resolver?</p>
          </article>
        </div>
      </section>

      <section className="deliverable-section">
        <div className="container deliverable-layout">
          <div>
            <p className="section-kicker">Evidencia de la semana</p>
            <h2>Tu primera carta de diseño</h2>
            <p>
              En equipo, transformen su lectura inicial del problema en una
              evidencia breve, clara y discutible. No se evalúa la cantidad de
              código: se evalúa la calidad del razonamiento.
            </p>
          </div>
          <ol className="deliverable-list">
            <li><span>01</span> Una síntesis del problema en lenguaje no técnico.</li>
            <li><span>02</span> Tres atributos de calidad con situaciones verificables.</li>
            <li><span>03</span> Una tensión o compromiso detectado.</li>
            <li><span>04</span> Una decisión pendiente y la información necesaria.</li>
            <li><span>05</span> Una regla para el uso responsable de IA en el equipo.</li>
          </ol>
        </div>
      </section>

      <footer className="container site-footer">
        <p>Diseño de Software y Patrones</p>
        <p>Semana 1 · Diseñar en la era de la IA generativa</p>
      </footer>
    </main>
  );
}
