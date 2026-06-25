# DS3 Comunicaciones &mdash; Ficha de Producto Responsive

Página de ficha de producto responsive para el cable AMP `6-1427200-4`, construida
como ejercicio técnico basado en la página original del switch Cisco `C9200L-24P-4G-E`.

## Demo en GitHub Pages

Una vez publicado, la página principal del producto estará disponible en:

- **https://ds3peru.github.io/cisco/6-1427200-4.html** &mdash; Ficha completa del cable AMP
- **https://ds3peru.github.io/cisco/** &mdash; Landing page de catálogo

## Estructura del proyecto

```
.
├── 6-1427200-4.html          # Página principal del producto (responsive)
├── index.html                # Landing page de catálogo
├── C9200L-24P-4G-E.html      # Página original de Cisco (referencia)
├── css/
│   └── style.css             # Estilos personalizados
├── js/
│   ├── nav.js                # Lógica del navbar y menús móviles
│   └── change_tabs.js        # Tabs, modal de imagen y smooth scroll
├── components/
│   └── navbar.html           # Navbar común cargado dinámicamente
└── icons/                    # Iconos de marca
```

## Mejoras implementadas respecto al original

| Aspecto | Original (Cisco) | Nueva versión (AMP) |
|---|---|---|
| Responsive | Parcial | Completo (móvil, tablet, escritorio) |
| Accesibilidad | Básica | ARIA, skip-link, focus visible, contraste |
| SEO | Meta tags básicos | Open Graph, Twitter Cards, JSON-LD |
| Funcionalidad JS | Referencias a funciones inexistentes | `viewImage`, modal, tabs, smooth scroll implementados |
| UX móvil | Sidebars ocultos sin alternativa | CTA sticky inferior, badges, miniaturas con preview |
| Sección relacionados | 6 productos Cisco | 9 cables AMP (Cat 6, Cat 6A, Cat 5e) |
| Imágenes | Miniaturas estáticas | Galería con modal ampliable y zoom |
| Estilos | Inline en HTML | Variables CSS, animaciones, transiciones |

## Cómo publicar en GitHub Pages

1. Sube el repositorio a GitHub (`ds3peru/cisco`).
2. Ve a **Settings &rarr; Pages**.
3. En **Source** selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
4. Guarda los cambios. En unos minutos la página estará disponible en
   `https://ds3peru.github.io/cisco/`.

Para forzar la URL exacta del producto, comparte directamente:

- `https://ds3peru.github.io/cisco/6-1427200-4.html`

## Stack técnico

- **HTML5** semántico con microdata
- **Tailwind CSS** vía CDN (utilidades responsivas)
- **CSS personalizado** con variables, animaciones y modo oscuro automático
- **JavaScript vanilla** (sin frameworks ni build step)
- **Font Awesome 6** para iconografía
- **JSON-LD** para datos estructurados de producto (Schema.org)

## Por qué vanilla y no React

Para una ficha de producto estática con GitHub Pages:

- **Cero build step** &mdash; el HTML se sirve directamente
- **Carga instantánea** &mdash; sin hydration ni bundles pesados
- **SEO perfecto** &mdash; el HTML se renderiza completo desde el servidor
- **Mantenimiento simple** &mdash; no requiere npm, webpack ni configuración

React añadiría valor cuando hay estado complejo, rutas dinámicas o componentes
reutilizables entre vistas, lo cual no aplica a una ficha de catálogo.