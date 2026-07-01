# Despliegue de ZEUP — GitHub Pages + dominio propio

Este sitio es **100% estático** (HTML + CSS + JS, sin build ni servidor). Funciona de dos formas:

- **Offline:** abre `index.html` con doble clic. Navega entre las 4 páginas con normalidad.
- **Online (GitHub Pages):** sube esta carpeta a un repositorio y actívalo. Pasos abajo.

> Lo único que se carga de internet son las fuentes de Google (Saira / Inter / IBM Plex Mono). Sin conexión, el sitio usa fuentes del sistema y se ve casi igual.

---

## Archivos del sitio

```
index.html              Home
bycubo-system.html      ByCubo System
departamentos.html      Departamentos Operacionales
educacion.html          Educación Empresarial
styles.css              Estilos (identidad de marca v1.0)
script.js               Interacciones (menú, reveals, glow, formulario)
CNAME                   Dominio personalizado (edítalo con tu dominio)
.nojekyll               Evita el procesamiento Jekyll de GitHub
```

---

## Opción A — Subir por la web de GitHub (sin comandos)

1. Crea un repositorio nuevo en GitHub (p. ej. `zeup-web`), público.
2. En el repo: **Add file → Upload files** y arrastra **todos** los archivos de esta carpeta (incluye `CNAME` y `.nojekyll`).
3. **Commit changes**.
4. Ve a **Settings → Pages**.
5. En **Build and deployment → Source** elige **Deploy from a branch**.
6. Branch: **main** · carpeta: **/(root)** → **Save**.
7. En 1–2 minutos tu sitio estará en `https://<usuario>.github.io/zeup-web/`.

## Opción B — Subir por línea de comandos (Git)

```bash
cd zeup-website
git init
git add .
git commit -m "ZEUP landing page"
git branch -M main
git remote add origin https://github.com/<usuario>/zeup-web.git
git push -u origin main
```
Luego activa Pages igual que en los pasos 4–7 de la Opción A.

---

## Dominio personalizado (tu dominio)

1. **Edita el archivo `CNAME`** y deja **solo** tu dominio (sin `https://`). Ejemplos:
   - Dominio raíz: `zeup.co`
   - Subdominio: `www.zeup.co`
2. En tu proveedor de dominio (DNS), agrega:
   - **Dominio raíz (`zeup.co`)** → 4 registros **A** apuntando a:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **Subdominio (`www`)** → un registro **CNAME** apuntando a `<usuario>.github.io`
3. En **Settings → Pages → Custom domain** escribe tu dominio y guarda.
4. Marca **Enforce HTTPS** (puede tardar unos minutos en habilitarse).

> El archivo `CNAME` de esta carpeta ya trae `zeup.co` como valor inicial. Cámbialo si tu dominio es distinto.

---

## Nota sobre el formulario de contacto

El formulario muestra una confirmación simulada (no envía correo, porque GitHub Pages es estático). Para recibir los envíos en `zeup.inc@gmail.com`, conéctalo a un servicio gratuito como **Formspree** o **Getform**:

1. Crea un formulario en el servicio y copia su URL de acción.
2. En `index.html`, en `<form id="contactForm">`, agrega `action="URL_DEL_SERVICIO" method="POST"` y `name` a cada campo.
3. (Opcional) quita el manejador de envío simulado en `script.js`.
