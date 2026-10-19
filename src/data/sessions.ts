export type AnswerBlock =
  | { kind: "text"; text: string }
  | { kind: "rows"; rows: { day: string; time: string; what: string; where: string; flag?: string }[] }
  | { kind: "points"; points: string[] }
  | { kind: "files"; folder: string; files: { name: string; note?: string }[] };

export type Step =
  | { kind: "think"; text: string }
  | { kind: "plan"; tasks: string[] }
  | { kind: "call"; tool: string; args?: string; result: string; ms: number; agentTool?: boolean; completes?: number }
  | { kind: "progress"; tool: string; args: string; total: number; result: string; ms: number; completes?: number }
  | AnswerBlock;

export interface Session {
  id: string;
  label: string;
  prompt: string;
  steps: Step[];
}

export const sessions: Session[] = [
  {
    id: "parcial",
    label: "Parcial",
    prompt:
      "Descarga todo el material de Bases de Datos, ordénalo por unidad en la carpeta de la materia y prepárame resúmenes para el primer parcial.",
    steps: [
      { kind: "think", text: "Primero veo qué hay en el curso y qué entra en el parcial." },
      {
        kind: "plan",
        tasks: [
          "Revisar el curso y la fecha del parcial",
          "Descargar el material, una carpeta por unidad",
          "Leer los apuntes de las unidades 1 a 4",
          "Escribir un resumen por unidad",
        ],
      },
      { kind: "call", tool: "unsada_get_course", args: '{"courseId":2481}', result: "9 secciones, 31 archivos", ms: 412 },
      {
        kind: "call",
        tool: "unsada_get_calendar",
        args: '{"daysAhead":30}',
        result: "Parcial 1: jue 29, 18:00",
        ms: 655,
        completes: 0,
      },
      { kind: "think", text: "Según el programa entran las unidades 1 a 4. Descargo cada una en su carpeta." },
      {
        kind: "progress",
        tool: "unsada_download",
        args: '{"directory":"Bases de Datos/Unidad 1…4"}',
        total: 31,
        result: "30 guardados, 1 ya estaba",
        ms: 8240,
        completes: 1,
      },
      { kind: "call", tool: "unsada_read_file", args: '{"url":"…/Unidad 1 - Modelo ER.pdf"}', result: "18 páginas", ms: 930 },
      { kind: "call", tool: "unsada_read_file", args: '{"url":"…/Unidad 2 - Relacional.pptx"}', result: "32 diapositivas", ms: 1104 },
      { kind: "call", tool: "unsada_read_file", args: '{"url":"…/Unidad 3 - Normalización.pdf"}', result: "22 páginas", ms: 870 },
      {
        kind: "call",
        tool: "unsada_read_file",
        args: '{"url":"…/Unidad 4 - SQL.pdf"}',
        result: "26 páginas",
        ms: 1012,
        completes: 2,
      },
      {
        kind: "call",
        tool: "Write",
        args: "Bases de Datos/Resúmenes/*.md",
        result: "4 archivos",
        ms: 96,
        agentTool: true,
        completes: 3,
      },
      { kind: "text", text: "Listo. Quedó así, dentro de la carpeta donde me abriste:" },
      {
        kind: "files",
        folder: "Bases de Datos",
        files: [
          { name: "Unidad 1/", note: "8 archivos" },
          { name: "Unidad 2/", note: "9 archivos" },
          { name: "Unidad 3/", note: "7 archivos" },
          { name: "Unidad 4/", note: "7 archivos, 1 ya estaba" },
          { name: "Resúmenes/", note: "4 resúmenes" },
        ],
      },
      {
        kind: "text",
        text: "El parcial es el jueves 29 a las 18:00. En cada resumen marqué los ejercicios que la cátedra dijo que entran. ¿Te preparo un simulacro con las guías?",
      },
    ],
  },
  {
    id: "entregas",
    label: "Entregas",
    prompt: "Revisa todas mis materias y dime qué me falta entregar este mes, de lo más urgente a lo menos.",
    steps: [
      { kind: "think", text: "Cruzo el calendario con las tareas de cada materia para saber qué ya entregaste." },
      { kind: "call", tool: "unsada_list_courses", result: "6 cursos", ms: 388 },
      { kind: "call", tool: "unsada_get_calendar", args: '{"daysAhead":30}', result: "9 eventos", ms: 702 },
      {
        kind: "progress",
        tool: "unsada_list_assignments",
        args: "6 cursos",
        total: 6,
        result: "14 tareas, 9 entregadas",
        ms: 2310,
      },
      { kind: "think", text: "Quedan cinco sin entregar. El TP2 cierra en dos días y no tiene nada subido." },
      { kind: "text", text: "Te faltan cinco, por fecha de cierre:" },
      {
        kind: "rows",
        rows: [
          { day: "Mar 20", time: "23:59", what: "TP2: Normalización", where: "Bases de Datos", flag: "En 2 días" },
          { day: "Mié 21", time: "18:00", what: "Cuestionario Unidad 4", where: "Análisis Matemático II" },
          { day: "Vie 23", time: "12:00", what: "Avance del anteproyecto", where: "Trabajo de Grado" },
          { day: "Lun 26", time: "23:59", what: "Informe de laboratorio 3", where: "Física II" },
          { day: "Vie 30", time: "23:59", what: "TP3: Consultas SQL", where: "Bases de Datos" },
        ],
      },
      {
        kind: "text",
        text: "Empezaría por el TP2. ¿Quieres que lea la consigna y te prepare un plan para terminarlo a tiempo?",
      },
    ],
  },
  {
    id: "notas",
    label: "Notas",
    prompt: "¿Cómo vengo en Bases de Datos? Mira las notas y las devoluciones y dime qué tengo que repasar.",
    steps: [
      { kind: "think", text: "Busco las notas del curso y abro la devolución de cada trabajo corregido." },
      { kind: "call", tool: "unsada_get_grades", args: '{"courseId":2481}', result: "6 ítems, 2 corregidos", ms: 540 },
      { kind: "call", tool: "unsada_open", args: '{"url":"…/mod/assign/view.php?id=95112"}', result: "TP1: 8/10", ms: 611 },
      { kind: "call", tool: "unsada_read_file", args: '{"url":"…/TP1-devolucion.pdf"}', result: "2 páginas", ms: 734 },
      { kind: "call", tool: "unsada_open", args: '{"url":"…/mod/quiz/view.php?id=95140"}', result: "Cuestionario 2: 6/10", ms: 498 },
      { kind: "think", text: "Los dos errores apuntan al mismo tema: claves y cardinalidad." },
      { kind: "text", text: "Llevas 7 de promedio en lo que ya está corregido:" },
      {
        kind: "points",
        points: [
          "TP1, Modelo ER: 8. La docente marcó la cardinalidad de Inscripción: un alumno puede cursar varias comisiones.",
          "Cuestionario 2, Modelo relacional: 6. Las tres preguntas de claves foráneas quedaron mal.",
          "Conviene repasar dependencias funcionales y claves: es lo que más pesa en el parcial del jueves 29.",
        ],
      },
      { kind: "text", text: "¿Te preparo diez ejercicios de claves y cardinalidad con las guías del curso?" },
    ],
  },
  {
    id: "foros",
    label: "Foros",
    prompt: "¿Hubo avisos en los foros esta semana que cambien alguna fecha?",
    steps: [
      { kind: "think", text: "Reviso el foro de avisos de cada materia y abro solo las discusiones nuevas." },
      { kind: "call", tool: "unsada_list_courses", result: "6 cursos", ms: 362 },
      {
        kind: "progress",
        tool: "unsada_open",
        args: "6 foros de avisos",
        total: 6,
        result: "4 discusiones nuevas",
        ms: 2580,
      },
      { kind: "call", tool: "unsada_open", args: '{"url":"…/mod/forum/discuss.php?d=18822"}', result: "7 respuestas", ms: 590 },
      { kind: "call", tool: "unsada_open", args: '{"url":"…/mod/forum/discuss.php?d=18840"}', result: "2 respuestas", ms: 545 },
      { kind: "text", text: "Sí, hubo dos cambios de fecha:" },
      {
        kind: "points",
        points: [
          "Física II: el informe de laboratorio 3 pasa al lunes 26 a las 23:59. Lo avisó el ayudante el martes.",
          "Análisis Matemático II: el cuestionario de la Unidad 4 abre una hora antes, a las 17:00.",
        ],
      },
      { kind: "text", text: "Los otros dos avisos suben material nuevo, sin cambios de fecha. ¿Te lo resumo?" },
    ],
  },
];
