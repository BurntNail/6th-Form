---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/Gears"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Gears
type: "Atomic Note"
---

**NB: For all [[Pulleys & Belts]], etc. we just replace teeth with diameter**

## Gear Ratio
$$Gear\ Ratio = \frac{Driven\ Teeth}{Driver\ Teeth}$$

For example, if we have a gear with 24 teeth, driving a gear with 12 teeth, we get
$$=\frac{12}{24}=\frac{1}{2} = 0.5:1 = 1:2$$
That is, for every time the driver rotates, the driven will rotate twice.

## Velocity Ratio
$$Velocity\ Ratio = \frac{1}{Gear\ Ratio} = \frac{Driver\ Teeth}{Driven\ Teeth}$$


## Example 1
A moves at 30RPM
A meshes with B
B is on the same axle as C
C meshes with D
Find D's speed
| Gear | Teeth |
| ---- | ----- |
| A    | 120   |
| B    | 40    |
| C    | 80    |
| D    | 20    |

$$B/A = \frac{40}{120} = \frac{1}{3} \quad D/C = \frac{20}{80} = \frac{1}{4} \quad ABCD=\frac{1}{3}*\frac{1}4 = \frac{1}{12} \quad \quad RPM = 30 * \frac{1}{\frac{1}{12}} = 30 * 12 = 360$$

## Example 2
A moves at 100RPM
A meshes with B
B is on the same axle as C
C meshes with D
Find D's speed
| Gear | Teeth |
| ---- | ----- |
| A    | 100   |
| B    | 25    |
| C    | 50    |
| D    | 150      |

$$AB = \frac{25}{100} = \frac{1}{4} \quad CD = \frac{150}{50} = 3 \quad ABCD = \frac{1}{4} * 3 = \frac{3}{4} \quad \quad RPM = 100 * \frac{1}{\frac{3}{4}} = 133.\overline{3}$$