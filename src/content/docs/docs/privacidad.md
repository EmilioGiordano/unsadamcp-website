---
title: Privacidad y seguridad
description: Datos que maneja el servidor, adónde se envían y qué solicitudes se rechazan.
---

## Resumen

El servidor corre en la computadora, usa la sesión del aula y solo lee. La sesión no sale de la computadora. El contenido que lee el agente se envía al modelo del cliente.

## Sesión

- La contraseña no se guarda. El inicio de sesión se hace con Google en una ventana de incógnito, que no guarda datos en el disco.
- La cookie de sesión del aula y su clave (`sesskey`) se guardan en un archivo legible solo por el usuario, en `%APPDATA%\unsada-mcp` (Windows) o `~/.config/unsada-mcp` (Linux y macOS). Es lo único que se guarda.
- La sesión nunca aparece en las respuestas de las herramientas, en los registros ni en solicitudes a otros sitios.
- `unsada-mcp logout` borra la sesión.
- Un agente que ejecuta comandos de terminal puede leer ese archivo. Configúralo para pedir confirmación, por ejemplo en OpenCode con `"permission": { "bash": "ask" }`.

## Solicitudes al aula

Solo solicitudes `GET` a `moodle.unsada.edu.ar`. Cada dirección se valida, con sus parámetros, contra una lista de páginas de lectura:

| Página | Ejemplo |
|---|---|
| Tablero | `/my/` |
| Curso y pestañas | `/course/view.php?id=2481&section=3` |
| Actividades | `/mod/forum/view.php?id=94428`, `/mod/assign/view.php?id=95112` |
| Discusiones | `/mod/forum/discuss.php?d=18822` |
| Archivos | `/pluginfile.php/…` |
| Notas | `/grade/report/overview/index.php` |
| Calendario | `/calendar/view.php?view=month` |

Se rechazan **antes de enviarse**:

- Cierre de sesión (`/login/logout.php`), publicación (`post.php`), suscripción (`subscribe.php`), edición y borrado.
- Direcciones con `sesskey` o con parámetros desconocidos.
- Otros sitios. Cada redirección se valida; si sale del aula, se detiene y la sesión no se envía.

Única excepción: una solicitud fija cada 10 minutos que mantiene activa la sesión. No depende de datos del modelo y solo extiende la sesión.

Cada herramienta hace como máximo cuatro solicitudes simultáneas.

## Registro en el aula

El aula registra las visitas del servidor como visitas del usuario. Abrir una actividad puede marcarla como vista.

## Datos enviados al modelo

El contenido que abre el agente (apuntes, foros, notas) se envía al modelo del cliente. Su tratamiento depende de la política del proveedor. Si hay algo que no quieres compartir, no se lo pidas.

## Contenido hostil

El contenido de páginas y archivos se trata como datos, no como instrucciones. Ninguna herramienta publica, entrega ni borra en el aula, y las descargas siguen sus propias [reglas](../descargas/): sin sobrescritura y sin escritura en carpetas ocultas o de configuración.

## Lectura de documentos

Los archivos se procesan localmente, con límites de tamaño y de partes, sin ejecutar macros, scripts ni enlaces. El lector de documentos proviene de [utn-mcp](https://github.com/nialvape/utn-mcp).

## Reportar vulnerabilidades

Para reportar una forma de escribir en el aula, filtrar la sesión o guardar archivos fuera de lugar, abre un issue en [GitHub](https://github.com/EmilioGiordano/unsada-mcp/issues) sin detalles del ataque y solicita un canal privado.
