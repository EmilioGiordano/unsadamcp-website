---
title: Introducción
description: Qué es unsada-mcp y qué hace.
---

unsada-mcp es un servidor [MCP](https://modelcontextprotocol.io) **no oficial** que da a un agente (Claude Code, Claude Desktop, Codex, OpenCode, Cursor) acceso de lectura al aula virtual de la UNSAdA, [moodle.unsada.edu.ar](https://moodle.unsada.edu.ar): cursos, material, foros, tareas, notas y calendario.

El servidor corre en tu computadora. El inicio de sesión se hace una vez con Google y el servidor lee el aula con esa sesión.

## Ejemplos

- *"¿Qué tengo que entregar esta semana?"*
- *"¿Qué dijo la profe en el foro de Trabajo de Grado?"*
- *"Resúmeme el apunte de la semana 3."*
- *"¿Qué nota me pusieron en el TP1 y qué me corrigieron?"*
- *"Descárgame todo el material de Bases de Datos."*

Más ejemplos en [Qué puedes pedirle](que-puedes-pedirle/).

## Alcance

En el aula, el servidor **solo lee**: no publica, no entrega, no se suscribe ni cierra la sesión. Cada dirección se valida contra una lista de páginas de lectura antes de pedirla. Ver [Privacidad y seguridad](privacidad/).

Solo escribe en disco al descargar archivos, dentro de la carpeta donde se abrió el agente. Ver [Descargas](descargas/).

## Siguientes pasos

1. [Instalación](instalacion/)
2. [Primer inicio de sesión](primer-login/)
3. [Herramientas](herramientas/)

## Aviso

Este proyecto no está afiliado ni avalado por la Universidad Nacional de San Antonio de Areco. Es software libre con licencia AGPL-3.0-or-later, inspirado en [utn-mcp](https://github.com/nialvape/utn-mcp). Úsalo bajo tu responsabilidad.
