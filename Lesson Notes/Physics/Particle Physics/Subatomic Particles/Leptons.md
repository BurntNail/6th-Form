---
tags: ["Physics", "Physics/Particles", "Physics/Particles/Subatomics"]
subject: Physics
topic: Particles
subtopic: Subatomics
type: "Atomic Note"
---

The other fundamental particles are leptons. They all have very small mass and do **not** feel the Strong Force.

| Name              | Symbol   | Charge | Lepton Number |
| ----------------- | -------- | ------ | ------------- |
| Electron          | $e^-$    | -1     | 1             |
| Muon              | $\mu^-$  | -1     | 1             |
| Tauon             | $\tau^-$ | -1     | 1             |
| Electron Neutrino | $\nu_e$  | 0      | -1            |
| Muon Neutrino     | $\nu_\mu$  | 0      | -1            |
| Tauon Neutrino    | $\nu_\tau$ | 0      | -1            |

```dataviewjs
let pages = dv.pages("#Physics/Particles/Subatomics").filter(note => note.type == "Lepton");
let mapped = pages.map(note => [note.file.link, note["symbol"], note["charge"], note["lepton_number"]]);

dv.table(["Type", "Symbol", "Charge", "Lepton Number"], mapped);
```