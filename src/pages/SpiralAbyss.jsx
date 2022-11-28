import { Card, CardHeader, CardBody, CardFooter, Header, Box, Avatar, Text } from "grommet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gkMethod } from "../lib/gk";
import Error from "../components/error";
import Loading from "../components/loading";

export default () => {
    const { uid } = useParams();
    const [data, setData] = useState(null);
    const [err, setErr] = useState();
    useEffect(() => {
        if (data) return;
        gkMethod("getSpiralAbyss", uid)
            .then((result) => setData(result))
            .catch((err) => setErr(err));
    }, [uid]);

    if (err) return <Error />;
    if (!data) return <Loading />;
    if (data && !data.schedule_id) return <Error>无法查询该用户</Error>;
    return (
        <div>
            <Text>统计周期：{`${formatDate(data.start_time)}-${formatDate(data.end_time)}`}</Text>
            <Card>
                <Box pad="medium">
                    <CardHeader pad="small">挑战回顾</CardHeader>
                    <CardBody>当前由于API限制，无法查询详细信息</CardBody>
                </Box>
            </Card>
            {data.floors.map((floor) => (
                <Floor key={floor.index} floor={floor}></Floor>
            ))}
        </div>
    );
};

function formatNumber(number) {
    return new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number);
}
function formatDate(string) {
    return new Date(Number(string) * 1000).toLocaleDateString();
}

function Star({ children }) {
    return (
        <Box direction="row" gap="small">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 64 64"
            >
                <path fill="#ffce31" d="M62 23H39.1L32 2l-7.1 21H2l18.5 13l-7.1 21L32 44l18.5 13l-7.1-21L62 23z" />
                <path
                    fill="#ffdf85"
                    d="m46.2 20.3l4-11.4l-10.5 7.2l1.5 4.2zM27.9 50L32 62l4.1-12l-4.1-2.8zm22.8-15.7l-3.8 2.6l1.6 4.8h12.9zM24.3 16.1L13.8 8.9l4 11.4h5zm-11 18.2L2.6 41.7h12.9l1.6-4.8z"
                />
            </svg>
            {children}
        </Box>
    );
}

function Floor({ floor }) {
    return (
        <Card background="light-1">
            <CardHeader pad="medium">
                <Box direction="row" gap="small">
                    <Avatar background="brand">{floor.index}</Avatar>
                    <Text>{`深境螺旋第${formatNumber(floor.index)}层`}</Text>
                </Box>
                <Star>{`${floor.star}/${floor.max_star}`}</Star>
            </CardHeader>
            <CardBody pad="medium">
                {floor.levels.map((level) => (
                    <div key={level.index}>
                        <Header style={{ padding: 0, margin: 0 }}>
                            <div>第{level.index}间</div>
                            <div>
                                {level.star}of{level.max_star}
                            </div>
                        </Header>
                    </div>
                ))}
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2"></CardFooter>
        </Card>
    );
}
