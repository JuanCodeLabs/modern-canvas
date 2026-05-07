---
title: "Reflex signals: the practice that can save you hours (and serious errors)"
excerpt: "In this article I talk about the importance of reflex signals and how to implement them in automation systems to avoid errors and facilitate maintenance."
date: "2026-02-21"
author: "Juan Díaz"
tags: ["Reflex Signals", "Automation", "Best Practices"]
---

In automation systems like SCADA, BMS or EDMS, there's a very common error that many engineers make:

Working directly with real signals throughout the system's logic.
It may seem logical, but over time and with scalability, it becomes a serious problem.

---

## The problem: depending on signals that are not permanent

When we integrate a network, we use signals from:
- PLCs  
- Sensors  
- Communication devices  
- Analog or digital inputs  

These signals are usually used in:
- Scripts  
- Alarms  
- Reports  
- Visualizations  

> The problem is that these signals can change at any time

The most common causes that can trigger these changes are:
- Hardware failures  
- Port changes  
- Reconfiguration  
- Wear over time  

This results in an unstable system prone to errors, having to constantly update references to real signals.

---

## Incorrect architecture

> Real signal → Scripts / Alarms / Reports

This architecture generates stability and maintenance problems, we should consider not following this practice since we will always have future scalability no matter how small the system is. And in the case of BMS systems, where user interface is fundamental, this practice can generate serious usability and reliability problems for the operations team.

---

## What is a reflex signal?

It's an intermediate signal, the reflex signal is a copy of the real signal -like a mirror- that is used as a reference point for the system.

> Device → Real signal → Reflex signal → System

---

## Correct architecture

The real signal only feeds the reflex, and everything else depends on the reflex.

Thanks to this we obtain a good architecture with benefits such as:

- Decoupling  
- Stability  
- Ease of maintenance 

![Reflex signals](/public/reflejos_estado.png)

By using this system we can guarantee that changes in real signals don't affect the system's logic, since it depends on the reflex and not directly on the real signal.

---

## Real case 1: scripts that can damage equipment

Personnel can create poorly made scripts which can:
- Generate constant changes (infinite loops)  
- Cause oscillations  
- Demand abrupt variations in sensitive devices 

This overloads the equipment if test systems are not performed or scripts designed for other contexts are recycled.

Solution:
- Test with reflex signals  
- Validate before connecting to real equipment

---

## Real case 2: physical changes

Situation:
- Equipment fails  
- Its connection is changed to another port  

If there were no reflex signal, references to the real signal would have to be constantly updated.

With a reflex signal:
- Only change the link from the real signal to the reflex

The system remains intact changing only one reference.

---

## Test environments

By having a reflex signal we can:
- Copy logics  
- Use test signals  
- Simulate scenarios  

✔ All this without affecting production  

---

## Real case

In a hospital:
- All signals use reflex  
- Everything is tested before production  

Result:
- Fewer errors  
- Greater stability
- More robust and correctly performed work

---

## Conclusion

The use, creation and understanding of reflex signals is fundamental to guarantee a robust and maintainable architecture in BMS systems.

![Reflex signals](/public/reflejos.png)

---

## Key rule

> Never connect logic directly to real signals.
> Always use a reflex signal. Always remember the importance of reflex signals in BMS systems.
> Just like in programming, where state variables are used to control the execution flow.

