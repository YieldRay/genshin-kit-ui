import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gkMethod } from "../lib/gk";
import Error from "../components/error";
import Loading from "../components/loading";
import { JsonViewer } from "@textea/json-viewer";

export default () => {
    const { uid } = useParams();
    const [data, setData] = useState(null);
    const [err, setErr] = useState();
    useEffect(() => {
        if (data) return;
        gkMethod("getActivities", uid)
            .then((result) => setData(result))
            .catch((err) => setErr(err));
    }, [uid]);
    
    if (err) return <Error />;
    if (!data) return <Loading />;
    if (typeof data != "object") return <Error>无法查询该用户</Error>;
    return <JsonViewer value={data} />;
};
