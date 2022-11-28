import { Main, Heading, Paragraph, Spinner } from "grommet";
export default ({ children = "数据加载中..." }) => (
    <Main pad="large" style={{ display: "grid", placeItems: "center" }}>
        <Heading>{children}</Heading>
        <Paragraph>loading</Paragraph>
        <Spinner size="xlarge"></Spinner>
    </Main>
);
