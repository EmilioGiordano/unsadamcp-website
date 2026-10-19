# unsada-mcp-website

Sitio y documentación de [UNSAdA-MCP](https://github.com/EmilioGiordano/unsada-mcp), el servidor MCP no oficial para el aula virtual de la UNSAdA.

Hecho con [Astro](https://astro.build) y [Starlight](https://starlight.astro.build). Es un sitio estático: `npm run build` deja todo en `dist/`, listo para GitHub Pages, Vercel o Cloudflare Pages.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview   # sirve dist/, con la búsqueda funcionando
```

- La landing está en `src/pages/index.astro` y sus secciones en `src/components/`.
- Los datos de ejemplo (sesiones, herramientas, clientes) están en `src/data/`. Son inventados.
- La documentación está en `src/content/docs/docs/`.
- Las fuentes se sirven desde el propio sitio (Fontsource): no hay pedidos a otros dominios.

`npm run shoot -- <url> <archivo.png> [ancho] [alto] [full|view]` saca una captura con Edge, útil para revisar el diseño.
