class FileUtils {
    is_qp(path) {
        return path.includes("qp") || path.includes("que") || path.includes("QP") || path.includes("Questionpaper");
    }
    is_ms(path) {
        //cannot include 'ms' as most PPs are in the Exams directory, which contains ms.
        return path.includes("msc") || path.includes("rms") || path.includes("MS") || path.includes("Markscheme") || path.includes("mark scheme") || path.includes("mks");
    }
    is_in(path) {
        return path.includes("in") || path.includes("Insert");
    }
    is_attachment(path) {
        return path.includes(".png") || path.includes(".jpg") || path.includes(".jpeg");
    }
    is_pdf(path) {
        return !(this.is_attachment(path) || path.includes(".bat") || path.includes(".exe")) && (path.includes(".pdf") || this.is_audio(path));
    }
    is_audio(path) {
        return path.includes("mp3");
    }
}