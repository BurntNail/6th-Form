---
tags: ["DesignEngineering", "DesignEngineering/TechnicalUnderstanding", "DesignEngineering/TechnicalUnderstanding/TypesOfMotion"]
subject: DesignEngineering
topic: Technical Understanding
subtopic: Types of Motion
type: "MOC"
---

```dataviewjs
let pages = dv.pages("#DesignEngineering/TechnicalUnderstanding/TypesOfMotion").filter(page => page.type == "Atomic Note").map(page => [page.file.link, page["Example"], page["Definition"]]);
dv.table(["Link", "Example", "Definition"], pages);
```