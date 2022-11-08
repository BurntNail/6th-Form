---
alias: "EMF"
tags: ["Physics", "Physics/Electricity"]
subject: Physics
topic: Electricity
type: "Atomic Note"
---

## Overview

emf = $\mathcal{E}$ = electromotive force, and is defined as the potential difference across the terminals of a cell when no current is flowing.

Voltmeters have very high (infinite) resistance, ie. no current. However, due to the internal resistance ($r$) of the cell, current still flows. We can then use that same voltmeter to find the emf.

$$\therefore \quad \mathcal{E} = V_{Lost\ in\ circuit} + V_{Lost\ in\ cell} = IR + Ir = I(R+r)$$

## How to find $r$

 - Make a circuit with a cell, a variable resistor, and a voltmeter in parallel, with an ammeter in the variable resistor bit.
 - As you change the resistance on the variable resistor, more/less pd will be lost over $r$.
 - Plot $I$ on the x-axis vs $V$ on the y-axis, and then extrapolate. The y intercept is the EMF. The gradient then represents $-r$.