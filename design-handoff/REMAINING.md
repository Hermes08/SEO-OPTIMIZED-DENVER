# Mile High — QA + Lo que falta (handoff para terminar el rediseño)

_Actualizado: 2026-06-02 · Repo: `~/SEO-OPTIMIZED-DENVER` · Build: ✅ pasa limpio (49 rutas)_

Este doc cierra el rediseño **Mile High**. La home, el chrome (header/footer/fuentes/favicon) y el **acento cobre global** ya están implementados. Aquí está el QA y lo que falta para dejar **todas** las páginas internas 100% Mile High.

---

## 1. Estado por página

| Página | Estado | Detalle |
|---|---|---|
| Home (`app/page.tsx`) | ✅ **Completo** | 14 secciones Mile High, logo, notificaciones, sticky call, count-up, reveals. |
| Header / Footer (`components/`) | ✅ **Completo** | Charcoal, logo lockup `.com`, mega-menú, mapa SEO. Site-wide. |
| Fuentes + favicon (`layout.tsx`, `icon.svg`) | ✅ **Completo** | Saira Condensed + Archivo + JetBrains Mono vía `next/font`. Site-wide. |
| **Acento cobre global** (`globals.css`) | ✅ **Completo** | Remap de `--color-orange-*` → cobre: **todas** las utilidades `*-orange-*` de las páginas internas, componentes y el cuerpo de artículos ya son cobre. |
| Categoría (`[categorySlug]/page.tsx`) | 🟡 **Parcial** | Hero ahora es **charcoal Mile High** (kicker + Saira + cobre) y el mapa es un embed real. Secciones inferiores siguen en tarjetas claras Tailwind. |
| Servicio / "money page" (`[categorySlug]/[serviceSlug]/page.tsx`) | 🟡 **Parcial** | H1 ahora Saira display + kicker; cuerpo `.prose` con acentos cobre + H2/H3 Saira. Shell (sidebar, FAQ, CTA) sigue en estilo claro. |
| Cuerpo de artículos (`GENERATE_CONTENT` en `constants.ts`) | 🟡 **Parcial** | Acentos cobre + H2/H3 en Saira aplicados vía CSS. La maqueta de 8 secciones sigue siendo la plantilla clara. |
| About | 🔶 **Hereda** | Tiene chrome + cobre + fuentes nuevas, pero sus secciones internas siguen en tarjetas claras (no charcoal/Saira). |
| Contact | 🔶 **Hereda** | Igual. (QA: dirección/email falsos **corregidos**, ver §2.) |
| Financing | 🔶 **Hereda** | Igual. `FinancingCalculator` ya es cobre. |
| Areas We Serve | 🔶 **Hereda** | Ya usaba fondo oscuro; ahora con acento cobre. Falta lenguaje Saira/cut-corner. |
| Blog index / Blog post / Category blog | 🔶 **Hereda** | Cards claras con acento cobre. Falta tratamiento editorial Mile High. |

**Leyenda:** ✅ completo · 🟡 parcial (empezado) · 🔶 hereda tokens/chrome pero falta restyle de secciones.

---

## 2. QA — hallazgos y correcciones

**Corregido en esta pasada:**
- ❌→✅ `contact`: dirección ficticia `123 Service Road … 00000` y email `service@company.com` → ahora usa `EMAIL_ADDRESS` real y, como `HAS_PHYSICAL_ADDRESS=false`, muestra "Service Area / Serving the Denver Metro Area" (sin inventar dirección).
- ❌→✅ `categoría`: "Mock Map" con imagen `picsum.photos` → embed real de Google Maps con el estilo `.map-card` Mile High.
- ❌→✅ (previo) `home`: imágenes `picsum` → assets locales. Schema `LocalBusiness` con dirección/geo **fabricados** → eliminado y gateado.
- ✅ Build limpio, 0 errores TS/ESLint. Sin `pravatar`/`placehold`/`picsum`/dirección falsa en el HTML construido.

