---
aliases: ["Quark"]
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

## Notation
 - $q$ is a quark
 - $\overline{q}$ is an antiquark