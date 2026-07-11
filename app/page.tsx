const modules = [
  ["01", "Diseñar en la era de la IA", "En curso"],
  ["02", "Contexto, actores y calidad", "Próximamente"],
  ["03", "Comparar arquitecturas", "Próximamente"],
  ["04", "Decidir con ADR", "Próximamente"],
];

const tableOfContents = [
  ["punto-de-partida", "1. Antes de diseñar: una pregunta"],
  ["ia-y-criterio", "2. IA generativa y criterio profesional"],
  ["caso-sate", "3. Conocer el caso SATE"],
  ["calidad", "4. Atributos de calidad"],
  ["borradores", "5. Leer propuestas críticamente"],
  ["carta", "6. Carta de diseño inicial"],
  ["recorrido", "7. Recorrido y entrega"],
];

const qualities = [
  ["Mantenibilidad", "Cuando cambie una regla de asignación, el equipo debe poder modificarla sin reescribir la interfaz ni la persistencia.", "Separar responsabilidades y mantener contratos claros."],
  ["Testabilidad", "Las reglas de asignación y los cambios de estado deben poder verificarse sin una interfaz ni una base de datos real.", "Conservar la lógica de negocio desacoplada de detalles externos."],
  ["Privacidad", "Un estudiante sólo accede a sus solicitudes; los indicadores no exponen seguimientos individuales.", "Definir límites de acceso y respuestas con los datos mínimos."],
  ["Evolutividad", "En el futuro podría agregarse un calendario externo sin alterar las reglas centrales.", "Pensar contratos y adaptadores sin implementar todavía la integración."],
  ["Simplicidad", "La primera versión debe poder comprenderse y realizarse dentro de la cursada.", "Evitar tecnologías o patrones que no respondan a una necesidad concreta."],
];

