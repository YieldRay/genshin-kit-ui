import { Main, Heading, Paragraph } from "grommet";
export default ({
    children = (
        <div>
            请保证已填入有效cookie，且UID须有效
            <br />
            若确保上述条件正确，则应当是指定UID的用户未开放当前信息！
        </div>
    ),
}) => (
    <Main pad="large" style={{ display: "grid", placeItems: "center" }}>
        <Heading>错误</Heading>
        <Paragraph>{children}</Paragraph>
    </Main>
);
