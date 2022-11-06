import { Link } from "react-router-dom";
import { Header, Button as GButton } from "grommet";
import config from "../lib/config.js";
import alertTextArea from "./alertTextArea.jsx";

function Button(props) {
    return <GButton primary style={{ padding: "2px 4px", margin: "auto 2px", fontSize: "15px" }} {...props}></GButton>;
}

export default () => {
    const changeCookie = () => alertTextArea("修改cookie", config.cookie, (c) => (config.cookie = c));
    const changeServer = () => alertTextArea("修改服务器", config.server, (s) => (config.server = s));

    return (
        <>
            <Header>
                <Link to="/">Genshin Kit Query</Link>
                <div>
                    <Button onClick={changeCookie}>{config.cookie ? "修改coookie" : "请填写cookie"}</Button>
                    <Button onClick={changeServer}>修改服务器</Button>
                </div>
            </Header>
        </>
    );
};
