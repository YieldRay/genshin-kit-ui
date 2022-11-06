import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Layer, Box, TextArea } from "grommet";

const id = "alert-wrapper-textarea";
let el = document.querySelector("#" + id);
if (!el) {
    el = document.createElement("div");
    el.id = id;
    document.body.appendChild(el);
}

let root = ReactDOM.createRoot(el);

export default (title, initValue, onUpdateValue) => {
    function Alert() {
        const [show, setShow] = useState(true);
        const [value, setValue] = useState(initValue);
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
                        <div
                            style={{ cursor: "pointer", fontSize: "50%", fontWeight: 900 }}
                            onClick={() => setShow(false)}
                        >
                            ╳
                        </div>
                    </div>
                    <Box pad="small">
                        <TextArea
                            style={{ minWidth: "80vw", minHeight: "40vh" }}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                onUpdateValue(e.target.value);
                            }}
                        ></TextArea>
                    </Box>
                </Layer>
            );
    }

    root.unmount();
    root = ReactDOM.createRoot(el);
    root.render(<Alert></Alert>);
};
