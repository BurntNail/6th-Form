---
aliases: ["Quark", "Hadron", "Hadrons"]
tags: ["Physics", "Physics/Particles", "Physics/Particles/Subatomics"]
subject: Physics
topic: Particles
subtopic: Subatomics
type: "Atomic Note"
---

## Table
```dataviewjs
let pages = dv.pages("#Physics/Particles/Subatomics").filter(note => note.type == "quark");
let mapped = pages.map(note => [note.file.link, note["symbol"], note["charge"], note["baryon_number"], note["strangeness"]]);

dv.table(["Type", "Symbol", "Charge", "Baryon Number", "Strangeness"], mapped);
```

## Hadrons
Quarks always come in pairs or threes. You will never be able to have a single quark. If you try to separate them, you would use enough energy to create more of them. Anything made out of quarks is a **hadron**. 
 - Particles with 3 quarks are **baryons**, for example protons.
 - Particles with 2 quarks (a quark-antiquark pair) are **meson**.

## Notation
 - $q$ is a quark
 - $\overline{q}$ is an antiquark

## Hadrons

You need to memorise Protons, Neutrons and that Kaons are Strange.

| Hadron        | Symbol           | Quarks          |
| ------------- | ---------------- | --------------- |
| Proton        | $p$              | $uud$           |
| Neutron       | $n$              | $udd$           |
| Pion Plus     | $\pi^+$          | $u\overline{d}$ |
| Pion Minus    | $\pi^-$          | $\overline{u}d$ |
| Pion Zero     | $\pi^0$          | $u\overline{u}$ |
| Pion Zero     | $\pi^0$          | $d\overline{d}$ |
| Kaon Plus     | $K^+$            | $u\overline{s}$ |
| Kaon Minus    | $K^-$            | $\overline{u}s$ |
| Kaon Zero     | $K^0$            | $d\overline{s}$            |
| AntiKaon Zero | $\overline{K}^0$ | $\overline{d}s$ |

#### Extras
| Thing | Symbol | Quarks |
| ----- | ------ | ------ |
|       |        |        |