**Gaps conocidos (no bloquean, pendientes de diseño/dev):**
1. **Headings internos en Archivo, no Saira.** Solo la home y los H1 de las money pages usan `.mh-display` (Saira). Los H2/H3 de about/contact/financing/blog siguen en Archivo bold.
2. **Superficies frías vs paper.** Las secciones internas usan `bg-gray-50`/`white` (gris frío) en vez del `--paper` cálido. No hay bandas charcoal (why/stat/cta) en páginas internas.
3. **Motivos Mile High ausentes en internas:** sin franja hazard-stripe, sin badges cut-corner, sin números ghost, sin marquee.
4. **Observers solo en mount del layout.** `count-up`/`reveal` corren una vez al montar el layout → efectivos en la home. Si las internas adoptan `.reveal`, añadir un efecto por `pathname` en `LiveActivity`.
5. **`<img>` plano (no `next/image`).** Fidelidad perfecta pero Lighthouse-Perf puede mejorar migrando a `next/image` (cuidando los `clip-path`/`object-fit`).
6. **Honestidad de métricas.** Los números de marketing del diseño ("2,400+", "4.9", "15+ años") son **copy visible**, NO van en structured data (AggregateRating sigue gateado en `HAS_VERIFIED_REVIEWS=false`). Reemplazar por reales cuando existan.

---

## 3. Cómo terminar cada página (specs Mile High)

> Todos los tokens y clases ya viven en `src/app/globals.css` (busca `:root{--char...}` y las clases `.hero/.sec-head/.svc/.feat/.step/.statband/.rev/.cta/.county/.map-card/.btn/.kicker/.mh-display`). **Reutilízalas** — no inventes CSS nuevo salvo lo imprescindible.

**Patrón general para cualquier página interna:**
1. Envuelve el título en un **hero charcoal**: `bg-[var(--char)] text-[var(--paper)]` + `.mh-kicker` + `<h1 className="mh-display ...">` con la última palabra en `text-[var(--copper)]`. (Ya hecho en `categoría` — cópialo.)
2. Cambia superficies `bg-gray-50` → `bg-[var(--paper)]`, `bg-white`/cards → `bg-[var(--card)] border-[var(--line)]`, esquinas `rounded` 3–6px.
3. Encabezados de sección → `.sec-head` (kicker + `h2.mh-display`).
4. Una **banda CTA charcoal** al final de cada página: reutiliza el bloque `.cta` de la home (stripe-top + Saira 66px + botón cobre).

**Por página:**
- **Servicio (money page):** convierte el H1 en hero charcoal (hoy está sobre claro). Sidebar → cards `.svc`-style. FAQ `<details>` → borde izquierdo cobre + Saira en la pregunta. Bloque CTA final → `.cta`. Inserta el patrón de **reseñas por servicio** (filtradas por `serviceTags`) — ver `Part 3` del work order original.
- **Categoría:** las secciones "Why / Services We Offer / Process" debajo del hero → migrar a `.svc-grid`, `.feat`, `.proc-grid` (idénticas a la home).
- **About:** historia → bloque `.why` (foto cut-corner + float badge). Valores (4) → `.feat` o `.trust`. Equipo → cards `.svc` con avatar de iniciales.
- **Contact:** formulario → inputs charcoal-bordered, labels mono; lateral con datos en `.feat`. (Idea Part 3: form multi-paso con barra de progreso.)
- **Financing:** planes → cards `.svc`; calculadora ya cobre; partners → `textLogo` (placeholder) hasta tener lenders reales; banda `.promise` 0% financing.
- **Areas:** reusar la sección `.areas` + `.county-grid` + `.map-card` de la home (ya existe el CSS).
- **Blog index / post / category-blog:** cards → `.svc`-style con tag mono `NN / CAT`; post → hero charcoal + cuerpo `.prose` (ya cobre); autor con avatar de iniciales.

---

## 4. Archivos clave
- Tokens + clases Mile High: `src/app/globals.css`
- Fuentes/favicon: `src/app/layout.tsx`, `src/app/icon.svg`
- Chrome: `src/components/Header.tsx`, `Footer.tsx`, `LiveActivity.tsx`
- Home de referencia (patrón a copiar): `src/app/page.tsx`
- Referencia de diseño original: `design-handoff/incoming/multiservices/project/design_handoff_mile_high/`
- Datos/contenido (no tocar copy): `src/lib/constants.ts`

## 5. Regla de oro (sigue vigente)
Cambia solo la capa visual. No toques copy, jerarquía de encabezados, rutas, ni el JSON-LD de `SchemaMarkup.tsx`. Métricas de marketing = copy; ratings reales = structured data gateado.
