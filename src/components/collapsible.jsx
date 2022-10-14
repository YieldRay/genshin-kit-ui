import { useState } from "react";
import { Collapsible } from "grommet";

export default ({ children, header }) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ background: "#f1ebdb", borderRadius: ".5rem", overflow: "hidden" }}>
            {header}
            <Collapsible open={open}>{children}</Collapsible>
            <div
                style={{ textAlign: "center", background: "#e6dac2", cursor: "pointer" }}
                onClick={() => setOpen(!open)}
            >
                {open ? "隐藏" : "显示"}
            </div>
        </div>
    );
};
