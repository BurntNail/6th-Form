---
tags: "Admin"
---

# Past Papers
```dataviewjs
const { Formatter } = customJS;

for (let group of dv.pages('#Revision/PastPaper and #Revision').groupBy(paper => paper.marked)) {
	Formatter.marked_title(group, dv);

	let rows = group.rows
			.sort(paper => paper.timeReleased)
			.sort(paper => paper.subject)
			.map(paper => [paper.file.link, paper.subject, paper.timeReleased, Formatter.deal_with_qp_ms_links(paper.file.outlinks), paper.file.ctime]);

	dv.table(["Link", "Subject", "Time Released", "Attached Links", "Created Time"], rows);
}
```

# Topic Qs
```dataviewjs
const { Formatter } = customJS;


for (let group of dv.pages('#Revision and !#PastPaper and #Revision/TopicQuestions').groupBy(qs => qs.marked)) {
	Formatter.marked_title(group, dv);

	let rows = group.rows
				.sort(qs => qs.topic, 'desc')
				.sort(qs => qs.subject, 'desc')
				.map(qs => [qs.file.link, qs.subject, qs.topic, qs.file.ctime]);

	dv.table(["Link", "Subject", "Topic", "Created Time"], rows);
}
```

```dataviewjs
const { Formatter } = customJS;

dv.header(1, "Revision Notes");
dv.table(["Link", "Subject", "Theme"], dv.pages("#Revision/RevisionNotes and #Revision").map(notes => [notes.file.link, notes.subject, notes.topic]));
```

# Images

```dataviewjs
const { FileUtils, Formatter, NotDataview } = customJS;

let attachment_paths = new Array();
const GITLAB_PATH = "https://raw.githubusercontent.com/BurntNail/6th-Form/main/";

for (let page of dv.pages('"GCSEs"')) {
	for (let link of page.file.outlinks.filter(link => FileUtils.is_attachment(link.path))) {
		let attach = link;
		if (!attachment_paths.contains(attach)) {
			attachment_paths.push(attach);
		}
	}
}

//Example Link
//https://raw.githubusercontent.com/BurntNail/6th-Form/main/GCSE%20Stuff/Past%20Papers/Chem/Jan%2018.md

//need to keep mapping step in as not that bad for computational complexity + for future
attachment_paths = attachment_paths.map(arr => {
	let link = arr.path;
	let match_res = link.lastIndexOf("/");
	let end = link.substring(match_res + 1, link.length);

	let space_res = end.lastIndexOf(" ");
	let space_end = end.substring(space_res + 1, end.length);
	return [end, arr.path, space_end];
}).sort((arr1, arr2) => {
	let a = arr1[2];
	let b = arr2[2];
	
	if (a > b) {return 1; }
	else if (a < b) {return -1; }
	else {return 0; }
}).map(arr => {
	let no_spaces = arr[1].replace(/ /g, "%20");
	let embed = "![](" + GITLAB_PATH + no_spaces + ")";	
	return [arr[0], arr[2], embed];
});

let container = this.container.createEl("div", {cls: "cards"});

container.innerHTML = NotDataview.table_innerHTML(["Name", "Question ID", "Web Image"], attachment_paths);
```