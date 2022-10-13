import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidUid, isValidCnUid, isValidOsUid } from "../lib/uid";

export default () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState();
    return (
        <div style={{ margin: "auto" }}>
            <input onChange={(e) => setUid(e.target.value)} value={uid} type="number" />
            <button
                onClick={() => {
                    if (isValidUid) navigate(`/UserInfo/${uid}`);
                    else alert("UID 不合法！！！");
                }}
            >
                查询玩家信息
            </button>
        </div>
    );
};
