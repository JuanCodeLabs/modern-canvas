---
title: "Introducción a React Hooks: useState y useEffect"
excerpt: "Aprende los fundamentos de React Hooks y cómo revolucionaron la forma en que escribimos componentes funcionales. En este artículo exploramos los hooks más importantes."
date: "2024-01-15"
author: "Juan Díaz"
tags: ["React", "JavaScript", "Frontend"]
---

# Introducción a React Hooks: useState y useEffect

React Hooks introdujeron una forma completamente nueva de escribir componentes en React, permitiéndonos usar estado y otras características de React sin escribir una clase.

## ¿Qué son los Hooks?

Los Hooks son funciones que te permiten "enganchar" el estado de React y el ciclo de vida desde componentes funcionales. No funcionan dentro de clases — te permiten usar React sin clases.

## useState: Manejando el estado

El hook `useState` es el hook más básico y te permite agregar estado a los componentes funcionales.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

### Reglas de useState

1. **Solo llamar Hooks en el nivel superior**: Nunca llames Hooks dentro de loops, condiciones o funciones anidadas.
2. **Solo llamar Hooks desde componentes de React**: No llames Hooks desde funciones JavaScript regulares.

## useEffect: Manejando efectos secundarios

El hook `useEffect` te permite realizar efectos secundarios en componentes funcionales. Sirve para lo mismo que `componentDidMount`, `componentDidUpdate`, y `componentWillUnmount` combinados en las clases de React.

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`;
  });

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

### Controlando cuándo se ejecuta el efecto

Puedes controlar cuándo se ejecuta el efecto pasando un array de dependencias:

```jsx
useEffect(() => {
  // Se ejecuta solo cuando count cambia
  document.title = `Has hecho clic ${count} veces`;
}, [count]);

useEffect(() => {
  // Se ejecuta solo una vez (similar a componentDidMount)
  console.log('Componente montado');
}, []);
```

## Combinando múltiples Hooks

Puedes usar múltiples Hooks en el mismo componente:

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <div>Cargando...</div>;
  return <div>{user.name}</div>;
}
```

## Buenas prácticas

1. **Usa múltiples useEffect para diferentes preocupaciones**: Es mejor tener múltiples efectos con una sola responsabilidad que un solo efecto complejo.

2. **Limpia tus efectos**: Si un efecto se suscribe a algo, necesita una función de limpieza:

```jsx
useEffect(() => {
  const subscription = someAPI.subscribe();
  return () => subscription.unsubscribe();
}, []);
```

3. **Optimiza con useMemo y useCallback**: Para cálculos costosos y funciones que se pasan a componentes hijos.

## Conclusión

React Hooks han simplificado enormemente la forma en que escribimos componentes React. Nos permiten reutilizar lógica de estado sin cambiar la jerarquía de componentes y hacen que el código sea más fácil de entender y mantener.

Los hooks `useState` y `useEffect` son solo el comienzo. Hay muchos otros hooks útiles como `useContext`, `useReducer`, `useMemo`, y `useCallback` que puedes explorar para construir aplicaciones más complejas.
