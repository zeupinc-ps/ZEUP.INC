# ZEUP — Sitio Web Profesional de Ecosistemas Empresariales

## 🎯 Descripción General

Sitio web premium para **ZEUP**, una incubadora, desarrolladora y optimizadora de startups y empresas que construye, fortalece, optimiza, automatiza y escala ecosistemas empresariales completos.

El sitio transmite autoridad, tecnología, inteligencia empresarial y escalabilidad. Las referencias visuales son: Y Combinator, McKinsey & Company, Stripe, OpenAI, Palantir Technologies y Notion.

---

## 📁 Estructura del Proyecto

```
zeup-website/
├── index.html              # Página principal (HOME)
├── bycubo-system.html      # Página de metodología ByCubo System
├── departamentos.html      # Página de 9 Departamentos Operacionales
├── educacion.html          # Página de Educación Empresarial
├── styles.css              # Sistema de diseño completo (dark mode)
├── script.js               # Interactividad y animaciones
└── README.md              # Este archivo
```

---

## 🎨 Sistema de Diseño

> Alineado al **ZEUP Brand Identity System v1.0** (brandbook 5.3 + Applied Brandbook).

### Paleta de Colores (oficial)
- **Abyss Navy** (fondo): #041C32 / #06253F / #0A2E4D — Pantone 289 C
- **Imperial Gold** (acento premium): #C89B3C / #D6A847 / #E7C76A / #8B6A25 — Pantone 7549 C
- **Electric Cyan** (tecnología/IA): #00C8FF / #00E5FF / #00AEEF — Pantone 298 C
- **Secundarios**: Old Money Green #2C5F45 · Burgundy Reserve #7B1E2B · Graphite #2B3547
- **Texto principal**: #F5F7FA
- **Texto secundario**: #AEBED0 · **Apoyo**: #6E8196
- **Bordes**: hairline dorado rgba(200, 155, 60, 0.20)

### Tipografía (oficial)
- **Display / Títulos**: Saira (sustituto web de Eurostile Extended / Bank Gothic)
- **Cuerpo**: Inter (Regular 400, Light 300) — alt. Helvetica Neue
- **Sistema / Tech**: IBM Plex Mono (etiquetas, dashboards, código)

### Logo
- **Isotipo**: cubo isométrico — marco dorado (arquitectura de soporte) + núcleo cian brillante (sistema operativo) + cubos superiores (escalabilidad modular).
- **Wordmark**: "ZE" en dorado + "UP" en cian neón.
- **Slogan**: Conectamos · Optimizamos · Potenciamos
- **Descriptor**: Incubadora · Gestora · Optimizadora de Empresas

### Características Visuales
✨ Diseño dark mode completo  
✨ Líneas finas y bordes sutiles con transparencia  
✨ Efectos de glow suave en azul eléctrico  
✨ Gradientes radiales en azul y cian  
✨ Cuadrículas de fondo muy tenues  
✨ Tarjetas redondeadas (border-radius 12-16px)  
✨ Animaciones fade + slide-up al scroll  
✨ Efectos hover: elevación + cambio de borde  

---

## 📄 Páginas Principales

### 1. HOME (index.html)
La página de inicio completa con 8 secciones:

1. **HERO**: Headline "Construimos, optimizamos y escalamos empresas" + diagrama de ecosistema
2. **STATS BAR**: 4 estadísticas principales
3. **QUIÉNES SOMOS**: Misión + diagnóstico empresarial con barras de progreso
4. **CORE ECOSYSTEM**: 3 pilares (ByCubo, Departamentos, Educación)
5. **PROBLEMAS**: 7 problemas + dashboard mock
6. **METODOLOGÍA**: 5 fases (Diagnóstico → Escalamiento)
7. **HERRAMIENTAS**: Logos de plataformas + 3 métricas
8. **TESTIMONIOS**: 3 casos de éxito + CTA final
9. **CONTACTO**: Formulario + información de contacto

### 2. ByCubo System (bycubo-system.html)
Landing page del método propietario:
- Explicación del problema
- Definición de ByCubo System
- **12 módulos** interconectados
- Resultados y beneficios
- CTA hacia auditoría

### 3. Departamentos (departamentos.html)
Optimización organizacional:
- **9 departamentos** sincronizados
- Beneficios de la sincronización interdepartamental
- Métricas de impacto
- CTA hacia auditoría departamental

### 4. Educación (educacion.html)
Productos formativos:
- Importancia de la formación de equipos
- **6 productos** (cursos, programas, ebooks, certificaciones)
- Precios y accesos
- CTA para programas personalizados

---

## 🚀 Características Técnicas

### Interactividad
✅ Menú hamburguesa responsive  
✅ Navbar con efecto glassmorphism  
✅ Scroll suave entre secciones  
✅ Animaciones de entrada (Intersection Observer)  
✅ Contadores de números  
✅ Barras de progreso animadas  
✅ Formulario de contacto funcional  
✅ Efectos hover en tarjetas  

### Responsive Design
✅ Desktop: layouts en múltiples columnas  
✅ Tablet: 2 columnas  
✅ Mobile: 1 columna + menú hamburguesa  
✅ Títulos que se escalan proporcionalmente  

