import { useState } from "react";

export default ({ show, hide }) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ background: "#f1ebdb", borderRadius: ".5rem", overflow: "hidden" }}>
            <div>{show}</div>
            <div
                style={{
                    transform: `scaleY(${open ? "1" : "0"})`,
                    height: open ? "auto" : "0",
                    transformOrigin: "0 0",
                    transition: "all .3s",
                }}
            >
                {hide}
            </div>
            <div style={{ textAlign: "center", background: "#e6dac2" }} onClick={() => setOpen(!open)}>
                {open ? "隐藏" : "显示"}
            </div>
        </div>
    );
};
