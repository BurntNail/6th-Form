---
tags: ["DesignEngineering", "DesignEngineering/ScalesOrganisation"]
subject: DesignEngineering
topic: Scales & Organisation
type: "Atomic Note"
---

The choice of production method used to produce a product or system depends on the market demand

```dataviewjs
let pages = dv.pages("#DesignEngineering/ScalesOrganisation").filter(page => page.type == "Scaleofmanufacture").map(page => [page.file.link, page["key_features"], page["advantages"], page["disadvantages"]]);
dv.table(["Link", "Key Features", "Advantages", "Disadvantages"], pages);
```