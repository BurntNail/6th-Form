---
tags: ["DesignEngineering", "DesignEngineering/Materials", "DesignEngineering/Materials/Properties"]
subject: DesignEngineering
topic: Materials
subtopic: Properties
type: "Dataviewer"
---

```dataviewjs
let pages = dv.pages("#DesignEngineering/Materials/Properties").filter(page => page.type == "Property Words").map(page => [page.file.link, page["definition"], page["extras"], page["example"]]).sort(page => page[0]);
dv.table(["Link", "Definition", "Equations", "Example"], pages);
```