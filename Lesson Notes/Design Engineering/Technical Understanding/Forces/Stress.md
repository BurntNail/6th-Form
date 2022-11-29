---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/Forces"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Forces
type: "Atomic Note"
---

## Intro

When a direct force or load is applied to the member of a structure, the effect will depend on the cross-sectional area of the member. Stress will cause the material to undergo [[Strain]] (stretching).
$$Stress = \frac{Force}{CSA} \quad \sigma = \frac{F}{A} \quad \quad Pa = \frac{N}{m^2}$$
Make sure to consider the stress at all points, for example the top of a table leg will have less stress than the top of a table leg.



## Worked Example
> The stress in a steel wire supporting a load of $8kN$ should not exceed $200 Nmm^{-2}$. Calculate the minimum diameter of wire required to support the load.

#### Equations to Use/Conversions
$$Load = Force = 8000N \quad \quad \sigma = \frac{F}{A}$$
#### Workings
$$
\begin{align}
\sigma &= \frac{F}{A} \\
A &= \frac{F}{\sigma} \\
&= \frac{8000}{200} \\
&= 40mm^2 \\ \\
A = \pi r^2 &= \frac{\pi d^2}{4} \\
d &= \sqrt{\frac{4A}{\pi}} \\
&= \sqrt{\frac{4*40}{\pi}} \\
&= 7.13mm
\end{align}
$$