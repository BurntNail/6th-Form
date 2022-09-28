---
tags: ["Physics", "Physics/Skills", "Physics/Skills/Graphs"]
subject: DesignEngineering
topic: Skills
subtopic: Graphs
type: "Atomic Note"
---

# Uncertainty in Gradient

^b0b152

Calculate the percentage difference between the gradient of the best and worst lines.

## Line of Best Fit:
$x_1 = 1.7, y_1 = 0.41$
$x_2 = 1.975, y_2 = 0.85$
$m = \frac{0.85 - 0.41}{1.975-1.7} = 1.6$

## [[Line of Worst Acceptable Fit]]:
$x_1 = 1.7, y_1 = 0.39$
$x_2 = 1.975, y_2 = 0.86$
$m = \frac{0.86 - 0.39}{1.975-1.7} = 1.7 \ldots$
$\%m = \frac{|m_w - m_b|}{m_b} = \frac{|1.7 - 1.6|}{1.6} = \frac{0.1}{1.6} = 6.3\%$

# Uncertainty in Y intercept
Exactly the same as ^, just find the y-intercepts.

## Line of best fit:
$x_1 = 1.7, y_1 = 0.41$
$x_2 = 1.975, y_2 = 0.85$
$c = 0.41 - (1.6 * 1.7) = -2.3$
## [[Line of Worst Acceptable Fit]]:
$x_1 = 1.7, y_1 = 0.39$
$x_2 = 1.975, y_2 = 0.86$
$c = 0.39 - (1.709 * 1.7) = -2.5$
$\%c = \frac{|c_w - c_b|}{|c_b|} = \frac{|-2.5 - -2.3|}{|-2.3|} = \frac{0.2}{2.3} = 8.7\%$