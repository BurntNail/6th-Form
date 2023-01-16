---
tags: ["Physics", "Physics/Particles", "Physics/Particles/Subatomics"]
subject: Physics
topic: Particles
subtopic: Subatomics
type: "Atomic Note"
---

The other fundamental particles are leptons. They all have very small mass and do **not** feel the Strong Force.

```dataviewjs
let pages = dv.pages("#Physics/Particles/Subatomics").filter(note => note.type == "Lepton");
let mapped = pages.map(note => [note.file.link, note["symbol"], note["charge"], note["lepton_number"]]);

dv.table(["Type", "Symbol", "Charge", "Lepton Number"], mapped);
```