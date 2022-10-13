import { useState } from "react";
import { Link } from "react-router-dom";
import config from "../lib/config.js";
export default () => {
    const [cookie, setCookie] = useState(config.cookie);

    const changeCookie = () => {
        const input = prompt();
        if (input) config.cookie = input;
    };
    const changeServer = () => {
        const input = prompt();
        if (input) config.server = input;
    };

    return (
        <header>
            <Link to="/">Genshin Kit Query</Link>
            <button onClick={changeCookie}> {cookie ? "修改coookie" : "点击填写cookie"}</button>
            <button onClick={changeServer}> 修改服务器</button>
        </header>
    );
};
