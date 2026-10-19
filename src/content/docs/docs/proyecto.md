---
title: Cómo está hecho
description: Por qué lee páginas en lugar de usar una API, cómo está organizado el código y cómo colaborar.
---

## Por qué lee páginas

El aula de la UNSAdA es Moodle 3.2 con el tema *essential*. El servicio web para apps móviles está desactivado y el de AJAX no sirve sin él, y el login es solo con Google. No hay una API usable, así que el servidor hace lo mismo que vos: abre las páginas con tu sesión y las convierte en datos.

Algunas decisiones salen de cómo es esta aula en particular:

- **Calendario:** la exportación iCal pierde las horas, así que se leen las vistas de mes y de día.
- **Cursos:** el tablero deja afuera los cursos viejos, así que se combina con el resumen de notas.
- **Formatos de curso:** muchos cursos usan pestañas (`onetopic`), una página por pestaña; el servidor las recorre todas.
- **Fechas:** todo en hora de Argentina (`America/Argentina/Buenos_Aires`).

## Organización

```
src/
  session/    login con el navegador y la sesión guardada
  moodle/     el único código que hace pedidos, y la lista de páginas permitidas
  scrape/     un archivo por tipo de página: HTML a datos, sin pedidos
  features/   cada capacidad: pide, interpreta y combina
  tools/      las herramientas MCP: entradas, descripciones y resultados
  documents/  lectura de PDF, Word, PowerPoint y Excel (de utn-mcp)
```

Si la UNSAdA actualiza Moodle o cambia el tema, lo que hay que ajustar está en `src/scrape/`. Los tests en `test/scrape/` usan páginas de ejemplo inventadas, sin datos reales.

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

Inspirado en [utn-mcp](https://github.com/nialvape/utn-mcp), el servidor MCP no oficial de la UTN. La lectura de documentos (`src/documents/`) viene de ahí; ver `THIRD_PARTY_NOTICES` en el repositorio.

Licencia ISC.
