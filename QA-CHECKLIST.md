# QA Handoff — Denver Metro Services
**Para:** Comet (o cualquier agente con navegador) que va a auditar el sitio de forma independiente.
**Sitio en vivo:** https://sunny-praline-e0f93b.netlify.app/
**Repo:** https://github.com/Hermes08/SEO-OPTIMIZED-DENVER (rama `main`)
**Stack:** Next.js 16 · React 19 · Tailwind v4 · TypeScript · **static export** (Netlify + GitHub Pages)
**Última verificación interna:** Lighthouse Home → Perf 84 · A11y 96 · Best-Practices 96 · SEO 100 (LCP 1.6s)

> Objetivo de este QA: confirmar de forma independiente que (1) el rediseño se ve y funciona bien, (2) todas las páginas cargan, (3) el SEO/schema es válido, (4) **no se publica ningún dato inventado**, y (5) el rendimiento/accesibilidad están en rango. Marca cada ítem ✅/❌ y anota la evidencia.

---

## 0. Contexto: qué se construyó (para saber qué verificar)
- **Rediseño visual "Mile High"**: charcoal `#17120f` + copper `#d9531e`, tipografías Saira Condensed (titulares) / Archivo (cuerpo) / JetBrains Mono (etiquetas). Logo wordmark "DENVER METRO / SERVICES.com" con `.com` en cobre.
- **~406 páginas estáticas**: Home, 6 categorías, 20 sub-servicios, 6 blog posts, About, Contact, Financing, Areas, Blog index, **/locations** + **51 páginas por estado** + **306 páginas estado×servicio**.
- **Contenido único**: las 6 categorías, 20 sub-servicios, 6 blogs y los 51 estados tienen cuerpo de texto **único** (no plantilla). Las 306 estado×servicio son plantilla diferenciada por estado/servicio/ciudades (ver §9).
- **Features**: banner de geolocalización (detecta el estado por IP y enlaza a su página), notificaciones de prueba social en vivo (abajo-izquierda), botón de llamada sticky, formulario de contacto de 3 pasos, calculadora de financiamiento.
- **Honestidad de datos**: NAP (teléfono/dirección/email/rating) son PLACEHOLDERS; el schema de dirección/rating está **desactivado a propósito** hasta tener datos reales (ver §7 y §10).

---

## 1. Smoke test — las páginas cargan (HTTP 200)
Visita cada URL y confirma que renderiza (no 404, no página en blanco, no error de hidratación):

- [ ] `/` (Home)
- [ ] `/electrical-services/` (categoría)
- [ ] `/electrical-services/electrical-panel-upgrade/` (sub-servicio / "money page")
- [ ] `/plumbing-services/drain-cleaning-service/`
- [ ] `/about/` · `/contact/` · `/financing/` · `/areas-we-serve/` · `/blog/`
- [ ] `/blog/how-to-spot-hail-damage/` (blog post)
- [ ] `/locations/` (índice de estados)
- [ ] `/locations/texas/` · `/locations/wyoming/` · `/locations/california/` (páginas de estado)
- [ ] `/locations/florida/roofing-services/` (estado×servicio)
- [ ] `/electrical-services/blog/` (blog por categoría)

**Esperado:** todas 200, layout consistente (header oscuro con logo cobre, footer oscuro), sin texto roto.

---

## 2. Rediseño visual ("Mile High")
- [ ] Header: barra superior oscura con teléfono, nav, logo "Denver Metro / SERVICES.com" (`.com` en **cobre**), botón cobre "CALL ...". Mega-menú "Services" abre al pasar el mouse (desktop).
- [ ] Paleta: fondos oscuros charcoal en hero/footer/secciones dark; cuerpo en "paper" cálido; acentos en **cobre** (NO naranja `#f97316` puro de Tailwind por defecto).
- [ ] Tipografía: titulares en condensada mayúscula (Saira), etiquetas mono. No debe verse la fuente del sistema genérica.
- [ ] Responsive: probar a 375px (móvil) y 1280px. El nav colapsa a menú hamburguesa en móvil; grids pasan a 1 columna.
- [ ] Footer: 4 columnas + mapa de enlaces "All Services Provided" y "Service Areas & Zip Codes".

