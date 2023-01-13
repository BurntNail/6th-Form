---
tags: ["DesignEngineering", "DesignEngineering/Health&Safety", "DesignEngineering/HealthSafety/RiskAssesments"]
subject: DesignEngineering
topic: Health & Safety
subtopic: Risk Assesments
type: "Atomic Note"
---

Identify Hazards
Find Controls/Mitigations

Use the [[Severity]] and [[Likelihood]] to get the [[Rating]].

```dataviewjs
let pages = dv.pages("#DesignEngineering/HealthSafety/RiskAssesments").filter(note => note.type == "List");
let mapped = pages.map(note => [note.file.link, note["One"], note["Two"], note["Three"], note["Four"], note["Five"]]);

dv.table(["Type", "1", "2", "3", "4", "5"], mapped);
```