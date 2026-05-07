---
title: "The importance of creating branches in personal projects"
excerpt: "Working alone doesn't mean working without structure. In this
  article I explain why creating branches in personal projects improves
  your discipline, security and professionalism as a developer."
date: "2026-02-21"
author: "Juan Díaz"
tags: ["Git", "Version Control", "Best Practices"]
---

After a long time developing my own projects - from small scripts to more complete applications - I've made mistakes that seemed insignificant, but ended up breaking complete functionalities or generating disorder difficult to maintain.

In that process I understood something important: using Git is not enough.\
You have to use it correctly.

And one of the most underestimated practices, especially when we work alone, is the creation of **branches**.


## "Since I work alone, I don't need branches"

It's very common to think:

> **"If no one else touches the code, I can work directly in `main`"**.

At first it seems practical. Faster. Simpler.\
But as the project grows, that decision starts to backfire.

Always working in `main` causes:
-   Mixing stable code with experimental code.
-   Fear of trying new things.
-   Disorganized commits.
-   Difficulty going back when something breaks.
-   Unprofessional history.

Even if the project is personal, your discipline shouldn't be.

---

## What is really a branch?

A branch is an *independent line of development* that starts from another branch (normally `main`). It allows you to work on a specific functionality without affecting the stable base of the project.

Think of it as a safe space to experiment.

---

## Real benefits of using branches in personal projects

### 1. Security to experiment

You can try a new architecture, refactor a complete module or implement a complex functionality without fear of breaking what already works.

If something goes wrong:

``` bash
git branch -D feature/experiment
```

And that's it. Your main project remains intact.

---

### 2. Better mental organization

Creating a branch implies making a conscious decision:

-   What am I developing?
-   What is the objective?
-   When is it finished?

That clarity improves your way of thinking about code.

---

### 3. Clean and professional history

When you separate by branches, your commits tell a clear story:

-   `feature/login`
-   `fix/email-validation`
-   `refactor/user-service`

This makes your project more understandable even months later.

And if you use it as a portfolio, it conveys professionalism.

---

## How to create and use branches correctly

Suppose you want to add authentication to your project.

### Create a new branch

``` bash
git branch feature/auth
```

### Switch to the branch

``` bash
git checkout feature/auth
```

---

## Modern way (recommended)

Git now offers clearer commands (understandable and easy to remember):

### Create and switch in one step

``` bash
git switch -c feature/auth
```

### Switch to an existing branch

``` bash
git switch feature/auth
```

---

## Recommended workflow

For personal projects, follow this simple flow, which is common in development:

1.  Start from stable `main`.
2.  Create a branch for a functionality.
3.  Work and make small, clear commits.
4.  When ready and tested, merge.

``` bash
git switch main
git merge feature/auth
```

If you were doing experiments or tests and no longer need them:

``` bash
git branch -d feature/auth
```

---

## Simple convention for personal projects

You don't need something complex. This is enough, we must consider that we are doing all this for ourselves, so we don't need to be so strict:

-   `feature/functionality-name`
-   `fix/error-description`
-   `refactor/module`
-   `experiment/idea`

Examples:

``` bash
git switch -c feature/dashboard
git switch -c fix/total-calculation-error
git switch -c refactor/api-client
```

Remember to always keep your project organized, even if you are the only developer.

---

## Something I learned over time

Chaos in personal projects doesn't occur due to lack of technical knowledge, but due to lack of structure.

Branches are not just a technical tool.
**They are a discipline tool.**

They force you to work with intention, with pleasure and with purpose.

---

## Conclusion

Creating branches in personal projects is not exaggeration or unnecessary bureaucracy. It's an investment in clarity, security and professionalism.

Working alone doesn't mean working without standards.

If you want to grow as a developer, treat your personal projects as if they were production projects.

And start with something simple:

**Never develop directly in `main`, unless it's something very simple that doesn't affect the rest of the project.**
