import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://unsadamcp.dev",
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  devToolbar: { enabled: false },
  integrations: [
    starlight({
      title: "unsada-mcp",
      description: "Documentación de unsada-mcp, el servidor MCP no oficial para el aula virtual de la UNSAdA.",
      locales: { root: { label: "Español", lang: "es" } },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/EmilioGiordano/unsada-mcp" }],
      lastUpdated: false,
      favicon: "/icon.svg",
      head: [
        { tag: "link", attrs: { rel: "icon", href: "/icon-32.png", type: "image/png", sizes: "32x32" } },
        { tag: "link", attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png" } },
      ],
      customCss: [
        "@fontsource/funnel-display/600.css",
        "@fontsource/funnel-display/700.css",
        "@fontsource/funnel-sans/400.css",
        "@fontsource/funnel-sans/400-italic.css",
        "@fontsource/funnel-sans/500.css",
        "@fontsource/funnel-sans/600.css",
        "@fontsource/jetbrains-mono/400.css",
        "@fontsource/jetbrains-mono/500.css",
        "./src/styles/tokens.css",
        "./src/styles/docs.css",
      ],
      components: {
        SiteTitle: "./src/components/docs/SiteTitle.astro",
        PageTitle: "./src/components/docs/PageTitle.astro",
        ThemeSelect: "./src/components/docs/ThemeSelect.astro",
        Head: "./src/components/docs/Head.astro",
        SocialIcons: "./src/components/docs/SocialIcons.astro",
        Pagination: "./src/components/docs/Pagination.astro",
      },
      expressiveCode: {
        themes: ["github-dark-default", "github-light-default"],
        defaultProps: { frame: "code" },
        styleOverrides: {
          borderRadius: "10px",
          codeFontFamily: "var(--font-mono)",
          codeFontSize: "0.86rem",
          frames: { shadowColor: "transparent" },
        },
      },
      sidebar: [
        {
          label: "Empezar",
          items: [
            { label: "Introducción", slug: "docs" },
            { label: "Instalación", slug: "docs/instalacion" },
            { label: "Primer inicio de sesión", slug: "docs/primer-login" },
            { label: "Qué puedes pedirle", slug: "docs/que-puedes-pedirle" },
          ],
        },
        {
          label: "Uso",
          items: [
            { label: "Herramientas", slug: "docs/herramientas" },
            { label: "Descargas", slug: "docs/descargas" },
            { label: "Comandos y variables", slug: "docs/comandos" },
          ],
        },
        {
          label: "Confianza",
          items: [{ label: "Privacidad y seguridad", slug: "docs/privacidad" }],
        },
        {
          label: "Ayuda",
          items: [
            { label: "Solución de problemas", slug: "docs/problemas" },
            { label: "Preguntas frecuentes", slug: "docs/faq" },
          ],
        },
        {
          label: "Proyecto",
          items: [{ label: "Cómo está hecho", slug: "docs/proyecto" }],
        },
      ],
    }),
  ],
});
