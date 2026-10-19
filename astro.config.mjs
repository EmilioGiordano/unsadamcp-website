import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [
    starlight({
      title: "unsada-mcp",
      description: "Documentación de UNSAdA-MCP, el servidor MCP no oficial para el aula virtual de la UNSAdA.",
      locales: { root: { label: "Español", lang: "es" } },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/EmilioGiordano/unsada-mcp" }],
      lastUpdated: false,
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
            { label: "Qué podés pedirle", slug: "docs/que-podes-pedirle" },
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
