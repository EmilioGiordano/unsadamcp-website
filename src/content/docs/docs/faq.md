---
title: Preguntas frecuentes
description: Lo que más se pregunta sobre UNSAdA-MCP.
---

## ¿Es oficial de la UNSAdA?

No. Es un proyecto independiente de código abierto. No está afiliado ni avalado por la Universidad Nacional de San Antonio de Areco.

## ¿Qué es MCP?

El [Model Context Protocol](https://modelcontextprotocol.io) es un estándar para conectar agentes de IA con herramientas. Este servidor le agrega a tu agente nueve herramientas para leer el aula.

## ¿Puede entregar una tarea o escribir en un foro por mí?

No. En el aula solo lee. Cualquier dirección que publique, entregue, suscriba o cierre sesión se rechaza antes de pedirla. Ver [Privacidad y seguridad](../privacidad/).

## ¿Guarda mi contraseña?

No hay contraseña que guardar: entrás con Google en tu propio navegador. Lo que queda en tu compu es la sesión del aula. Ver [Primer inicio de sesión](../primer-login/).

## ¿Lo que lee le llega a la IA?

Sí. El contenido que abre el agente se lo pasa al modelo que uses, como cuando pegás un apunte en el chat. Tu sesión, en cambio, nunca sale de tu compu.

## ¿Se dan cuenta en el aula?

Para el aula es una visita tuya más: abrir una actividad queda en sus registros y puede marcarla como vista. No hace nada que no puedas hacer vos desde el navegador.

## ¿Cuánto cuesta?

Nada. Es software libre con licencia ISC. Necesitás un cliente con un modelo (Claude, Codex, Cursor…), que puede tener su propio costo.

## ¿Qué cliente me conviene si no sé programar?

Claude Desktop: lo configurás una vez con el archivo de [Instalación](../instalacion/) y después es un chat común. Para descargar archivos conviene configurar también [`UNSADA_DOWNLOAD_ROOTS`](../descargas/).

## ¿Funciona en el celular o en la web?

No por ahora. El servidor corre en tu computadora y habla con el agente por stdio, así que lo usás desde un cliente de escritorio o una terminal.

## ¿Funciona con Mac y Linux?

Sí. Necesitás Node 22 o más nuevo y Chrome o Edge instalado.

## ¿Puedo usarlo con otra cuenta?

Sí. Pedile al agente que vuelva a entrar, o corré `npx -y unsada-mcp logout` y después `login` con la otra cuenta.

## ¿Qué pasa si cambian el aula?

Como lee las mismas páginas que ves vos, si la UNSAdA actualiza Moodle o cambia el diseño, alguna herramienta puede dejar de entender una página hasta que se ajuste. Si te pasa, avisá en [GitHub](https://github.com/EmilioGiordano/unsada-mcp/issues).

## ¿Puedo colaborar?

Sí. El código está en [GitHub](https://github.com/EmilioGiordano/unsada-mcp). Mirá [Cómo está hecho](../proyecto/) para empezar.
