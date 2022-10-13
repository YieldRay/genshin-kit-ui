export default {
    get cookie() {
        return localStorage.getItem("cookie");
    },
    set cookie(c) {
        localStorage.setItem("cookie", c);
    },
    get server() {
        return localStorage.getItem("server") || "https://cors-fetch.deno.dev/https://untitled-32515zs0x1ke.runkit.sh/";
    },
    set server(s) {
        localStorage.setItem(s);
    },
};
