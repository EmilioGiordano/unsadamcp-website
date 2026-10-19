export interface ToolCall {
  tool: string;
  args?: string;
  result: string;
}

export type AnswerBlock =
  | { kind: "text"; text: string }
  | { kind: "rows"; rows: { day: string; time: string; what: string; where: string; flag?: string }[] }
  | { kind: "points"; points: string[] }
  | { kind: "files"; folder: string; files: { name: string; note?: string }[] };

export interface Session {
  id: string;
  label: string;
  prompt: string;
  calls: ToolCall[];
  answer: AnswerBlock[];
}

export const sessions: Session[] = [
  {
    id: "entregas",
    label: "Entregas",
    prompt: "¿Qué tengo que entregar esta semana?",
    calls: [
      { tool: "unsada_get_calendar", args: '{"daysAhead":7}', result: "4 eventos" },
      { tool: "unsada_list_assignments", args: '{"courseId":2481}', result: "5 tareas" },
    ],
    answer: [
      { kind: "text", text: "Tenés tres entregas y un cuestionario hasta el viernes:" },
      {
        kind: "rows",
        rows: [
          { day: "Mar 20", time: "23:59", what: "TP2: Normalización", where: "Bases de Datos", flag: "Sin entregar" },
          { day: "Mié 21", time: "18:00", what: "Cuestionario Unidad 4", where: "Análisis Matemático II" },
          { day: "Jue 22", time: "23:59", what: "Informe de laboratorio 3", where: "Física II" },
          { day: "Vie 23", time: "12:00", what: "Avance del anteproyecto", where: "Trabajo de Grado" },
        ],
      },
      { kind: "text", text: "El TP2 es el más cercano y todavía figura sin entregar. ¿Te abro la consigna?" },
    ],
  },
  {
    id: "apunte",
    label: "Apunte",
    prompt: "Resumime el apunte de la semana 3 de Bases de Datos.",
    calls: [
      { tool: "unsada_get_course", args: '{"courseId":2481}', result: "9 secciones" },
      {
        tool: "unsada_read_file",
        args: '{"url":"…/pluginfile.php/88140/mod_resource/content/2/Semana 3 - Transacciones.pdf"}',
        result: "14 páginas",
      },
    ],
    answer: [
      { kind: "text", text: "«Semana 3 – Transacciones» (14 páginas), en cinco ideas:" },
      {
        kind: "points",
        points: [
          "Una transacción es una unidad de trabajo: se aplica entera o no se aplica (atomicidad).",
          "ACID: atomicidad, consistencia, aislamiento y durabilidad, con un ejemplo de transferencia bancaria.",
          "Los niveles de aislamiento evitan lecturas sucias, no repetibles y fantasma; el apunte compara los cuatro en una tabla.",
          "El log de escritura anticipada permite deshacer y rehacer después de una caída.",
          "La página 12 tiene el ejercicio que la cátedra marcó para el parcial.",
        ],
      },
    ],
  },
  {
    id: "nota",
    label: "Nota",
    prompt: "¿Qué nota me pusieron en el TP1 y qué me corrigieron?",
    calls: [
      { tool: "unsada_list_courses", result: "7 cursos" },
      { tool: "unsada_get_grades", args: '{"courseId":2481}', result: "6 ítems" },
      { tool: "unsada_open", args: '{"url":"…/mod/assign/view.php?id=95112"}', result: "tarea" },
    ],
    answer: [
      { kind: "text", text: "En el TP1: Modelo entidad-relación de Bases de Datos te pusieron 8 sobre 10." },
      {
        kind: "points",
        points: [
          "Comentario de la docente: «Muy claro el diagrama. Revisá la cardinalidad de Inscripción: un alumno puede cursar varias comisiones.»",
          "Te dejó el diagrama corregido como archivo de devolución, TP1-devolucion.pdf.",
        ],
      },
      { kind: "text", text: "Con esto, tu promedio parcial del curso queda en 8,25." },
    ],
  },
  {
    id: "material",
    label: "Material",
    prompt: "Bajame todo el material de Bases de Datos.",
    calls: [
      { tool: "unsada_get_course", args: '{"courseId":2481}', result: "9 secciones" },
      {
        tool: "unsada_download",
        args: '{"directory":"Bases de Datos","urls":[12]}',
        result: "11 guardados, 1 salteado",
      },
    ],
    answer: [
      { kind: "text", text: "Listo. Guardé el material en la carpeta Bases de Datos, dentro de la que abriste:" },
      {
        kind: "files",
        folder: "Bases de Datos",
        files: [
          { name: "Programa 2026.pdf" },
          { name: "Semana 1 - Introducción.pdf" },
          { name: "Semana 2 - Modelo relacional.pptx" },
          { name: "Semana 3 - Transacciones.pdf" },
          { name: "Guía de ejercicios SQL.docx", note: "ya estaba, igual tamaño" },
          { name: "Datasets/", note: "carpeta, 7 archivos" },
        ],
      },
      { kind: "text", text: "No pisé nada: el archivo que ya tenías lo salteé." },
    ],
  },
];
