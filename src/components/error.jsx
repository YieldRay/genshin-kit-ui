import { Main, Heading, Paragraph } from "grommet";
export default ({ children }) => (
    <Main pad="large" style={{ display: "grid", placeItems: "center" }}>
        <Heading>错误</Heading>
        <Paragraph>{children}</Paragraph>
    </Main>
);
