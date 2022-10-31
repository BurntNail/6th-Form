---
tags: ["Physics", "Physics/Electricity"]
subject: Physics
topic: Electricity
type: "Atomic Note"
---

## Equations

$$P=IV \quad \quad P=I^2R \quad \quad P=\frac{V^2}{R} \quad \quad E=Pt \quad \quad E=IVt$$

| Symbol | Meaning    |
| ------ | ---------- |
| $P$    | Power      |
| $I$    | Current    |
| $R$    | [[Resistance]] |
| $V$    | Voltage    |
| $E$    | Energy     |
| $t$    | Time           |

As a general rule, energy is lost through current as it is the current that causes heating effects, so use $P=I^2R$ when trying to calculate power lost in a transmission cable/wire and ensure $R$ is the resistance of just the wire.

## Example
> A power of $100kW$ at a p.d. of $10 kV$ is transmitted to a load resistor through cables of total resistance $5\Omega$ - $50W, 0.5kW, 100kW, 20MW$

$$I = \frac{P}{V} = \frac{100,000}{10,000} = 10A \quad \quad P=I^2R = 10^2 * 5 = 500W$$
We cannot use $P=\frac{V^2}{R}$ or $P=I^2R$ because we need to account for the resistance of both the load resistor and the cables.