---
alias: "IP"
tags: ["DesignEngineering", "DesignEngineering/WiderIssues", "DesignEngineering/WiderIssues/Distribution"]
subject: DesignEngineering
topic: Wider Issues
subtopic: Distribution
type: "Atomic Note"
---

```dataviewjs
let pages = dv.pages("#DesignEngineering/WiderIssues/Distribution").filter(note => note.type == "IP");
dv.table(["Link", "Protection", "Length", "Example"], pages.map(note => [note.file.link, note["protects"], note["length"], note["example"]]));
```