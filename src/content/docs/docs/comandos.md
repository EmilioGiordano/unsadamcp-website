---
title: Comandos y variables
description: Los comandos de la terminal y las variables de entorno opcionales.
---

## Comandos

| Comando | Qué hace |
|---|---|
| `unsada-mcp` | Arranca el servidor MCP por stdio. Lo lanza tu cliente; no hace falta correrlo a mano. |
| `unsada-mcp login` | Abre el navegador para entrar con Google. |
| `unsada-mcp status` | Dice si hay una sesión guardada y desde cuándo. |
| `unsada-mcp logout` | Borra la sesión guardada. |
| `unsada-mcp help` | Muestra la ayuda. |

Con `npx` van precedidos de `npx -y`, por ejemplo `npx -y unsada-mcp status`.

## Variables de entorno

Todas son opcionales. Se configuran en el cliente (el bloque `env` en JSON, `-e` en `claude mcp add`) o en tu terminal antes de correr un comando.

| Variable | Para qué sirve | Ejemplo |
|---|---|---|
| `UNSADA_BROWSER` | Qué navegador abre el login. Por defecto prueba Edge y Chrome. | `msedge`, `chrome` |
| `UNSADA_MCP_HOME` | Otra carpeta para la sesión y el perfil del navegador. | `D:\unsada-mcp` |
| `UNSADA_MOODLE_URL` | Otro Moodle 3.x en lugar del de la UNSAdA. | `https://moodle.otra.edu.ar` |
| `UNSADA_DOWNLOAD_ROOTS` | Carpetas extra donde se puede descargar, separadas por `;` en Windows y `:` en Linux y macOS. Ver [Descargas](../descargas/). | `D:\Facultad;E:\Apuntes` |

`UNSADA_MOODLE_URL` es para quien quiera probarlo en otro Moodle con Google: el servidor solo está probado con el de la UNSAdA.
