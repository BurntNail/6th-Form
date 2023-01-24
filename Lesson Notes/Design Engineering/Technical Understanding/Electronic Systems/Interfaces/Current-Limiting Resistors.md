---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/ElectronicSystems", "DesignEngineering/TechnicalUnderstanding/ElectronicSystems/Components"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Electronic Systems
type: "Atomic Note"
---

 - Consider Ohm's Law - $V = IR$.
-  For situations where the supply voltage is greater than the voltage required by the component, a resistor is used in series to ensure that the component is not overloaded, causing damage or overheating.
- LEDs are sensitive to excess voltage, and will burn out if overloaded.
- However, they also require a minimum voltage to operate and will not illuminate below a certain value.

$$R = \frac{\left( V_\text{Supply} - V_\text{LED} \right)}{I}$$