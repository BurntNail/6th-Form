---
tags: ["DesignEngineering", "DesignEngineering/Materials", "Admin"]
subject: DesignEngineering
topic: Materials
subtopic: Metals
type: "Admin/dataviewer"
---

# Metals

https://quizlet.com/_c1sure?x=1qqt&i=gp7bg

```dataviewjs
function map_f (note) {
	let ols = note.file.outlinks;
	let outlinks_end = "";

	for (let i = 0; i < ols.length; i++) {
		let path = ols[i].path;
		let tags = dv.page(path).tags;

		let works = false;
		for (let i = 0; i < tags.length; i++) {
			let tag = tags[i];
			console.log({tag});
			if (tag.contains("DesignEngineering/Materials/Properties/PropertyWords")) {
				works = true;
			}
		}

		if (works) {
			outlinks_end += ols[i] + ", ";
		}
	}
	

	return [note.file.link, outlinks_end];
}

let pages = dv.pages("#DesignEngineering/Materials/Metals/Elements or #DesignEngineering/Materials/Metals/Materials").filter(note => note.type != "MOC").map(map_f);

dv.table(["Link", "Properties"], pages);
```

# Plastics


```dataviewjs
let pages = dv.pages("#DesignEngineering/Materials/Plastics/Materials").filter(note => note.type != "MOC");
dv.table(["Link", "Abbr", "Safe Working Temperature"], pages.map(note => [note.file.link, note["Abbreviation"], note["Safe Working Temperature"]]));
```