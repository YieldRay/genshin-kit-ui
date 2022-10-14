import { useState } from "react";

export default ({ show, hide }) => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ background: "#f1ebdb", borderRadius: ".5rem", overflow: "hidden" }}>
            <div>{show}</div>
            <div
                style={{
                    maxHeight: open ? 300 : 0,
                    transformOrigin: "0 0",
                    transition: "all .3s linear",
                    overflow: "hidden",
                }}
            >
                {hide}
            </div>
            <div
                style={{ textAlign: "center", background: "#e6dac2", cursor: "pointer" }}
                onClick={() => setOpen(!open)}
            >
                {open ? "隐藏" : "显示"}
            </div>
        </div>
    );
};
