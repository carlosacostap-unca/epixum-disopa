const modules = [
  { number: "01", title: "Diseñar en la era de la IA", state: "En curso", active: true },
  { number: "02", title: "Contexto y atributos de calidad", state: "Próximamente" },
  { number: "03", title: "Comparar arquitecturas", state: "Próximamente" },
  { number: "04", title: "Decidir y documentar con ADR", state: "Próximamente" },
];

const learningGoals = [
  "Distinguir una propuesta generada de una decisión de diseño justificada.",
  "Reconocer atributos de calidad y sus tensiones iniciales.",
  "Elaborar una carta de diseño para el caso SATE.",
];

const qualityAttributes = [
  ["Mantenibilidad", "Cambiar una regla sin romper las demás."],
  ["Testabilidad", "Comprobar el comportamiento con ejemplos y pruebas."],
  ["Privacidad", "Mostrar a cada rol sólo la información necesaria."],
  ["Simplicidad", "Construir una primera versión proporcional al problema."],
];

export default function Home() {
  return (
    <main className="classroom-shell">
      <aside className="course-sidebar" aria-label="Navegación del curso">
        <div className="brand">
          <span className="brand-mark">DS</span>
          <span>DISOPA</span>
        </div>

        <div className="course-summary">
          <p className="sidebar-label">Tu curso</p>
          <h1>Diseño de Software y Patrones</h1>
          <div className="progress-track" aria-label="Progreso del curso: 7 por ciento">
            <span />
          </div>
          <p className="progress-copy">7% completado · Semana 1 de 15</p>
        </div>

        <nav className="module-nav" aria-label="Módulos del curso">
          <p className="sidebar-label">Contenido</p>
          {modules.map((module) => (
            <a
              className={`module-item${module.active ? " active" : ""}`}
              href={module.active ? "#leccion" : "#proximamente"}
              key={module.number}
            >
              <span className="module-number">{module.number}</span>
              <span className="module-text">
                <strong>{module.title}</strong>
                <small>{module.state}</small>
              </span>
              {module.active && <span className="active-dot" aria-label="Módulo actual" />}
            </a>
          ))}
        </nav>

        <div className="student-card">
          <div className="student-avatar">EA</div>
          <div>
            <strong>Estudiante</strong>
            <span>Segundo año</span>
          </div>
          <span className="more" aria-hidden="true">•••</span>
        </div>
      </aside>

      <div className="classroom-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Mis cursos</span><b>/</b> Diseño de Software y Patrones</div>
          <div className="week-status"><span className="status-dot" /> Semana 1 activa</div>
        </header>

        <section className="lesson-layout" id="leccion">
          <article className="lesson-content">
            <div className="lesson-meta">
              <span>Semana 01</span>
              <span>·</span>
              <span>6 horas</span>
              <span>·</span>
              <span>Unidad 1</span>
            </div>
            <p className="eyebrow">Lección actual</p>
            <h2>Diseñar en la era de la IA generativa</h2>
            <p className="lesson-lead">
              Una herramienta puede proponer código, modelos o arquitecturas en
              segundos. Tu trabajo como diseñador es comprender el contexto,
              evaluar las consecuencias y responder por las decisiones.
            </p>

            <div className="callout">
              <span className="callout-icon">✦</span>
              <div>
                <strong>Idea central de la semana</strong>
                <p>La IA acelera borradores; el criterio profesional decide qué aceptar, qué cuestionar y cómo verificarlo.</p>
              </div>
            </div>

            <section className="lesson-section" aria-labelledby="objetivos">
              <div className="section-title">
                <span>01</span>
                <h3 id="objetivos">Al finalizar esta semana podrás</h3>
              </div>
              <ul className="goal-list">
                {learningGoals.map((goal) => <li key={goal}>{goal}</li>)}
              </ul>
            </section>

            <section className="lesson-section" aria-labelledby="caso">
              <div className="section-title">
                <span>02</span>
                <h3 id="caso">El caso que vamos a diseñar</h3>
              </div>
              <div className="sate-card">
                <div className="sate-title"><span>SATE</span><strong>Sistema de Acompañamiento de Trayectorias Estudiantiles</strong></div>
                <p>
                  Estudiantes solicitan tutorías, tutores registran su disponibilidad
                  y seguimiento, y una coordinación asigna intervenciones y consulta
                  indicadores agregados.
                </p>
                <div className="tag-list">
                  <span>Solicitudes de tutoría</span>
                  <span>Disponibilidad</span>
                  <span>Asignaciones</span>
                  <span>Seguimiento</span>
                </div>
              </div>
            </section>

            <section className="lesson-section" aria-labelledby="calidad">
              <div className="section-title">
                <span>03</span>
                <h3 id="calidad">Antes de una solución, criterios de calidad</h3>
              </div>
              <p className="section-copy">Un atributo de calidad no es una etiqueta: es algo que debe poder observarse en una situación concreta.</p>
              <div className="quality-grid">
                {qualityAttributes.map(([title, copy]) => (
                  <div className="quality-card" key={title}>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="lesson-section" aria-labelledby="actividad">
              <div className="section-title">
                <span>04</span>
                <h3 id="actividad">Actividad de la semana</h3>
              </div>
              <div className="activity-card">
                <div>
                  <p className="activity-type">Trabajo en equipo · Entrega breve</p>
                  <h4>Carta de diseño inicial</h4>
                  <p>Elaboren una primera lectura del problema y prioricen tres atributos de calidad con una justificación breve.</p>
                </div>
                <ol>
                  <li>Problema en lenguaje no técnico.</li>
                  <li>Tres atributos con situaciones verificables.</li>
                  <li>Una tensión y una decisión pendiente.</li>
                  <li>Una regla para usar IA en el equipo.</li>
                </ol>
              </div>
            </section>

            <div className="lesson-footer">
              <p>Cuando termines de leer, conversá con tu equipo y empezá la carta de diseño.</p>
              <a href="#actividad">Ir a la actividad <span>→</span></a>
            </div>
          </article>

          <aside className="lesson-panel" aria-label="Información de la lección">
            <div className="panel-card current-card">
              <p>Estás aquí</p>
              <h3>Semana 1</h3>
              <div className="mini-progress"><span /></div>
              <small>Lección 1 de 2</small>
            </div>
            <div className="panel-card schedule-card">
              <p className="panel-label">Esta semana</p>
              <div className="schedule-item"><span>01</span><div><strong>¿Qué decide un diseñador?</strong><small>Encuentro 1 · 3 horas</small></div></div>
              <div className="schedule-item"><span>02</span><div><strong>Carta de diseño inicial</strong><small>Encuentro 2 · 3 horas</small></div></div>
            </div>
            <div className="panel-card reminder-card">
              <span>↗</span>
              <p><strong>Recordá:</strong> una propuesta de IA puede ser útil sin ser automáticamente correcta.</p>
            </div>
          </aside>
        </section>

        <div id="proximamente" className="next-module">Próximo módulo: Contexto, actores y atributos de calidad</div>
      </div>
    </main>
  );
}
