---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/Forces"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Forces
type: "Atomic Note"
---

## Intro
Young's modulus describes the [[Stiffness]] of a material. The higher the modulus, the greater the stiffness. It links [[Stress]] and [[Strain]]. The units are Pascals.
$$YM = \frac{Stress}{Strain} \quad E = \frac{\sigma}{\varepsilon}$$
## Worked Example 1
> A cylindrical test piece of nylon has been sent to your Materials Testing Laboratory. You have been asked to calculate the Young's Modulus of the test piece.
> r = 25mm, F = 200kN, [[Strain]] = $3.1*10^{-4}$

#### Equations to Use/Conversions
$$
\begin{align}
\sigma &= \frac{F}{A} \\
E &= \frac{\sigma}{\varepsilon}
\end{align}
$$
$$
\begin{align}
25 / 1000 = 0.025m
\end{align}
$$
#### Workings
$$
\begin{align}
A &= \pi * r^2 \\
&= \pi * 0.025^2 \\
&= 0.0019634954 m^2 \\ \\
\sigma &= \frac{F}{A} \\
&= \frac{200,000}{0.00196 \ldots} \\
&= 101,759,163.6 Pa \\ \\
E &= \frac{\sigma}{\varepsilon} \\
&= \frac{101.7 \ldots *10^6}{3.1*10^{-4}} \\
&= 3.29*10^{11} Pa
\end{align}
$$
In future, try to keep it in the units given - here $kN$ and $mm$. $3.29*10^{11} Pa = 329 \frac{kN}{mm^2}$

## Worked Example 2
> An Automobile company has sent a sample of steel to your Materials Testing Laboratory. You have been asked to calculate the Young's Modulus of the test piece.
> r = 15mm, F = 150kN, [[Strain]] = $4.1*10^{-4}$

#### Equations
$$
\begin{align}
\sigma &= \frac{F}{A} \\
E &= \frac{\sigma}{\varepsilon}
\end{align}
$$
#### Workings
$$
\begin{align}
A &= \pi * r^2 \\
&= \pi * 15^2 \\
&= 225\pi \ mm^2 \\ \\
\sigma &= \frac{F}{A} \\
&= \frac{150}{225\pi} \\
&= 0.212 \ldots \frac{kN}{mm^2} \\ \\
E &= \frac{\sigma}{\varepsilon} \\
&= \frac{0.212\ldots}{4.1*10^{-4}} \\
&= 517.5 \ldots = 518 \frac{kN}{mm^2}
\end{align}
$$

## Worked Example 3
> A sculpture weighing $10,000N$ rests on a horizontal surface at the top of a $6m$ tall pillar. The pillar's CSA is $0.20m^3$ and it is made of granite, which has a mass density of $2700\frac{kg}{m^3}$ and a YM of $4.5*10^{10}Pa$. Find the compressive strength of the top $3.0m$ of the pillar.

#### Equations
$$
\begin{align}
\varepsilon &= \frac{\Delta L}{L} \\
\sigma &= \frac{F}{A} \\
E &= \frac{\sigma}{\varepsilon} \\ \\
\rho &= \frac{M}{V} \\
W &= mg
\end{align}
$$
#### Workings
$$
\begin{align}
\rho &= \frac{M}{V} \\
M &= V\rho \\
&= CSA*h*\rho \\
&= 0.2 * 3 * 2700 \\
&= 1620kg \\ \\
W &= mg \\
&= 1620 * 9.81 \\
&= 15,892.2N \\
F &= \sum W \\
&= 15,892.2 + 10,000 \\
&= 25,892.2N \\ \\
\sigma &= \frac{F}{A} \\
&= \frac{25,892.2}{0.2} \\
&= 129,461 Pa \\ \\
E &= \frac{\sigma}{\varepsilon} \\
\varepsilon &= \frac{\sigma}{E} \\
&= 129,461 / 4.5*10^{10} \\
&= 2.88*10^{-7}
\end{align}
$$