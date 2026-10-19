---
title: Privacidad y seguridad
description: Qué datos toca el servidor, adónde van y qué se rechaza antes de pedirlo.
---

## En una línea

El servidor corre en tu computadora, entra al aula con tu sesión y solo lee. Tu sesión no sale de tu compu; lo que el agente lee sí llega al modelo que uses.

## Tu sesión

- No hay contraseña: entrás con Google en una ventana de tu navegador.
- Se guardan la cookie de sesión del aula y su clave de sesión en un archivo solo legible por tu usuario, dentro de `%APPDATA%\unsada-mcp` (Windows) o `~/.config/unsada-mcp` (Linux y macOS), junto al perfil del navegador del login.
- La sesión nunca aparece en lo que devuelven las herramientas, en los registros del servidor ni en pedidos a otros sitios.
- `unsada-mcp logout` borra la sesión guardada.

## Qué pide al aula

Solo pedidos de lectura (`GET`) a `moodle.unsada.edu.ar`. Antes de cada uno, la dirección se compara con una lista de páginas de lectura conocidas, con sus parámetros:

| Se lee | Ejemplo |
|---|---|
| Tablero | `/my/` |
| Curso y sus pestañas | `/course/view.php?id=2481&section=3` |
| Actividades | `/mod/forum/view.php?id=94428`, `/mod/assign/view.php?id=95112` |
| Discusiones | `/mod/forum/discuss.php?d=18822` |
| Archivos | `/pluginfile.php/…` |
| Notas | `/grade/report/overview/index.php` |
| Calendario | `/calendar/view.php?view=month` |

Cualquier otra se rechaza **sin pedirla**:

- Cerrar sesión (`/login/logout.php`), publicar (`post.php`), suscribirse (`subscribe.php`), editar o borrar.
- Cualquier dirección con la clave de sesión (`sesskey`) o con parámetros desconocidos.
- Cualquier otro sitio. Las redirecciones se siguen de a una y cada salto se vuelve a comprobar; si alguno sale del aula, se corta ahí y tu sesión no viaja con él.

La única excepción es un aviso fijo cada 10 minutos para que la sesión no venza mientras el servidor está corriendo. No se arma con nada que diga el modelo y solo extiende la sesión.

Además, cada herramienta hace como mucho cuatro pedidos a la vez, para no cargar el servidor del aula.

## Lo que queda en el aula

Para el aula, el servidor sos vos navegando. Abrir una actividad queda en los registros del aula y puede marcarla como vista, igual que si la abrieras en el navegador.

## Lo que llega al modelo

El contenido que abre el agente (un apunte, un foro, tus notas) se lo pasa al modelo que uses (Claude, GPT…), como cuando pegás algo en el chat. Qué hace el proveedor con eso depende de su política, no de este servidor. Si hay algo que no querés compartir, no se lo pidas.

## Contenido hostil

Lo que hay en una página o un archivo es contenido, no órdenes para el servidor. Si un PDF trajera instrucciones escondidas para el modelo, igual no hay herramienta que publique, entregue o borre nada en el aula, y las descargas tienen sus propias [reglas](../descargas/): nunca pisan archivos ni escriben en carpetas ocultas o de configuración.

## Lectura de documentos

Los archivos se leen en tu compu con límites de tamaño y de partes, sin ejecutar nada de lo que traen (macros, scripts, enlaces). La lectura de documentos viene de [utn-mcp](https://github.com/nialvape/utn-mcp).

## Reportar un problema de seguridad

Si encontrás una forma de que el servidor escriba en el aula, filtre la sesión o guarde archivos fuera de lugar, abrí un issue en [GitHub](https://github.com/EmilioGiordano/unsada-mcp/issues) sin publicar los detalles del ataque y pedí un canal privado.