---

## 3. Funcionalidad interactiva
- [ ] **Banner de geolocalización** (tira fina bajo el header): muestra un saludo. Si estás en EE.UU., nombra tu estado y muestra un enlace "View {Estado} services →" que lleva a `/locations/{estado}/`. Fuera de EE.UU. muestra el mensaje por defecto "Nationwide home services…". Tiene una × que lo cierra (y no reaparece en la sesión).
- [ ] **Notificaciones de prueba social** (abajo-izquierda): aparece una píldora "Live · N jobs booked today" y toasts rotativos ("… requested a panel upgrade · Denver, CO · Just now"). Pausan al pasar el mouse; la × cierra un toast.
- [ ] **Botón de llamada sticky** (abajo-derecha): aparece tras hacer scroll > ~640px; `tel:` link.
- [ ] **Contact `/contact/`**: formulario de **3 pasos** con barra de progreso. Probar: paso 1 (elegir servicio) → Continue; paso 2 dejar "First name"/"Phone"/"Zip" vacíos → Continue debe **bloquear y marcar en rojo**; llenarlos → paso 3 → "Request My Service" → muestra estado de éxito "Request Received".
- [ ] **Financing `/financing/`**: la calculadora actualiza el "Estimated Monthly Payment" al mover los sliders (Project Amount, APR) y cambiar el término (12/24/36/60 mo). Con APR 0% debe seguir calculando (monto/meses).
- [ ] **prefers-reduced-motion**: con "Reduce motion" activado en el SO, las animaciones (count-up, reveals, toasts) no deben molestar (se muestran en estado final).

---

## 4. Enlaces internos (no rotos)
- [ ] Header/footer: todos los enlaces llevan a páginas 200 (Home, About, Services, Locations, Financing, Contact, Blog, Areas).
- [ ] Una categoría → sus sub-servicios → vuelven a categoría; las tarjetas de servicio en una página de estado llevan a `/locations/{estado}/{servicio}/`.
- [ ] No debe existir ningún `href="#"` (enlaces muertos) en contenido real.
> _Verificación interna previa: 37,174 enlaces internos crawleados, 0 rotos._ Comet puede re-confirmar con un crawl o por muestreo.

---

## 5. SEO técnico
Inspeccionar el HTML (ver código fuente / DevTools) de Home + una money page + una página de estado:
- [ ] **Exactamente un `<h1>`** por página, y jerarquía de headings sin saltos (h1→h2→h3).
- [ ] `<title>` y `<meta name="description">` únicos y descriptivos por página.
- [ ] `<link rel="canonical">` presente y apuntando a la URL correcta de esa página.
- [ ] OpenGraph (`og:title`, `og:description`, `og:image`) y Twitter card presentes.
- [ ] `/sitemap.xml` carga y lista ~403 URLs (incluye `/locations/*`). `/robots.txt` permite indexación y apunta al sitemap.
- [ ] Todas las `<img>` tienen atributo `alt` (las decorativas pueden tener `alt=""` con `role="presentation"`).
- [ ] `/favicon` / `icon.svg` carga (marca de montañas).

---

## 6. Datos estructurados (JSON-LD)
En el código fuente, los bloques `<script type="application/ld+json">` deben **parsear sin error** y tener los tipos correctos:
- [ ] Home → `Organization` + `LocalBusiness` (`HomeAndConstructionBusiness`) + `BreadcrumbList`.
- [ ] Sub-servicio → `Service` + `FAQPage` + `BreadcrumbList`.
- [ ] Estado → `Service` (con `areaServed` = ese estado) + `FAQPage` + `BreadcrumbList`.
- [ ] Blog post → `BlogPosting` (`Article`) con autor y `datePublished`.
- [ ] **CRÍTICO (honestidad):** NO debe aparecer `AggregateRating` ni `PostalAddress`/`address` en NINGÚN JSON-LD (están desactivados a propósito porque no hay datos reales). Si aparece alguno → ❌ bug.
- Validación recomendada: pegar una URL en https://search.google.com/test/rich-results y confirmar 0 errores graves.

