import { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Button, TextArea } from "grommet";
import config from "../lib/config.js";
import alert from "./alert.jsx";
export default () => {
    const [cookie, setCookie] = useState(config.cookie);
    const [server, setServer] = useState(config.server);

    const changeCookie = () => {
        alert(
            <TextArea
                style={{ minWidth: "80vw", minHeight: "40vh" }}
                value={cookie}
                onChange={(e) => setCookie(e.target.value)}
            ></TextArea>,
            "修改cookie"
        );
    };
    const changeServer = () => {
        alert(
            <TextArea
                style={{ minWidth: "80vw" }}
                value={server}
                onChange={(e) => setServer(e.target.value)}
            ></TextArea>,
            "修改服务器"
        );
    };

    return (
        <>
            <Header>
                <Link to="/">Genshin Kit Query</Link>
                <div>
                    <Button primary onClick={changeCookie}>
                        {cookie ? "修改coookie" : "请填写cookie"}
                    </Button>
                    <Button primary onClick={changeServer}>
                        修改服务器
                    </Button>
                </div>
            </Header>
        </>
    );
};
