---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/Forces"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Forces
type: "Atomic Note"
---

## Intro
Structural members of equivalent mass can be made stiffer be careful choice of X-Section and consideration of how the member is loaded.
This means that the structure can be made lighter and cheaper. Other factors include:
 - How the structure is joined together.
 - How other parts might attach to the structure.
 - Aesthetics.
 - Ease of construction.

## Cross Sections
ILU are the main 3 sections.
We can also use tubes that are round, hexagonal, square or even L-Shaped.

## 2nd moment of area
A geometric property of a mass body when looking at the CSA. Denoted by $I$.

| Shape     | Moment of Inertia                            |
| --------- | -------------------------------------------- |
| Rectangle | $I_x = \frac{bh^3}{12}$                      |
| Triangle  | $I_x = \frac{bh^3}{36}$                      |
| Circle    | $I = \frac{\pi r^4}{4} = \frac{\pi D^4}{64}$ |


#### Examples
If we have a square:
$$b = h = 1 \quad \therefore \quad I = \frac{1*1^3}{12} = \frac{1}{12}$$

If we double the width, we double the stiffness:
$$b = 2 \quad h = 1 \quad \therefore \quad I = \frac{2*1^3}{12} = \frac{2}{12} = \frac{1}{6}$$

But if we instead double the height, we get 8 times as much stiffness:
$$b = 1 \quad h = 2 \quad \therefore \quad I = \frac{bh^3}{12} = \frac{1 * 2^3}{12} = \frac{8}{12} = \frac{2}{3}$$

If we move more material away from the neutral axis, then we get more intertia.