---

## 7. Auditoría de honestidad de contenido (IMPORTANTE)
El contenido de texto fue generado con IA bajo la regla de "no inventar datos verificables". Confirmar:
- [ ] En el **schema** no hay rating/reseñas/dirección inventados (ver §6).
- [ ] Los cuerpos de las páginas **no** afirman números falsos de licencia (ej. "License #1234"), ni "N años en el negocio" como hecho de la empresa, ni conteos de reseñas inventados, ni precios exactos garantizados. (Sí es aceptable: rangos genéricos, ejemplos ilustrativos como "una pieza de $200", y datos técnicos como "12-15 años de vida útil del equipo".)
- [ ] Las métricas de marketing visibles en la Home ("2,400+ homes", "4.9", "15+ years") son **copy de diseño** y NO están en el schema. _(Nota: son placeholders del diseño aprobado; reemplazar por reales cuando existan — no es bug, es pendiente de datos.)_
- [ ] Avatares de testimonios/equipo son **iniciales generadas** (no fotos de stock de personas reales presentadas como clientes). ✅ esperado.

---

## 8. Rendimiento y accesibilidad (Lighthouse)
Correr Lighthouse (desktop) sobre Home y una money page. **Rangos esperados:**
- [ ] SEO **= 100**
- [ ] Accessibility **≥ 95**
- [ ] Best Practices **≥ 95**
- [ ] Performance **≥ 80** (Home ~84, money page ~81–85). LCP < 2.5s, CLS < 0.1, TBT bajo.
- [ ] Consola del navegador: sin errores rojos en carga normal. _(Puede haber, como mucho, un fallo de red del API de geo en algunas redes/VPN — no crítico.)_

> Comando de referencia (local, requiere Chrome):
> `npx lighthouse@12 "<URL>" --preset=desktop --only-categories=performance,accessibility,best-practices,seo`

---

## 9. Contenido / duplicados
- [ ] Home, categorías, sub-servicios, blogs y las 51 páginas de **estado** tienen texto **único y específico** (clima/ciudades reales del estado). Comparar 2-3 estados (ej. Texas vs Florida vs Wyoming) → deben ser claramente distintos.
- [ ] NO debe aparecer el texto de plantilla viejo: frases como "The Science of", "The Hidden Dangers of DIY", "premier provider of" → si aparecen renderizadas en una página, es ❌.

---

## 10. NO reportar como bug (comportamiento intencional / pendiente de datos del dueño)
Estos NO son defectos — están así a propósito:
1. **Teléfono `303-555-0123`, email `service@denvermetroservices.com`, sin dirección física** → placeholders. El schema de dirección/rating está desactivado a propósito (`HAS_PHYSICAL_ADDRESS=false`, `HAS_VERIFIED_REVIEWS=false`). Pendiente de datos reales del dueño.
2. **Iconos sociales** del footer apuntan a las home de las plataformas (facebook.com, etc.), no a perfiles específicos (aún no existen).
3. **306 páginas estado×servicio** son plantilla diferenciada (mismo servicio en cada estado). Es SEO programático intencional; el plan es enriquecerlas con el Producer. No reportar como "contenido duplicado" salvo que dos sean **idénticas** (no deberían serlo: cambian estado, ciudades, FAQs).
4. **Performance < 90**: conocido. Faltan WebP/AVIF (la herramienta local no genera WebP) y el iframe de Google Maps carga ~300KB de JS. Documentado como mejora, no bug.
5. **Logo en SVG** (`/logo.svg`) en vez de PNG → intencional (sin rasterizador disponible); válido para schema/OG.

---

## 11. Cómo reportar
Para cada ❌ encontrado, anota: **URL**, **qué se ve vs. qué se esperaba**, **captura/selector del elemento**, y **severidad** (bloqueante / mayor / menor). Agrupa por sección (§1–§9). Lo de §10 se ignora.

---
_Generado tras: rediseño completo Mile High, 357 páginas de ubicación, enriquecimiento de contenido con agentes en paralelo, instalación del motor Producer, y una pasada de QA interna (links + Lighthouse + honestidad). Commit de referencia: `a8a643f`._
