---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/ElectronicSystems"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Electronic Systems
type: "Atomic Note"
---

## A vs D

Analogue is a range from 1 to 0.
Digital is just 1 or 0.

Each pin on a microcontroller contains an ADC (Analogue-to-Digital converter)

## ADC
 - Converts input voltage into a number proportional to it.
 - The range of numbers is determined by the number of bits - 8 bits to 256 levels, 10 bits to 1024 levels
 - The supply voltage is usually equal to the full-scale input voltage.
 - Range of ADC outputs may need to be scaled to make full use of output devices.
 - Some microcontrollers can produce a pseudo-analogue signal to control LED brightness, motor speed by using [[Pulse Width Modulation|PWM]].