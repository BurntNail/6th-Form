---
tags: ["DesignEngineering", "DesignEngineering/LearningFromExisting"]
subject: DesignEngineering
topic: LearningFromExisting
type: "Atomic Note"
---

```dataviewjs
let pages = dv.pages("#DesignEngineering/LearningFromExisting/DesignMovements").filter(note => note.type == "DesignMovement");
dv.table(["Link", "Time Period", "Examples", "Style"], pages.map(note => [note.file.link, note["TimePeriod"], note["Examples"], note["Style"]]));
```
