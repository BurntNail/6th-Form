class TypeUtils {
    is_link(object) {
        if (object == undefined || object == null) {
            return false;
        }

        try {
            return object.path != null && object.embed != null && object.type != null;
        } catch {
            return false;
        }
    }

    is_time(object) {
        if (object == undefined || object == null) {
            return false;
        }
        try {
            return object.ts != null && object.loc != null && object.day != null;
        } catch {
            return false;
        }
    }

    is_md_link (string) {
        let md_link_re = /\!\[.*\]\(.+\)/g;
        return md_link_re.test(string);
    }
}