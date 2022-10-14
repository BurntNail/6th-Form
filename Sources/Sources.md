#Admin/bib #Admin 

See [[sources.bib]]

```dataviewjs
const {Formatter} = customJS;

let pages = dv.pages("#bib").filter(page => page.type == "Source").map(page => [page.file.link, page["title"], page["authors"], Formatter.limit_plus_dots(page["abstract"], 66), "[Open In Zotero](" + page["zotero_url"] + ")"]);
dv.table(["Link", "Title", "Authors", "Abstract", "Zotero Link"], pages);
```