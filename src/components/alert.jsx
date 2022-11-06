import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Layer, Box } from "grommet";

const id = "alert-wrapper";
let el = document.querySelector("#" + id);
if (!el) {
    el = document.createElement("div");
    el.id = id;
    document.body.appendChild(el);
}

let root = ReactDOM.createRoot(el);

export default (children, title) => {
    root.unmount();
    root = ReactDOM.createRoot(el);
    root.render(<Alert title={title}>{children}</Alert>);
};

function Alert({ children, title }) {
    const [show, setShow] = useState(true);
    if (show)
        return (
            <Layer style={{ minWidth: 320 }} onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: ".5rem .5rem .25rem",
                    }}
                >
                    <strong>{title || location.host}</strong>
                    <div style={{ cursor: "pointer", fontSize: "50%", fontWeight: 900 }} onClick={() => setShow(false)}>
                        ╳
                    </div>
                </div>
                <Box pad="small">{children}</Box>
            </Layer>
        );
}
