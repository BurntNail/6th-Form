---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/ElectronicSystems", "DesignEngineering/TechnicalUnderstanding/ElectronicSystems/Components"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Electronic Systems
type: "Atomic Note"
---


```dataviewjs
let pages = dv.pages("#DesignEngineering/TechnicalUnderstanding/ElectronicSystems/Components").filter(note => note.type == "Motor");
dv.table(["Link", "Type of Motion", "Method of Control", "Examples"], pages.map(note => [note.file.link, note["Motion"], note["Control"], note["Examples"]]))
```