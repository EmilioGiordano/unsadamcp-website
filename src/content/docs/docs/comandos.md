---
title: Comandos y variables
description: Comandos de la CLI y variables de entorno.
---

## Comandos

| Comando | Descripción |
|---|---|
| `unsada-mcp` | Inicia el servidor MCP por stdio. Lo ejecuta el cliente MCP. |
| `unsada-mcp login` | Inicia sesión con Google en una ventana del navegador. |
| `unsada-mcp status` | Muestra el estado de la sesión guardada. |
| `unsada-mcp logout` | Borra la sesión guardada. |
| `unsada-mcp help` | Muestra la ayuda. |

Con npx: `npx -y unsada-mcp@latest <comando>`.

## Variables de entorno

Todas son opcionales. Se definen en la configuración del cliente (bloque `env` en JSON, `-e` en `claude mcp add`) o en la terminal.

| Variable | Descripción | Ejemplo |
|---|---|---|
| `UNSADA_BROWSER` | Navegador para el inicio de sesión. Por defecto, Edge o Chrome. | `msedge`, `chrome` |
| `UNSADA_MCP_HOME` | Carpeta de la sesión. | `D:\unsada-mcp` |
| `UNSADA_MOODLE_URL` | URL de otro Moodle 3.x. | `https://moodle.otra.edu.ar` |
| `UNSADA_DOWNLOAD_ROOTS` | Carpetas adicionales para descargas, separadas por `;` (Windows) o `:` (Linux y macOS). Ver [Descargas](../descargas/). | `D:\Facultad;E:\Apuntes` |

`UNSADA_MOODLE_URL` solo está probado con el Moodle de la UNSAdA.
