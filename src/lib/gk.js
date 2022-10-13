import config from "./config";

export class GK {
    #api;
    #cookie;
    #server;
    #locate;

    constructor(api) {
        this.#api = api.endsWith("/") ? api : api + "/";
    }
    async postJSON(endpoint, body = {}, noCache) {
        const res = await fetch(this.#api + endpoint, {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                cookie: this.#cookie,
                server: this.#server,
                locate: this.#locate,
                ...body,
            }),
            cache: noCache ? "no-cache" : undefined,
        });
        if (res.ok) return await res.json();
        throw new Error(res.statusText);
    }
    loginWithCookie(cookie) {
        this.#cookie = cookie;
    }
    setServerType(server) {
        this.#server = server === "os" ? "os" : "cn";
    }
    setServerLocale(locate) {
        this.#locate = locate;
    }
    getDailyNote(uid, noCache = false) {
        return this.postJSON("getDailyNote", { uid, noCache }, noCache);
    }
    getUserInfo(uid, noCache = false) {
        return this.postJSON("getUserInfo", { uid, noCache }, noCache);
    }
    getAllCharacters(uid, noCache = false) {
        return this.postJSON("getAllCharacters", { uid, noCache }, noCache);
    }
    getActivities(uid, noCache = false) {
        return this.postJSON("getActivities", { uid, noCache }, noCache);
    }
    getSpiralAbyss(uid, noCache = false) {
        return this.postJSON("getSpiralAbyss", { uid, noCache }, noCache);
    }
    getCurrentAbyss(uid, noCache = false) {
        return this.postJSON("getCurrentAbyss", { uid, noCache }, noCache);
    }
    getPreviousAbyss(uid, noCache = false) {
        return this.postJSON("getPreviousAbyss", { uid, noCache }, noCache);
    }
}

export function gkMethod(methodName, ...params) {
    const cookie = config.cookie;
    const server = config.server;
    const gk = new GK(server);
    gk.loginWithCookie(cookie);
    if (!(methodName in gk)) throw new Error("Method name not found");
    return gk[methodName](...params);
}
