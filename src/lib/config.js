export default {
    get cookie() {
        return localStorage.getItem("cookie") || "";
    },
    set cookie(c) {
        localStorage.setItem("cookie", c);
    },
    get server() {
        return localStorage.getItem("server") || "/api/?q=";
    },
    set server(s) {
        localStorage.setItem("server", s);
    },
};
