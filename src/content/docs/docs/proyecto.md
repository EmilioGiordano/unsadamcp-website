---
title: Cómo está hecho
description: Por qué el servidor lee páginas, cómo está organizado el código y cómo colaborar.
---

## Por qué lee páginas

El aula de la UNSAdA es Moodle 3.2 con el tema *essential*. El servicio web para apps móviles está desactivado, el de AJAX no funciona sin él y el inicio de sesión es solo con Google. Sin una API disponible, el servidor abre las páginas con la sesión del usuario y las convierte en datos.

Decisiones derivadas de esta aula:

- **Calendario:** la exportación iCal omite las horas; se leen las vistas de mes y de día.
- **Cursos:** el tablero omite los cursos antiguos; se combina con el resumen de notas.
- **Formatos de curso:** muchos cursos usan pestañas (`onetopic`), una página por pestaña; se recorren todas.
- **Fechas:** siempre en hora de Argentina (`America/Argentina/Buenos_Aires`).

## Organización

```
src/
  session/    inicio de sesión con el navegador y sesión guardada
  moodle/     único código que hace solicitudes, y lista de páginas permitidas
  scrape/     un archivo por tipo de página: HTML a datos, sin solicitudes
  features/   cada capacidad: solicita, interpreta y combina
  tools/      herramientas MCP: entradas, descripciones y resultados
  documents/  lectura de PDF, Word, PowerPoint y Excel (de utn-mcp)
```

Los cambios de versión o de tema del aula se ajustan en `src/scrape/`. Los tests de `test/scrape/` usan páginas de ejemplo con datos inventados.

## Desarrollo

```bash
git clone https://github.com/EmilioGiordano/unsada-mcp
cd unsada-mcp
npm install
npm run typecheck   # TypeScript
npm run lint        # Biome
npm test            # Vitest
npm run build
```

Las reglas del proyecto (estructura, seguridad, estilo) están en [`AGENTS.md`](https://github.com/EmilioGiordano/unsada-mcp/blob/main/AGENTS.md).

## Créditos

Inspirado en [utn-mcp](https://github.com/nialvape/utn-mcp), el servidor MCP no oficial de la UTN. El lector de documentos (`src/documents/`) proviene de ese proyecto; ver `THIRD_PARTY_NOTICES` en el repositorio.

Licencia AGPL-3.0-or-later desde la versión 0.3.0; ISC hasta la 0.2.2. `src/documents/` se mantiene bajo ISC.
