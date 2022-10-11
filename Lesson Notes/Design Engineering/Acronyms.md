---
tags: ["DesignEngineering"]
subject: DesignEngineering
type: "Dataviewer"
---

```dataviewjs
let pages = dv.pages("#DesignEngineering/TechnicalUnderstanding/TypesOfMotion").filter(page => page.type == "Atomic Note").map(page => [page.file.link, page["Example"], page["Definition"]]);
dv.table(["Link", "Example", "Definition"], pages);
```