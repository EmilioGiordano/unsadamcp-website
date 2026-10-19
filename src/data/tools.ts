export interface Tool {
  name: string;
  summary: string;
  detail: string;
  ask: string;
  input: string;
  output: string;
  writes?: "disk" | "browser";
}

export const tools: Tool[] = [
  {
    name: "unsada_list_courses",
    summary: "Tus cursos, los más recientes primero.",
    detail:
      "Es el punto de partida: junta el tablero con el resumen de notas, así no se pierden los cursos de años anteriores. El id de cada curso lo usan las demás herramientas.",
    ask: "¿Qué materias estoy cursando este año?",
    input: "{}",
    output: '[{"id":2481,"name":"Bases de Datos","year":2026},{"id":2477,"name":"Física II","year":2026},…]',
  },
  {
    name: "unsada_get_course",
    summary: "Secciones, actividades y recursos de un curso.",
    detail:
      "Recorre cada pestaña o semana del curso, incluidas las etiquetas, que suelen tener horarios de cursada y links de las clases.",
    ask: "¿Qué hay en la unidad 2 de Física?",
    input: '{"courseId":2477}',
    output:
      '{"id":2477,"name":"Física II","sections":[{"number":2,"name":"Unidad 2","activities":[{"module":"resource","name":"Guía 2","url":"…"}]}]}',
  },
  {
    name: "unsada_open",
    summary: "Abre foros, discusiones, páginas, carpetas, tareas y enlaces.",
    detail:
      "Devuelve el contenido según el tipo: un foro con sus discusiones, una discusión con todos sus mensajes, una tarea con la consigna, tu entrega y la devolución.",
    ask: "¿Qué dijo la profe en el foro de Trabajo de Grado?",
    input: '{"url":"…/mod/forum/view.php?id=94428"}',
    output: '{"kind":"forum","title":"Consultas","discussions":[{"title":"Fecha del coloquio","author":"…","replies":4,"url":"…"}],"page":0}',
  },
  {
    name: "unsada_read_file",
    summary: "Lee PDF, Word, PowerPoint, Excel, imágenes y texto.",
    detail:
      "Trae el archivo por partes (páginas, diapositivas o bloques), las que entran en una respuesta. Las páginas escaneadas llegan como imagen para que el modelo las lea.",
    ask: "Resume el apunte de la semana 3.",
    input: '{"url":"…/pluginfile.php/88140/…/Semana 3.pdf"}',
    output: '{"file":"Semana 3 - Transacciones.pdf","format":"pdf","unit":"page","total":14,"from":1,"to":8,"next":9}',
  },
  {
    name: "unsada_download",
    summary: "Guarda archivos, recursos o carpetas enteras en tu disco.",
    detail:
      "Lo único que escribe, y solo en tu computadora: dentro de la carpeta donde abriste el agente. Nunca pisa un archivo: si ya hay uno del mismo tamaño lo omite, y si es distinto agrega (2).",
    ask: "Descarga todo el material de Bases de Datos.",
    input: '{"directory":"Bases de Datos","urls":["…/mod/folder/view.php?id=95020"]}',
    output: '{"directory":"C:\\\\Facultad\\\\Bases de Datos","saved":11,"skipped":1,"failed":0,"files":[…]}',
    writes: "disk",
  },
  {
    name: "unsada_list_assignments",
    summary: "Tareas de un curso con vencimiento, estado y nota.",
    detail: "Una fila por tarea: cuándo vence, si ya entregaste y qué nota tiene. La consigna completa se abre con unsada_open.",
    ask: "¿Me falta entregar algo de Bases de Datos?",
    input: '{"courseId":2481}',
    output: '[{"name":"TP2: Normalización","dueDate":"2026-10-20T23:59-03:00","submission":"notSubmitted","url":"…"}]',
  },
  {
    name: "unsada_get_grades",
    summary: "Notas de todos los cursos o el detalle de uno.",
    detail: "Sin curso, el total de cada materia. Con curso, cada ítem calificado con nota, rango, porcentaje y comentario.",
    ask: "¿Qué nota me pusieron en el TP1?",
    input: '{"courseId":2481}',
    output: '{"courseId":2481,"items":[{"item":"TP1: Modelo entidad-relación","grade":8,"range":"0–10","percentage":80}]}',
  },
  {
    name: "unsada_get_calendar",
    summary: "Próximos vencimientos y eventos, con hora exacta.",
    detail:
      "Lee el calendario mes por mes y día por día, porque la exportación del aula pierde las horas. Todo en hora de Argentina y en orden.",
    ask: "¿A qué hora cierra el cuestionario de Análisis?",
    input: '{"daysAhead":7}',
    output: '{"events":[{"date":"Wed 2026-10-21","time":"18:00","title":"Cuestionario Unidad 4 cierra","course":"Análisis Matemático II"}]}',
  },
  {
    name: "unsada_login",
    summary: "Abre el navegador para volver a iniciar sesión.",
    detail:
      "Casi nunca hace falta: si la sesión vence, el servidor abre la ventana solo. Sirve para cambiar de cuenta o cuando la ventana no se ve.",
    ask: "Inicia sesión con mi otra cuenta.",
    input: "{}",
    output: '{"signedIn":true}',
    writes: "browser",
  },
];
