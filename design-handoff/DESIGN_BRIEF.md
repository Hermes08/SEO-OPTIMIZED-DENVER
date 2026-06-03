# Brief de Rediseño — Denver Metro Services
**Para:** diseñador gráfico / Claude (modo diseño)
**Objetivo:** Remodelar visualmente **todo** el sitio **sin cambiar el contenido** (textos, datos, estructura SEO).
**Stack:** Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript · export estático.

## Proyecto / Repositorio
| | |
|---|---|
| **Repositorio (GitHub)** | https://github.com/Hermes08/SEO-OPTIMIZED-DENVER (rama `main`) |
| **Ruta local** | `~/SEO-OPTIMIZED-DENVER/` |
| **Sitio en vivo** | https://sunny-praline-e0f93b.netlify.app/ |
| **Carpeta de este handoff** | `~/SEO-OPTIMIZED-DENVER/design-handoff/` |
| **Snapshot curado para diseño** | `design-handoff/source-snapshot/` (estilos + componentes + páginas + datos; sin `node_modules`) |

---

## 0. Regla de oro: contenido vs. presentación

> **Puedes cambiar TODO lo visual. NO puedes cambiar el contenido ni la estructura semántica.**

| ✅ Puedes cambiar (capa de presentación) | ❌ NO toques (capa de contenido / SEO) |
|---|---|
| Colores, tipografías, espaciados, radios, sombras | Los textos (copy), títulos, descripciones, FAQs |
| Layout de cada sección (grid, orden visual, columnas) | Los datos en `src/lib/constants.ts` (servicios, reseñas, áreas, financiamiento) |
| Componentes UI (cards, botones, badges, headers) | La jerarquía de encabezados `h1 → h2 → h3` (orden y nivel) |
| Iconografía, ilustraciones, imágenes | Las etiquetas de schema JSON-LD (`SchemaMarkup.tsx`) |
| Animaciones, microinteracciones, hover states | Los `alt`, `aria-*`, `canonical`, `<title>`/meta |
| Estados (vacío, hover, focus, loading) | Las rutas/URLs y los `slug` |

Si una mejora visual **requiere** mover contenido, márcalo como propuesta aparte — no lo apliques en silencio.

---

## 1. Dónde vive cada cosa (mapa para el diseñador)

El sitio es **100% data-driven**. El contenido no está "escrito" en cada página; se genera desde datos.

- **Contenido / datos:** `src/lib/constants.ts` — categorías, sub-servicios, reseñas, testimonios, áreas, financiamiento, equipo, blog. (No editar el texto; sí puedes cambiar cómo se *muestra*.)
- **Tipos:** `src/lib/types.ts`.
- **Cuerpo de las páginas de servicio/blog:** función `GENERATE_CONTENT()` en `constants.ts`. ⚠️ **Importante:** esta función devuelve **HTML con clases Tailwind incrustadas** (ej. `text-3xl font-bold text-gray-900`). Para reestilizar el cuerpo de los artículos hay que tocar esas clases dentro de la función `buildSection` / `GENERATE_CONTENT`, **o** estilizar vía el contenedor `.prose` (ver §4). El texto entre etiquetas no se toca.
- **Layout global:** `src/app/layout.tsx` (top-bar, header, footer, botón sticky de llamada).
- **Componentes reutilizables:** `src/components/`.
- **Rutas (páginas):** `src/app/**/page.tsx`.
- **Tokens globales / utilidades CSS:** `src/app/globals.css` y clases Tailwind inline.

---

## 2. Marca y posicionamiento

- **Nombre:** Denver Metro Services
- **Qué es:** empresa multi-oficio de servicios para el hogar en el área metropolitana de Denver (eléctrico, plomería, HVAC, solar, techos, remodelación / general contractor).
- **Tono:** confiable, profesional, local, "licensed & insured", disponibilidad 24/7 de emergencia.
- **Logo actual:** wordmark de texto — `Denver Metro Services` + punto naranja (`.`). No hay isotipo. **Oportunidad:** diseñar un isotipo/marca real (ver `public/logo.svg`, hoy es un wordmark placeholder).
- **Personalidad visual hoy:** "premium servicio local" — fondo oscuro en el *chrome* (header/footer/top-bar) y páginas de contenido en claro.

---

## 3. Sistema actual de color y tipografía (tokens reales en uso)

> Tailwind v4 con tema por defecto (no hay tokens custom en `tailwind.config.ts`). El "sistema" hoy vive en las clases utilitarias inline. Un objetivo del rediseño puede ser **formalizar tokens** (CSS variables / `@theme`).

**Colores (los que realmente se usan):**
- **Primario / acento:** `orange-500 #f97316` (hover `orange-600 #ea580c`). Es el color de marca, CTAs, acentos, selección de texto.
- **Texto oscuro:** `gray-900 #0f172a/#111827`, secundario `gray-600`, terciario `gray-500/400`.
- **Fondos de contenido:** `gray-50 #f8fafc` / `white`.
- **Chrome oscuro:** `slate-900 #0f172a`, `gray-950`, bordes `slate-800/gray-800`.
- **`globals.css`** define `--background: #f8fafc`, `--foreground: #0f172a`, selección naranja, scrollbar custom (slate), y utilidades **`glass-panel`** (blanco translúcido + blur, usado en el header) y **`glass-card`**.

