class NotDataview {

    td_innerHTML(el) {
        const { TypeUtils, Formatter } = customJS;

        if (TypeUtils.is_link(el)) {
            return this.dv_link_innerHTML(el.path, Formatter.get_name_of_link(el.toString()));
        } else if (Array.isArray(el)) {
            let res = "";
            for (let i = 0; i < el.length; i++) {
                if (i > 0) {
                    res += ", ";
                }
                let arr_el = el[i];
                if (arr_el.path != null && arr_el.text != null) {
                    res += this.dv_link_innerHTML(el[i].path, el[i].text);
                } else {
                    res += this.td_innerHTML(arr_el);
                }
            }
            return res;
        } else if (TypeUtils.is_time(el)) {
            return Formatter.format_time(el);
        } else if (TypeUtils.is_md_link(el)) {
            return "<span data-tag-name=\"p\" class=\"el-p\"><img referrerpolicy=\"no-referrer\" src=\"" + Formatter.get_path_of_md_link(el) + "\"></span>";
        } else if (el != null) {
            return "<span data-tag-name=\"p\" class=\"el-p\">" + el + "</span>"
        } else {
            return "<span data-tag-name=\"p\" class=\"el-p\">-</span>"
        }
    }


    /*
    * You create the table, and set the innerHTML to this
    * Table class: "dataview table-view-table"
    */
    table_innerHTML(titles, rows) {
        let result = "<table class=\"dataview table-view-table\"> <thead class=\"table-view-thead\"> <tr class=\"table-view-tr-header\">";
        for (let title of titles) {
            result += "<th class=\"table-view-th\">" + title + "</th>";
        }
        result += "</tr></thead>";
        result += "<tbody class=\"table-view-tbody\">";
        for (let row of rows) {
            result += "<tr>";
            for (let el of row) {
                result += "<td>" + this.td_innerHTML(el) + "</td>";
            }
            result += "</tr>";
        }

        return result + "</tr></tbody></table>"
    }

    dv_link_innerHTML(link, text) {
        return "<span data-tag-name=\"p\" class=\"el-p\"><a aria-label-position=\"top\" aria-label=\"" + link + "\" data-href=\"" + link + "\" href=\"" + link + "\" class=\"internal-link\" target=\"_blank\" rel=\"noopener\">" + text + "</a></span>";
    }

    marked_title_innerHTML(group) {

        let result = "<h4><span data-tag-name=\"p\" class=\"el-p\">";
        if (group.key) {
            result += "Marked";
        } else {
            result += "Not Marked";
        }
        result += "</span></h4>";

        return result;
    }
}