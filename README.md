# DS3 Comunicaciones &mdash; Catálogo AMP

Catálogo de fichas técnicas para la línea AMP NetConnect de DS3
Comunicaciones, construido con un lenguaje visual propio
(estilo *Linear / Stripe Docs / Vercel*) en lugar del patrón típico de
ficha genérica del sector.

## Demo en GitHub Pages

Una vez publicado, disponible en:

- **https://ds3peru.github.io/cisco/6-1427200-4.html** &mdash; Ficha del cable AMP Cat 6 `6-1427200-4`
- **https://ds3peru.github.io/cisco/** &mdash; Catálogo

## Diferenciación frente a la competencia

| Eje | Qué hace |
|---|---|
| **Hero imagen-first** | El producto aparece como imagen grande desde el primer scroll — no después de pasar 3 párrafos de marketing. |
| **Diseño premium claro** | Tema claro por defecto con tipografía Inter + JetBrains Mono, bordes sutiles, microinteracciones. Las fotos del producto (fondo blanco) lucen sobre el surface claro. Dark mode solo si el sistema lo pide. |
| **Diagrama de anatomía del cable** | SVG interactivo: hover o click en cada capa (chaqueta, spline, pares, ripcord) revela qué hace y por qué importa. Diferenciador real contra cualquier distribuidor en Perú. |
| **WhatsApp contextual** | Los CTAs de WhatsApp llevan SKU y modelo en el mensaje pre-llenado. |
| **Sin sidebars de marca ni listas de precios** | Nada de patrones copiados de Cisco u otros competidores. |
| **Mobile-first** | Bottom bar sticky en móvil con precio y CTA, sin trampas. |
| **Accesibilidad** | Skip-link, focus visible, ARIA en regiones landmarks, contraste alto. |
| **SEO técnico** | JSON-LD de producto, Open Graph, Twitter Cards, canonical, meta description optimizado. |

## Estructura del proyecto

```
.
├── 6-1427200-4.html     # Ficha del cable AMP Cat 6 (referencia)
├── index.html           # Catálogo y landing page
└── css/
    └── style.css        # Sistema de diseño completo (tokens + componentes)
```

Sin dependencias externas: solo Google Fonts y Font Awesome por CDN.
Sin Tailwind, sin frameworks JS, sin build step.

## Stack técnico

- **HTML5** semántico con microdata y landmarks accesibles
- **CSS3** con variables (design tokens), `color-mix`, `clamp`, `aspect-ratio`,
  `prefers-color-scheme`, `prefers-reduced-motion`, IntersectionObserver
- **JavaScript vanilla** para galería, diagrama interactivo y resaltado de nav
- **Google Fonts**: Inter (UI) + JetBrains Mono (SKU y datos técnicos)
- **Font Awesome 6** para iconografía
- **JSON-LD** Schema.org `Product` con `additionalProperty` por spec clave

## Tema de color

- **Default**: claro (background `#fafafa`, cards blancos, texto `#0a0a0a`,
  acento azul `#2563eb`). Pensado para que las fotos de los productos (que
  tienen fondo blanco) se integren sin contraste brusco.
- **Dark mode**: solo se activa automáticamente si el sistema del usuario
  reporta `prefers-color-scheme: dark`. Tokens de marca se invierten
  proporcionalmente.
- **Toggle manual**: aún no se ha añadido; si se necesita, el sistema ya está
  preparado via variables CSS.

## Decisiones de diseño explícitas

- **Qué NO copiamos**: layout 3 columnas (brands sidebar + content + price lists
  sidebar), tabs Producto/Imágenes, acordeones de especificación, modal de imagen
  superpuesto, navegación superior multi-fila con números telefónicos repetidos.
- **Qué sí hacemos**: hero split imagen-first (la imagen del producto carga a la
  vista sin scroll), nav de secciones sticky con scroll-spy, spec-grid en lugar
  de tablas, prose corto en lugar de párrafos de marketing, buy-block compacto
  con precio destacado y CTAs primario + WhatsApp.
- **Por qué Inter + JetBrains Mono**: Inter es legible y sobrio en UI; JetBrains
  Mono da tono "documentación técnica" a los SKU y valores numéricos (frecuencia,
  AWG, NVP). Patrón equivalente a `next/font` de Vercel y a `IBM Plex` de Linear.

## Cómo publicar

1. Sube el repo a GitHub (`ds3peru/cisco`).
2. **Settings &rarr; Pages &rarr; Source: `main` branch, `/ (root)`**.
3. Espera unos minutos. La URL final del producto es
   `https://ds3peru.github.io/cisco/6-1427200-4.html`.

## Próximos pasos sugeridos

- Reemplazar las imágenes externas `ds3comunicaciones.com/AMP/images/...` por
  assets servidos desde GitHub Pages para evitar dependencias de terceros.
- Añadir `og:image` propio (1200×630) para mejor preview en redes.
- Implementar wizard "¿qué cable AMP necesitas?" en index.html.
- Implementar comparador 1-3 cables en `6-1427200-4.html`.
- Añadir toggle manual de tema claro/oscuro si se requiere.
