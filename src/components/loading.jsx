import { Main, Heading, Paragraph, Spinner } from "grommet";
export default () => (
    <Main pad="large" style={{ display: "grid", placeItems: "center" }}>
        <Heading>数据加载中...</Heading>
        <Paragraph>loading</Paragraph>
        <Spinner size="xlarge"></Spinner>
    </Main>
);