export default function Home() {
  return (
    <main className="classroom-shell">
      <aside className="course-sidebar" aria-label="Navegación del curso">
        <div className="brand"><span className="brand-mark">DS</span><span>DISOPA</span></div>
        <div className="course-summary">
          <p className="sidebar-label">Tu curso</p>
          <h1>Diseño de Software y Patrones</h1>
          <div className="progress-track"><span /></div>
          <p className="progress-copy">7% completado · Semana 1 de 15</p>
        </div>
        <nav className="module-nav" aria-label="Módulos del curso">
          <p className="sidebar-label">Contenido</p>
          {modules.map(([number, title, state], index) => (
            <a className={`module-item${index === 0 ? " active" : ""}`} href={index === 0 ? "#apunte" : "#proximamente"} key={number}>
              <span className="module-number">{number}</span>
              <span className="module-text"><strong>{title}</strong><small>{state}</small></span>
              {index === 0 && <span className="active-dot" aria-label="Módulo actual" />}
            </a>
          ))}
        </nav>
        <div className="student-card"><div className="student-avatar">EA</div><div><strong>Estudiante</strong><span>Segundo año</span></div><span className="more">•••</span></div>
      </aside>

      <div className="classroom-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Mis cursos</span><b>/</b> Diseño de Software y Patrones</div>
          <div className="week-status"><span className="status-dot" /> Semana 1 activa</div>
        </header>

        <div className="study-layout" id="apunte">
          <article className="study-note">
            <div className="lesson-meta"><span>Semana 01</span><span>·</span><span>6 horas</span><span>·</span><span>Lectura y taller</span></div>
            <p className="eyebrow">Apunte de estudio</p>
            <h2>Diseñar en la era de la IA generativa</h2>
            <p className="note-lead">Esta semana no empezamos eligiendo un framework ni escribiendo código. Empezamos por una pregunta más importante: <strong>¿qué problema estamos resolviendo y con qué criterio vamos a tomar decisiones?</strong></p>

            <div className="idea-card">
              <span>✦</span><div><strong>Idea central</strong><p>La IA puede acelerar artefactos; la responsabilidad de formular, decidir y verificar una solución sigue siendo humana.</p></div>
            </div>

            <section id="punto-de-partida" className="note-section">
              <p className="section-number">01</p><h3>Antes de diseñar: una pregunta</h3>
              <p>Diseñar software no es elegir la tecnología más reciente. Es transformar una necesidad en una solución que pueda comprenderse, evolucionar y verificarse. Para eso primero necesitamos conocer el problema, sus límites y las consecuencias de cada alternativa.</p>
              <div className="definition-grid">
                <div><strong>Problema</strong><p>Situación que afecta a personas u organizaciones y que se busca mejorar.</p></div>
                <div><strong>Restricción</strong><p>Condición que limita una solución: tiempo, datos sensibles, reglas o recursos.</p></div>
                <div><strong>Atributo de calidad</strong><p>Propiedad que indica cómo debe comportarse la solución, además de lo que hace.</p></div>
                <div><strong>Decisión de diseño</strong><p>Elección justificada entre alternativas, con consecuencias conocidas.</p></div>
              </div>
              <p className="study-question"><strong>Para pensar:</strong> si dos soluciones cumplen la misma función, ¿cuál elegirías y con qué evidencia?</p>
            </section>

            <section id="ia-y-criterio" className="note-section">
              <p className="section-number">02</p><h3>IA generativa y criterio profesional</h3>
              <p>Un asistente puede sugerir nombres, generar casos de prueba o redactar un borrador de arquitectura. Eso no convierte su salida en una decisión correcta para nuestro contexto. Una propuesta puede ser técnicamente posible y, al mismo tiempo, desproporcionada, insegura o difícil de mantener.</p>
              <div className="responsibility-table">
                <div className="table-row table-head"><span>Tarea</span><span>La IA puede asistir</span><span>El equipo debe responder</span></div>
                <div className="table-row"><span>Nombrar una interfaz</span><span>Proponer alternativas</span><span>Elegir un nombre coherente con el dominio</span></div>
                <div className="table-row"><span>Generar pruebas</span><span>Crear borradores de casos</span><span>Verificar que cubren los criterios correctos</span></div>
                <div className="table-row"><span>Elegir arquitectura</span><span>Comparar opciones</span><span>Justificar costos, riesgos y atributos priorizados</span></div>
                <div className="table-row"><span>Gestionar datos</span><span>Señalar posibles controles</span><span>Definir quién puede ver qué información</span></div>
              </div>
              <div className="warning-card"><strong>No delegues la justificación.</strong><p>Una respuesta generada no reemplaza el análisis de requisitos, contratos, riesgos ni pruebas. Si usás IA en un entregable, registrá qué pediste, qué aceptaste o descartaste y cómo lo verificaste.</p></div>
            </section>

            <section id="caso-sate" className="note-section">
              <p className="section-number">03</p><h3>Conocer el caso: SATE</h3>
              <p>Durante la cursada trabajaremos con el <strong>Sistema de Acompañamiento de Trayectorias Estudiantiles</strong>. Hoy las solicitudes de tutoría, la disponibilidad de tutores y los seguimientos se distribuyen entre mensajes, planillas y canales no integrados. Esto dificulta evitar superposiciones, conocer el estado de las intervenciones y obtener información agregada para la coordinación.</p>
              <div className="sate-card">
                <div className="sate-title"><span>SATE</span><strong>Una primera solución evolutiva y mantenible para organizar tutorías.</strong></div>
                <div className="actor-grid">
                  <div><b>Estudiante</b><p>Solicita ayuda y consulta el estado de sus tutorías.</p></div>
                  <div><b>Tutor/a</b><p>Declara disponibilidad y registra un seguimiento breve.</p></div>
                  <div><b>Coordinador/a</b><p>Asigna tutorías, resuelve conflictos y consulta indicadores.</p></div>
                  <div><b>Administrador/a</b><p>Mantiene roles, usuarios y parámetros básicos.</p></div>
                </div>
              </div>
              <div className="scope-grid">
                <div><p className="scope-label included">Primera versión: sí</p><ul><li>Solicitudes y franjas de disponibilidad.</li><li>Asignación compatible de tutorías.</li><li>Estados e historial mínimo.</li><li>Indicadores agregados.</li></ul></div>
                <div><p className="scope-label excluded">Por ahora: no</p><ul><li>Calendario, correo o mensajería reales.</li><li>Chat, videollamadas o documentos personales.</li><li>Analítica predictiva o recomendaciones por IA.</li></ul></div>
              </div>
            </section>

            <section id="calidad" className="note-section">
              <p className="section-number">04</p><h3>Atributos de calidad: cómo debe ser la solución</h3>
              <p>Decir “queremos seguridad” o “el sistema debe ser mantenible” no alcanza. Un atributo útil se formula como un escenario: <em>cuando ocurra un estímulo, el sistema debe responder de una manera que podamos comprobar.</em></p>
              <div className="quality-list">
                {qualities.map(([name, scenario, implication]) => <div className="quality-row" key={name}><div><strong>{name}</strong><span>Escenario</span><p>{scenario}</p></div><div><span>Implicancia</span><p>{implication}</p></div></div>)}
              </div>
              <p className="study-question"><strong>Regla práctica:</strong> para cada atributo, anotá qué evidencia demostraría que se cumple y qué costo o tensión acepta el equipo.</p>
            </section>

            <section id="borradores" className="note-section">
              <p className="section-number">05</p><h3>Leer propuestas críticamente</h3>
              <p>En diseño, el problema rara vez es una alternativa “obviamente mala”. Frecuentemente tenemos ideas plausibles que omiten contexto, costos o riesgos. Observá estos dos borradores para SATE.</p>
              <div className="draft-grid">
                <div className="draft-card"><p>Borrador A · “Escalable desde el primer día”</p><h4>Microservicios para todo</h4><blockquote>Cinco servicios independientes, bases de datos separadas, eventos, gateway, colas y contenedores desde la primera versión.</blockquote><strong>Preguntá:</strong><span>¿Qué necesidad actual compensa ese costo operativo?</span></div>
                <div className="draft-card"><p>Borrador B · “Rápido de construir”</p><h4>Todo en controladores</h4><blockquote>Una única pantalla y controladores que acceden directamente a datos; el coordinador ve toda la información.</blockquote><strong>Preguntá:</strong><span>¿Qué límites de privacidad, evolución y pruebas quedan sin resolver?</span></div>
              </div>
              <ul className="analysis-list"><li>¿Qué necesidad concreta atiende cada propuesta?</li><li>¿Qué atributo protege y cuál pone en riesgo?</li><li>¿Qué supuesto no fue declarado?</li><li>¿Qué debería probarse o investigarse antes de implementar?</li></ul>
            </section>

            <section id="carta" className="note-section">
              <p className="section-number">06</p><h3>Tu carta de diseño inicial</h3>
              <p>La carta de diseño es el primer artefacto del equipo. No es un diseño terminado: es una evidencia de que empezaron por comprender el problema antes de proponer una solución.</p>
              <ol className="deliverable-list">
                <li><span>01</span><div><strong>Problema</strong><p>Describan la situación, quién se ve afectado y qué mejora se espera. No mencionen tecnologías todavía.</p></div></li>
                <li><span>02</span><div><strong>Actores y necesidades</strong><p>Identifiquen quién usa el sistema, qué necesita y qué restricciones son relevantes.</p></div></li>
                <li><span>03</span><div><strong>Alcance inicial</strong><p>Separen con claridad qué se incluirá y qué queda fuera de la primera versión.</p></div></li>
                <li><span>04</span><div><strong>Tres atributos priorizados</strong><p>Para cada uno escriban un escenario verificable, una evidencia y una tensión aceptada.</p></div></li>
                <li><span>05</span><div><strong>Preguntas abiertas y regla de IA</strong><p>Declaren una decisión pendiente, la información necesaria y cómo usarán IA de forma responsable.</p></div></li>
              </ol>
              <div className="example-card"><p>Ejemplo de escenario</p><strong>“Cuando coordinación asigne una tutoría, el sistema debe impedir una franja que se superponga con otra tutoría confirmada del mismo tutor.”</strong><span>La evidencia puede ser una prueba automatizada de la regla de compatibilidad.</span></div>
            </section>

            <section id="recorrido" className="note-section">
              <p className="section-number">07</p><h3>Recorrido de la semana y entrega</h3>
              <div className="route-grid">
                <div><span>Encuentro 1 · 3 horas</span><h4>¿Qué decide un diseñador?</h4><p>Clasificá tareas, compará los dos borradores y registrá preguntas que ninguna IA podría responder sin más contexto.</p></div>
                <div><span>Encuentro 2 · 3 horas</span><h4>Carta de diseño inicial</h4><p>Priorizá atributos, completá la ficha en equipo, intercambiá devoluciones y ajustá la carta antes de entregarla.</p></div>
              </div>
              <div className="checklist-card"><h4>Antes de entregar, verificá</h4><label><input type="checkbox" /> Puedo explicar el problema sin hablar de una tecnología.</label><label><input type="checkbox" /> Cada atributo tiene un escenario y una evidencia.</label><label><input type="checkbox" /> Declaré al menos una incertidumbre en lugar de inventar un requisito.</label><label><input type="checkbox" /> Puedo justificar cualquier aporte que haya obtenido con IA.</label></div>
            </section>

            <footer className="note-footer"><div><strong>Fin del apunte · Semana 1</strong><p>La próxima semana pasaremos del problema a los actores, escenarios y criterios de aceptación.</p></div><a href="#apunte">Volver al inicio ↑</a></footer>
          </article>

          <aside className="study-index" aria-label="Índice del apunte">
            <div className="index-card"><p>En este apunte</p>{tableOfContents.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
            <div className="index-card note-status"><span>◔</span><div><strong>Lectura estimada</strong><p>20–25 min</p></div></div>
            <div className="index-card help-card"><strong>Cómo usar este apunte</strong><p>Leé, tomá notas y volvé a las preguntas durante el taller con tu equipo.</p></div>
          </aside>
        </div>
        <div id="proximamente" className="next-module">Próximo módulo: Contexto, actores y atributos de calidad</div>
      </div>
    </main>
  );
}
