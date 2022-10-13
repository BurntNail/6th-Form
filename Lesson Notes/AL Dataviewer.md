#Admin/Dataviewer 

```dataviewjs
const { Formatter } = customJS;
for (let group of dv.pages('"Lesson Notes"').groupBy(note => note.subject == "Physics")) {
	if (group.key) {
		dv.header(2, "Physics");
	} else {
		dv.header(2, "Design Engineering");
	}

	let topic_grouped = {};
	for (let page of group.rows.values) {
		let true_topic = page.topic != undefined ? page.topic : "General";
		
		if (topic_grouped[true_topic] == null) {
			topic_grouped[true_topic] = new Array();
		}
		
		topic_grouped[true_topic].push(page);
	}

	for (let [topic, notes] of Object.entries(topic_grouped)) {
		dv.header(4, "Topic: " + topic);

		let rows = notes
			.sort(note => note.type)
			.sort(note => note.subtopic)
			.map(note => [note.file.link, note.subtopic, note.type]);
			
		dv.table(["Link", "Subtopic", "Type"], rows);
	}
}
```