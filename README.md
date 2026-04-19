# 💙 Página de Regalo — Guía de Personalización

## Estructura de archivos
```
regalo-web/
├── index.html    ← Contenido y estructura
├── style.css     ← Diseño y colores
├── script.js     ← Contador y animaciones
└── README.md     ← Esta guía
```

---

## ✏️ Qué personalizar (en orden)

### 1. Nombre y frase del Hero (`index.html`)
Busca el comentario `INSTRUCCIÓN: Cambia "Sofia"` y edita:
```html
<h1 class="hero-name">Sofia</h1>
<p class="hero-phrase">Desde que llegaste, cada día tiene más sentido.</p>
```

### 2. Foto del Hero (`style.css`)
Busca `background-image` en `#hero` y reemplaza la URL:
```css
background-image: url('./fotos/hero.jpg');
```

### 3. Fechas del Timeline (`index.html`)
Edita los 4 bloques `.timeline-item`:
- `<span class="timeline-date">` → La fecha
- `<h3 class="timeline-event">` → El título del momento
- `<p>` → La descripción

### 4. Fotos de la Galería (`index.html`)
Reemplaza los 6 `src="..."` de las etiquetas `<img>`:
```html
<img src="./fotos/foto1.jpg" alt="Descripción" />
```

### 5. Fecha del Contador (`script.js`)
Primera línea del archivo:
```js
const START_DATE = "2022-02-14T20:00:00";
```
Formato: `"YYYY-MM-DDTHH:MM:SS"`

### 6. La Carta (`index.html`)
Busca `INSTRUCCIÓN: Reemplaza todo este texto` y escribe tu mensaje.

---

## 🚀 Subir a GitHub Pages (gratis)

1. Crea una cuenta en [github.com](https://github.com) si no tienes
2. Crea un nuevo repositorio (ej: `para-sofia`)
3. Sube todos los archivos (incluida la carpeta `fotos/` con tus imágenes)
4. Ve a Settings → Pages → Branch: main → Save
5. Tu página estará en: `https://tu-usuario.github.io/para-sofia/`

---

## 💡 Tips

- Las fotos funcionan mejor en formato **JPG o WebP**
- Tamaño recomendado: **ancho máximo 1200px** para que cargue rápido
- La foto del **hero** queda mejor si es **apaisada (horizontal)**
- Las fotos de galería pueden ser de cualquier proporción

---

Hecho con amor 💙
