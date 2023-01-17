---
alias: "PWM"
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/ElectronicSystems", "DesignEngineering/TechnicalUnderstanding/ElectronicSystems/Components"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Electronic Systems
type: "Atomic Note"
---

 - PWM is a technique used to give an analogue property to a digital device.
 - An example of this might be an LED as an output device. When it is operating normally, it will be in either a 'low' or 'high' state (ie ON/OFF). However, it is possible to control the brightness of the LED to make it appear that it can be dimmed or brightened, and that it has analogue properties. The same principle can also be applied to other devices such as motors (for controlling speed, and ultimately power and torque) for audio amplifiers.
 - The graph below shows the output from the microcontroller which goes from High to Low. The mark time compared to the space time is known as the 'mark-space ratio'.
 - If the MSR is high, the output device will operate at a high % of capacity. This is known as the 'Duty Cycle'.

![[mark-space ratio.png|500]]