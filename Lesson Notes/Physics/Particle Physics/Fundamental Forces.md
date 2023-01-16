---
tags: ["Physics", "Physics/Particles", "Physics/Particles/FundamentalForces"]
subject: Physics
topic: Particles
subtopic: Fundamental Forces
type: "Atomic Note"
---

## Table
For the Graph shape, repulsion is positive, attraction negative
```dataviewjs
let pages = dv.pages("#Physics/Particles/FundamentalForces").filter(note => note.type == "FForce");
let mapped = pages.map(note => [note.file.link, note["formula"], note["graph"], note["exchange_particles"], note["range"], note["relative_str"], note["acts_on"]]);

dv.table(["Type", "Formula", "Graph", "Exchange particles", "Range", "Relative Strength", "Acts on"], mapped);
```

The above exchange particles (bosons) are **virtual**.

#### Example Forces on Protons
$$F_{EM} = \frac{\left( 1.6*10^{-19} \right)^2}{4\pi * 8.85*10^{-12} * \left( 10^{-15} \right)^2} = 230N$$
$$F_\text{Gravitational} = \frac{6.67*10^{-11} * \left( 1.673*10^{-27} \right)^2}{\left( 10^{-15} \right)^2} = 1.9*10^{-34} N$$
Since we can see that these 2 forces are not equal, there must also be the [[Nuclear Strong Force]] acting.