---
tags: ["Physics", "Physics/Electricity", "Physics/Electricity/Skills", "Physics/Electricity/Skills/Uncertainty"]
subject: DesignEngineering
topic: Skills
subtopic: Uncertainty
type: "Example"
---

| Height (±0.1cm) | Width (±0.1cm) | Depth (±0.1cm) | Mass(±1g) |
| --------------- | -------------- | -------------- | --------- |
| 8.0             | 4.9            | 4.9            | 540       |

# Finding [[Relative Uncertainty]] for ^:
- Height = $0.1 / 80 = 1.25\%$
- Width = $0.1/4.9 = 2.04\%$
- Depth = $0.1 / 4.9 = 2.04\%$
- Mass = $1 / 540 = 0.185\%$
Volume = $8.0 * 4.9 * 4.9 = 192.08cm^3$
Density = $M / V = 540 / 192.08 = 2.81gcm^{-3}$

# Finding [[Relative Uncertainty]] for ^
- Volume = $1.25 + 2.04 + 2.04 = 5.33\%$
- Density = $5.33 + 0.185 = 5.52\%$
[[Absolute Uncertainty]] for Density = $5.52\% * 2.81 = 0.155g$

# Final Uncertainty Format
- Use [[Absolute Uncertainty]]
- One significant figure for the uncertainty figure.
- Round the base value to the same number of decimal places as the uncertainty figure.
Density = $2.8 ± 0.2gcm^{-3}$