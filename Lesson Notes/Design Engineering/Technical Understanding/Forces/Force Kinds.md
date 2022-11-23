---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/Forces"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Forces
type: "Atomic Note"
---

## Table

[[Bending]], [[Dynamic]], [[Shear]], [[Torsion]], [[Static]], [[Compression]], [[Tension]]

```dataviewjs
let pages = dv.pages("#DesignEngineering/TechnicalUnderstanding/Forces").filter(note => note.type == "Force");
dv.table(["Link", "Definition", "Example", "Opposite"], pages.map(note => [note.file.link, note.definition, note.example, note.opposite]))
```

## [[Tension]]/[[Compression]]
 - A tie is a structural member which resists [[Tension]], and fails by snapping.
 - A strut is a structural member which resists [[Compression]], and fails by buckling.

## [[Torsion]]
The amount the member will twist from [[Torsion]] by can be reduced by increasing Rigidity by:
 - Reducing member length
 - Changing Cross-Sectional Shape to something in [[Increasing Rigidity#Cross Sections]]
 - Using a [[Stiffness|Stiffer]] material.
 - Or anything in [[Increasing Rigidity]]


## Photos
#### [[Compression]] / [[Static]]
Cat putting a static compression force onto a rock. The rock is under compression.
![[compression.jpg|400]]

#### [[Tension]]/[[Dynamic]]
Cat putting a dynamic load, tensioning the string. The string is under tension.
![[tension.jpg|400]]

#### [[Bending]]
Person bending a ruler. Ruler under bending force.
![[bending.jpg|400]]

#### [[Shear]]
Scissors cutting paper. Paper under shear force.
![[shear.jpg|400]]

#### [[Torsion]]
Person twisting sponge. Sponge under torsion force.
![[torsion.jpg|400]]