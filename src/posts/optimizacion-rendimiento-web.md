---
title: "Optimización de rendimiento en aplicaciones web"
excerpt: "Descubre las mejores prácticas y técnicas para optimizar el rendimiento de tus aplicaciones web modernas, desde lazy loading hasta code splitting."
date: "2024-01-10"
author: "Juan Díaz"
tags: ["Performance", "Web Dev", "Optimization"]
---

# Optimización de rendimiento en aplicaciones web

El rendimiento es uno de los aspectos más importantes de cualquier aplicación web moderna. Una aplicación rápida no solo mejora la experiencia del usuario, sino que también impacta positivamente en el SEO y las conversiones.

## Métricas de rendimiento importantes

Antes de optimizar, necesitas medir. Las métricas clave incluyen:

- **First Contentful Paint (FCP)**: Tiempo hasta que el primer contenido es visible
- **Largest Contentful Paint (LCP)**: Tiempo hasta que el contenido más grande es visible
- **Time to Interactive (TTI)**: Tiempo hasta que la página es completamente interactiva
- **Cumulative Layout Shift (CLS)**: Estabilidad visual de la página

## Lazy Loading

### Imágenes

```html
<img 
  src="placeholder.jpg" 
  data-src="real-image.jpg" 
  loading="lazy" 
  alt="Descripción"
  class="lazy-image"
/>
```

```javascript
// Para navegadores que no soportan loading="lazy"
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy-image"));
  
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy-image");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});
```

### Componentes en React

```jsx
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

## Code Splitting

### React.lazy para componentes

```jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Cargando...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
```

### Dynamic imports

```javascript
// Carga módulos solo cuando se necesitan
async function loadModule() {
  const { heavyFunction } = await import('./heavyModule');
  return heavyFunction();
}
```

## Optimización de assets

### Imágenes

1. **Usa formatos modernos**: WebP, AVIF
2. **Sirve diferentes tamaños**: Responsive images
3. **Comprime imágenes**: Herramientas como ImageOptim, TinyPNG

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Descripción">
</picture>
```

### CSS y JavaScript

1. **Minificación**: Elimina espacios y comentarios innecesarios
2. **Bundling**: Combina múltiples archivos en uno
3. **Tree shaking**: Elimina código no utilizado

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true,
    minimize: true
  }
};
```

## Caching strategies

### Service Workers

```javascript
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/styles/main.css',
        '/scripts/main.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

### HTTP Headers

```javascript
// Express.js
app.use(express.static('public', {
  maxAge: '1y',
  etag: true,
  lastModified: true
}));
```

## Optimización del renderizado

### Virtual scrolling

```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index}
  </div>
);

const Example = () => (
  <List
    height={500}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);
```

### Debouncing y throttling

```javascript
// Debounce para eventos de scroll
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.addEventListener('scroll', debounce(handleScroll, 100));
```

## Monitoreo de rendimiento

### Web Vitals

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Performance API

```javascript
// Medir tiempo de carga
window.addEventListener('load', () => {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log(`Tiempo de carga: ${pageLoadTime}ms`);
});
```

## Conclusión

La optimización de rendimiento es un proceso continuo. Comienza midiendo, identifica los cuellos de botella y aplica las técnicas apropiadas. Recuerda que la optimización prematura es contraproducente, así que enfócate en las mejoras que realmente impacten en la experiencia del usuario.

Las técnicas mencionadas aquí son solo el comienzo. Siempre hay más que aprender sobre rendimiento web, así que mantente actualizado con las últimas mejores prácticas y herramientas.