**Tipografía:** hoy usa la pila por defecto del sistema (no hay fuente custom cargada). **Oportunidad clara:** elegir e instalar una familia (display + texto) vía `next/font`. Escala actual observada: `h1` `text-4xl md:text-5xl`, `h2` `text-3xl md:text-4xl`, `h3` `text-2xl`, body `text-lg`, todo `font-bold tracking-tight` en titulares.

**Radios / sombras:** muy usados `rounded-lg / rounded-xl / rounded-2xl`, `shadow-sm / shadow-lg / shadow-xl / shadow-2xl`, bordes `border-gray-100/200`. Acento recurrente: barra superior naranja en cards (`bg-gradient-to-r from-orange-400 to-orange-600`) y borde izquierdo naranja (`border-l-4 border-orange-500`).

---

## 4. Detalle del cuerpo de artículos (`.prose`)

Las páginas de servicio renderizan el HTML de `GENERATE_CONTENT` dentro de:
```
<div className="prose prose-lg prose-slate max-w-none ...
     prose-headings:text-gray-900 prose-headings:font-bold
     prose-strong:text-gray-900 prose-a:text-orange-600 prose-img:rounded-xl">
```
👉 Reestilizar la tipografía editorial del cuerpo = ajustar estos modificadores `prose-*` (plugin typography) **o** las clases dentro de `GENERATE_CONTENT`. Es el lugar más eficiente para mejorar legibilidad de los artículos largos (~2.000 palabras).

---

## 5. Inventario de páginas (cada layout y su contenido fijo)

| Ruta | Archivo | Secciones / contenido a preservar |
|---|---|---|
| `/` Home | `app/page.tsx` | Hero 3D (`ThreeHeroWrapper`), grilla de 6 categorías, bloque "por qué nosotros", proceso (4 pasos), reseñas Google, CTA. Imagen hero secundaria. |
| `/[categoría]` (×6) | `app/[categorySlug]/page.tsx` | Hero con imagen, breadcrumb, intro, grilla de sub-servicios, proceso, FAQs de categoría, reseñas, CTA. |
| `/[categoría]/[servicio]` (×20) | `app/[categorySlug]/[serviceSlug]/page.tsx` | H1, imagen, descripción destacada, **cuerpo largo `.prose`**, FAQs del servicio, recordatorio de áreas, reseñas, CTA, sidebar de servicios relacionados. **Páginas dinero — máxima prioridad de pulido.** |
| `/[categoría]/blog` (×6) | `app/[categorySlug]/blog/page.tsx` | Listado de posts de la categoría. |
| `/blog` | `app/blog/page.tsx` | Índice de blog (cards). |
| `/blog/[post]` (×6) | `app/blog/[postSlug]/page.tsx` | Artículo: header, autor (avatar de iniciales), fecha, cuerpo `.prose`. |
| `/about` | `app/about/page.tsx` | Historia, valores (4), equipo (avatares de iniciales). |
| `/contact` | `app/contact/page.tsx` | Datos de contacto (placeholder — ver §7), formulario, mapa/áreas. |
| `/financing` | `app/financing/page.tsx` | Planes, calculadora (`FinancingCalculator`), elegibilidad, partners (logos placeholder), FAQs. |
| `/areas-we-serve` | `app/areas-we-serve/page.tsx` | Condados + zips, testimonios. |

---

## 6. Inventario de componentes (`src/components/`)

- `Header.tsx` — sticky, `glass-panel`, **mega-menú** de servicios (desktop) + acordeón (móvil), botón "Call Now".
- `Footer.tsx` — multi-oficio: marca + social, links rápidos, servicios, contacto, mapa completo de servicios y zips por condado.
- `CallButton.tsx` — botón de llamada (variantes `large`/`default` + **sticky móvil** vía `onlySticky`).
- `GoogleReviews.tsx` — bloque de reseñas (hoy muestra 4 genéricas para todas las páginas; ver oportunidad §7).
- `FinancingCalculator.tsx` — calculadora de cuotas.
- `Breadcrumbs.tsx` — migas + emite schema `BreadcrumbList`.
- `TableOfContents.tsx` — índice de contenido.
- `SchemaMarkup.tsx` — JSON-LD (no es visual; **no tocar la lógica**, sólo si cambias imágenes de referencia).
- `ThreeHero.tsx` / `ThreeHeroWrapper.tsx` — hero 3D (react-three-fiber) en home.

---

## 7. Lo que YO mejoraría (recomendaciones de diseño)

Ordenadas por impacto. El diseñador puede tomar las que quiera.