### Optimización
✅ Grid pattern de fondo muy tenue  
✅ Smooth transitions y animations  
✅ Lazy loading preparado  
✅ Formulario con validación básica  
✅ SEO básico (titles, meta descriptions)  

---

## 💻 Cómo Usar

### Opción 1: Servidor Local Python (Recomendado)
```bash
cd zeup-website
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### Opción 2: Live Server (VS Code)
1. Instala la extensión "Live Server"
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 3: Acceso Directo
Simplemente abre `index.html` en tu navegador

---

## 📱 Rutas y Navegación

| Página | URL | Descripción |
|--------|-----|-------------|
| Home | `/` o `/index.html` | Página principal |
| ByCubo System | `/bycubo-system.html` | Metodología propietaria |
| Departamentos | `/departamentos.html` | 9 departamentos operacionales |
| Educación | `/educacion.html` | Productos formativos |

---

## 🎯 Secciones de Conversión

### Call-to-Actions
1. **Navbar**: "Agendar Reunión" (azul primario)
2. **Hero**: "Agendar Diagnóstico" + "Explorar Ecosistema"
3. **Core Ecosystem**: Links a otras páginas
4. **CTA Banner**: "Agendar Diagnóstico Estratégico"
5. **Contact**: Formulario completo + información

Todos los CTAs llevan a la sección de contacto o formulario.

---

## 📊 Elementos Visuales

### Íconos Geométricos
- ◆ Diamante (ByCubo)
- ⬟ Hexágono (Departamentos)
- ■ Cuadrado (Educación)

### Diagramas
- **Ecosistema circular** en hero (SVG animado)
- **Barras de progreso** en diagnosis
- **Dashboard mock** en problemas
- **Timeline** en metodología

### Tarjetas
- Efecto hover: elevación + borde azul
- Transición suave 0.3s
- Fondo con gradiente sutil al hover

---

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-bg-primary: #041C32;  /* Abyss Navy */
    --color-gold: #C89B3C;        /* Imperial Gold */
    --color-gold-bright: #E7C76A; /* Gold bright */
    --color-cyan: #00C8FF;        /* Electric Cyan */
    /* ... más variables */
}
```

### Cambiar Contenido
- Títulos y descripciones: Edita directamente en los `.html`
- Estadísticas: Busca `.stat-number`
- Precios: Busca en `educacion.html`
- Contacto: Edita emails y teléfono

### Agregar Más Secciones
Copia el patrón de las secciones existentes:
1. Crea un `<section class="core-ecosystem">` o similar
2. Usa las clases CSS existentes
3. Las animaciones se aplican automáticamente

---

## 📈 Métricas y KPIs

El sitio registra:
- Clics en botones CTA
- Envíos de formulario
- Navegación entre páginas
- Tiempo en sección
- Descargas de recursos

---

## 🔐 Seguridad y Privacidad

- ✅ Sin recolección de datos de terceros
- ✅ Formulario sin envío real (requiere integración con backend)
- ✅ HTTPS recomendado en producción
- ✅ Política de privacidad necesaria

---

## 📝 Próximos Pasos

Para poner en producción:

1. **Hosting**: Subir a Netlify, Vercel, o servidor propio
2. **Email**: Integrar formulario con servicio (Sendgrid, Mailchimp)
3. **Analytics**: Agregar Google Analytics o Mixpanel
4. **SSL**: Obtener certificado HTTPS
5. **SEO**: Completar meta tags y sitemap.xml
6. **CRM**: Conectar leads a plataforma CRM

---

## 🎓 Notas de Diseño

**Inspiraciones visuales:**
- Y Combinator: Simplicidad + autoridad
- McKinsey: Tipografía fuerte + colores limitados
- Stripe: Dark mode + animaciones suaves
- Palantir: Diagramas de datos + tonos técnicos
- OpenAI: Minimalismo premium

**Principios aplicados:**
- ❌ Sin fotos de personas
- ❌ Sin diseño genérico de agencia marketing
- ✅ Diagramas sistémicos
- ✅ Dashboards y visualizaciones
- ✅ Iconografía geométrica limpia
- ✅ Tipografía monoespaciada en etiquetas técnicas

---

## 📧 Información de Contacto

**Email:** zeup.inc@gmail.com  
**WhatsApp:** +56 9 4852 7605  
**Horario:** Lun–Vie, 9:00–18:00 (GMT-5)

---

## 📄 Licencia

Sitio web propietario de ZEUP. Todos los derechos reservados © 2025.

---

## 🚀 Estado del Proyecto

✅ **Completado:**
- 4 páginas principales
- Sistema de diseño dark mode premium
- Animaciones y efectos interactivos
- Formulario de contacto
- Responsive design completo
- Navbar y footer en todas las páginas

🔄 **Próximos:**
- Integración de backend para formularios
- Analytics y tracking
- Optimización de rendimiento
- Integración CRM
- Blog/Resources

---

**Versión**: 1.0.0  
**Fecha**: Junio 2025  
**Creado con**: HTML5, CSS3, JavaScript Vanilla  
**Servidor**: Python HTTP Server / Netlify / Vercel
