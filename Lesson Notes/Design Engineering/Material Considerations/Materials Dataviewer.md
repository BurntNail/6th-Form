---
tags: ["DesignEngineering", "DesignEngineering/Materials", "Admin/Dataviewer"]
subject: DesignEngineering
topic: Materials
type: "dataviewer"
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

https://quizlet.com/_c1ylqz?x=1qqt&i=gp7bg


```dataviewjs
let pages = dv.pages("#DesignEngineering/Materials/Plastics/Materials").filter(note => note.type != "MOC");
dv.table(["Link", "Abbr", "Safe Working Temperature"], pages.map(note => [note.file.link, note["Abbreviation"], note["Safe Working Temperature"]]));
```

# Textiles

https://quizlet.com/_c20mbx?x=1jqt&i=gp7bg

```dataviewjs
let pages = dv.pages("#DesignEngineering/Materials/Textiles").filter(note => note.type != "MOC").map(note => note.file.link);
dv.list(pages);
```

# Modern/Smart Materials

https://quizlet.com/_c20sdz?x=1jqt&i=gp7bg
```dataviewjs
let pages = dv.pages("#DesignEngineering/Materials/SmartMaterials or #DesignEngineering/Materials/ModernMaterials").filter(note => note.type != "MOC").filter(note => note.type != "MOC").map(note => note.file.link);
dv.list(pages);
```

# Property Words

https://quizlet.com/_c2dl4k?x=1qqt&i=gp7bg
```dataviewjs
dv.list(dv.pages("#DesignEngineering/Materials/Properties/PropertyWords").map(page => page.file.link));
```