1. **Sistema de tokens real.** Formalizar color/tipografía/espaciado en `@theme`/CSS vars en vez de utilidades sueltas. Da consistencia y facilita temas. (El naranja `#f97316` puro es muy "default Tailwind"; vale la pena una paleta de marca propia con escalas 50–900 + un secundario/neutral cálido.)
2. **Tipografía con personalidad.** Cargar una familia display para titulares y una de texto legible para cuerpo (`next/font`, sin costo de CLS). Hoy se ve genérica.
3. **Identidad/Isotipo.** Crear logo real (el actual es wordmark placeholder en `public/logo.svg`). Definir versiones para fondo claro/oscuro y favicon.
4. **Reseñas por servicio (gran oportunidad UX + SEO).** Hoy todas las páginas muestran las mismas 4 reseñas. El plan es filtrarlas por servicio (mini-rating "4.9 de 38 reseñas de EV"). Diseñar el componente de reseña + el mini-bloque de rating por servicio. *(La data se conectará luego; diseñar el patrón.)*
5. **Barra de confianza (trust bar).** Tira fina bajo el header: rating, "Licensed & Insured #", "24/7 Emergency", años en el negocio. Diseñar badges enlazables a su prueba.
6. **Contadores animados + "trabajos recientes".** Sección de stats con count-up y feed "Reciente cerca de ti" (servicio · barrio · fecha). Diseñar cards.
7. **Páginas de servicio (dinero).** Mejorar la legibilidad del cuerpo `.prose` (ritmo vertical, ancho de medida, sub-encabezados, callouts, tablas de costos, bloques de pasos numerados más visuales). Sidebar más útil (CTA pegajoso, mini-form).
8. **Formulario multi-paso en `/contact`** con barra de progreso (sube conversión). Diseñar los pasos.
9. **Estados y vacíos.** Hover/focus visibles (ya hay `focus:ring` en algunos botones — extenderlo), estados de carga del hero 3D, fallback si WebGL no carga.
10. **Imágenes de las páginas.** Home y categorías usan imágenes externas placeholder (`picsum.photos`) que conviene reemplazar por arte/fotos reales o ilustraciones de marca. Avatares hoy son **iniciales generadas** (neutrales, no fotos reales) — diseñar un estilo de avatar consistente.

---

## 8. Restricciones técnicas (respetar para no romper)

- **Tailwind v4** (utilidades inline; tema en `globals.css`/`@theme`). Mantener enfoque utility-first o proponer tokens — no introducir otro framework CSS sin avisar.
- **SEO/Schema intactos:** no alterar `SchemaMarkup.tsx`, `sitemap.ts`, `robots.ts`, `canonical`, `<title>`/meta, ni la jerarquía de encabezados.
- **Accesibilidad (mantener o mejorar):** contraste AA, foco visible, `alt`/`aria-*` ya presentes, "skip to main content", orden de headings. El sitio ya respeta varios; el rediseño debe mantenerlos.
- **Responsive:** mobile-first; breakpoints Tailwind (`sm/md/lg`). Header tiene mega-menú desktop + acordeón móvil.
- **Performance:** objetivo Lighthouse ≥95 SEO/A11y, ≥90 Perf. Evitar imágenes pesadas sin optimizar; animaciones deben respetar `prefers-reduced-motion`.
- **Zonas claro/oscuro:** hoy chrome oscuro + contenido claro. Si se unifica, hacerlo coherente en todas las rutas.

---

## 9. Entregables sugeridos del diseñador

1. **Design tokens** (paleta 50–900, tipografía, escala de espaciado, radios, sombras) — idealmente como CSS vars listas para `@theme`.
2. **Librería de componentes** rediseñados (botones, cards, badges, inputs, header/footer, reseña, trust-bar, stats).
3. **Mockups por tipo de página:** Home, Categoría, Servicio (dinero), Blog post, Contact, Financing.
4. **Specs responsive** (móvil + desktop) de cada uno.
5. **Guía de uso** (do/don't) + estados (hover/focus/empty/loading).

---

## 10. Cómo usar esto con Claude (modo diseño)

Recomendación de flujo (responde a tu pregunta sobre "copiar el main a un folder"):

- **No subas el repo completo** (`node_modules` + `.next` lo hacen enorme e irrelevante para diseño).
- Adjunta la carpeta **`design-handoff/`** (este brief) **+** la carpeta curada `design-handoff/source-snapshot/` que contiene sólo lo relevante para diseño: `globals.css`, `tailwind.config.ts`, todos los `src/components/`, los `src/app/**/page.tsx` + `layout.tsx`, y `constants.ts`/`types.ts` como **referencia de contenido** (no para reescribir).
- Pídele a Claude: *"Rediseña la capa visual siguiendo `DESIGN_BRIEF.md`. Respeta la regla de oro del §0: no cambies contenido, copy, jerarquía de encabezados ni schema. Entrega tokens + componentes + mockups."*
- Capturas de pantalla del sitio en vivo ayudan mucho — están en `design-handoff/screenshots/` (si se generaron) o tómalas de https://sunny-praline-e0f93b.netlify.app/

---

_Última actualización: 2026-06-02. Contenido y datos: `src/lib/constants.ts`. Cualquier cambio de copy se coordina aparte._
