class Formatter {

    pad(number, targetLength) {
        return number.toString().padStart(targetLength, '0');
    }

    format_time(time) {
        return this.pad(time.hour, 2) + ":" + this.pad(time.minute, 2) + " - " + time.monthShort + " " + time.day + ", " + time.year;
    }

    deal_with_qp_ms_links_array(links) {
        const { FileUtils } = customJS;

        let n_links = links.filter(link => FileUtils.is_pdf(link.path)).sort(link => {
            if (FileUtils.is_qp(link.path)) {
                return 1;
            } else if (FileUtils.is_ms(link.path)) {
                return 0;
            } else {
                return -1;
            }
        }, 'desc');


        let final_result = new Array();
        let other_count = 1;

        for (let i = 0; i < n_links.length; i++) {
            let path = n_links[i].path;

            let result = { "path": path, "text": "" };

            if (FileUtils.is_qp(path)) {
                result.text = "QP";
            } else if (FileUtils.is_ms(path)) {
                result.text = "MS";
            } else if (FileUtils.is_in(path)) {
                result.text = "IN";
            } else if (FileUtils.is_audio(path)) {
                result.text += "MP3"
            } else {
                result.text = "Other " + other_count;
                other_count++;
            }

            final_result.push(result);
        }

        return final_result;
    };

    deal_with_qp_ms_links(links) {
        let n_links = this.deal_with_qp_ms_links_array(links);
        let result_str = "";

        for (let i = 0; i < n_links.length; i++) {

            result_str += "[[" + n_links[i].path + "|" + n_links[i].text + "]]";

            if (i != n_links.length - 1) {
                result_str += ", ";
            }
        }

        return result_str;
    };

    get_name_of_link(link) {
        return link.substring(link.indexOf("|") + 1, link.length - 2);
    };
    get_path_of_md_link (link) {
        return link.substring(link.indexOf(")[") + 5, link.length - 1);
    }

    deal_with_q_pic_links(links) {
        let new_links = links.filter(link => is_q_pic(link.path));

        let result_str = "";

        for (let i = 0; i < new_links.length; i++) {
            result_str += new_links[i];

            if (i != new_links.length - 1) {
                result_str += ", ";
            }
        }

        return result_str;
    }


    marked_title(group, dv) {
        if (group.key) {
            dv.header(4, "Marked");
        } else {
            dv.header(4, "Not Marked");
        }
    }

    limit_plus_dots (txt, num) {
        let { length: len } = txt;
        if (num < len){
            return txt.slice(0, num) + '...';
        } else {
            return txt;
        }
    }
}