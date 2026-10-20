---
title: Preguntas frecuentes
description: Preguntas frecuentes sobre unsada-mcp.
---

## ¿Es oficial de la UNSAdA?

No. Es un proyecto independiente de código abierto, no afiliado ni avalado por la Universidad Nacional de San Antonio de Areco.

## ¿Qué es MCP?

El [Model Context Protocol](https://modelcontextprotocol.io) es un estándar para conectar agentes de IA con herramientas externas. unsada-mcp expone nueve herramientas para el aula.

## ¿Puede entregar tareas o escribir en foros?

No. En el aula solo lee. Las direcciones que publican, entregan, suscriben o cierran sesión se rechazan antes de pedirlas. Ver [Privacidad y seguridad](../privacidad/).

## ¿Guarda la contraseña?

No. El inicio de sesión se hace con Google en una ventana de incógnito. Solo se guarda la sesión del aula. Ver [Primer inicio de sesión](../primer-login/).

## ¿El contenido llega al modelo?

Sí. Lo que lee el agente se envía al modelo del cliente. La sesión no sale de la computadora.

## ¿Queda registro en el aula?

Sí, como cualquier visita: abrir una actividad queda en los registros y puede marcarla como vista. El servidor no hace nada que no puedas hacer tú desde el navegador.

## ¿Tiene costo?

No. Es software libre con licencia AGPL-3.0-or-later. El cliente y el modelo pueden tener su propio costo.

## ¿Qué cliente conviene sin experiencia en programación?

Claude Desktop. Se configura una vez (ver [Instalación](../instalacion/)) y se usa como un chat. Para descargas, configura también [`UNSADA_DOWNLOAD_ROOTS`](../descargas/).

## ¿Funciona en el celular o en la web?

No. El servidor corre en la computadora y se comunica por stdio con un cliente de escritorio o de terminal.

## ¿Funciona en macOS y Linux?

Sí, con Node.js 22 o superior y Chrome o Edge.

## ¿Cómo se cambia de cuenta?

Pide al agente que vuelva a iniciar sesión, o ejecuta `npx -y unsada-mcp@latest logout` y después `login`. `logout` borra la sesión del aula; la de Google nunca se guarda.

## ¿Qué pasa si cambia el aula?

Si la UNSAdA actualiza Moodle o su diseño, alguna herramienta puede dejar de interpretar una página. Repórtalo en [GitHub](https://github.com/EmilioGiordano/unsada-mcp/issues).

## ¿Cómo se colabora?

El código está en [GitHub](https://github.com/EmilioGiordano/unsada-mcp). Ver [Cómo está hecho](../proyecto/).
