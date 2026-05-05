---
title: "Señales de reflejo: la práctica que te puede ahorrar horas (y errores graves)"
excerpt: "En el presente artículo hablo sobre la importancia que son las señales de reflejo y cómo implementarlas en sistemas de automatización para evitar errores y facilitar el mantenimiento."
date: "2026-02-21"
author: "Juan Díaz"
tags: ["Señales de reflejo", "Automatización", "Buenas Prácticas"]
---

En sistemas de automatización como SCADA, BMS o EDMS, hay un error muy común que muchos ingenieros cometen:

Trabajar directamente con señales reales en toda la lógica del sistema.
Puede parecer lógico, pero con el tiempo y la escalabilidad, se transforma en un problema serio.

---

## El problema: depender de señales que no son permanentes

Cuando integramos una red, usamos señales de:
- PLCs  
- Sensores  
- Dispositivos de comunicación  
- Entradas analógicas o digitales  

Estas señales suelen usarse en:
- Scripts  
- Alarmas  
- Reportes  
- Visualizaciones  

> El problema es que estas señales pueden cambiar en cualquier momento

Las causas más comunes que pueden provocar estos cambios son:
- Fallas de hardware  
- Cambio de puertos  
- Reconfiguración  
- Desgaste con el tiempo  

Lo que resulta en un sistema inestable y propenso a errores al tener que actualizar constantemente las referencias a las señales reales.

---

## Arquitectura incorrecta

> Señal real → Scripts / Alarmas / Reportes

Esta arquitectura genera problemas de estabilidad y mantenimiento, se debe considerar no seguir esta practica pues siempre tendremos futura escalabilidad por muy pequeño que sea el sistema. Y en casos de sistemas BMS, donde la interfaz con el usuario es fundamental, esta práctica puede generar problemas graves de usabilidad y confiabilidad para el equipo de operación.

---

## ¿Qué es una señal de reflejo?

Es una señal intermedia, la señal reflejo es una copia de la señal real -como un espejo- que se utiliza como punto de referencia para el sistema.

> Dispositivo → Señal real → Señal de reflejo → Sistema

---

## Arquitectura correcta

La señal real solo alimenta el reflejo, y todo lo demás depende del reflejo.

Gracias a esto obtenemos una buena arquitectura con beneficios como:

- Desacoplamiento  
- Estabilidad  
- Facilidad de mantenimiento 

![Señales de reflejo](/public/reflejos_estado.png)

Al usar este sistema podemos garantizar que los cambios en las señales reales no afecten la lógica del sistema, ya que esta depende del reflejo y no de la señal real directamente.

---

## Caso real 1: scripts que pueden dañar equipos

El personal puede realizar scripts mal hechos los cuales pueden:
- Generar cambios constantes (bucles infinitos)  
- Provocar oscilaciones  
- Exigir variaciones bruscas en dispositivos sensibles 

Esto sobreexige los equipos si no se realizan sistemas de pruebas o se reciclan scripts diseñados para otros contextos.

Solución:
- Probar con señales de reflejo  
- Validar antes de conectar al equipo real

---

## Caso real 2: cambios físicos

Situación:
- Falla un equipo  
- Se cambia su conexión a otro puerto  

Si no se tuviese una señal de reflejo, se tendría que actualizar constantemente las referencias a la señal real.

Con una señal de reflejo:
- Solo cambias el enlace de la señal real al reflejo

El sistema permanece intacto cambiando solo una referencia.

---

## Entornos de prueba

Al poseer señal de reflejo podemos:
- Copiar lógicas  
- Usar señales de prueba  
- Simular escenarios  

✔ Todo esto sin afectar producción  

---

## Caso real

En un hospital:
- Todas las señales usan reflejo  
- Todo se prueba antes de producción  

Resultado:
- Menos errores  
- Mayor estabilidad
- Un trabajo más robusto y correctamente realizado

---

## Conclusión

El uso, creación y comprensión de las señales de reflejo es fundamental para garantizar una arquitectura robusta y mantenible en sistemas BMS.

![Señales de reflejo](/public/reflejos.png)

---

## Regla clave

> Nunca conectes lógica directamente a señales reales.
> Siempre usa una señal de reflejo. Recordar siempre la importancia de las señales de reflejo en sistemas BMS.
> Tales como en la programación, donde se usan variables de estado para controlar el flujo de ejecución.

