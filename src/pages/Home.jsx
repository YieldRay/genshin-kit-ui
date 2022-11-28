import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormField, Box, Button, TextInput, Page, Heading, Select } from "grommet";
import { isValidUid, isValidCnUid, isValidOsUid } from "../lib/uid";
import alert from "../components/alert";

const initUID = 100010001;
export default () => {
    const [uid, setUid] = useState(initUID);

    const selectOptionsMap = {
        玩家信息: "UserInfo",
        角色信息: "AllCharacters",
        深渊信息: "SpiralAbyss",
        活动信息: "Activities",
        日常信息: "DailyNote",
    };

    const [pageName, setPageName] = useState(Object.keys(selectOptionsMap)[0]);
    const [pageValue, setPageValue] = useState(Object.values(selectOptionsMap)[0]);
    const navigate = useNavigate();

    return (
        <Page pad="medium">
            <Box
                direction="row"
                pad="large"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <Heading margin="none">{document.title}</Heading>
            </Box>
            <Form
                onSubmit={({ value }) => {
                    if (isValidUid(uid)) navigate(`/${pageValue}/${uid}`);
                    else alert("UID 不合法！！！");
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <FormField name="name" htmlFor="text-input-id" label="输入UID" style={{ flex: "3" }}>
                        <TextInput
                            type="number"
                            id="text-input-id"
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                            name="name"
                        />
                    </FormField>
                    <Select
                        options={Object.keys(selectOptionsMap)}
                        value={pageName}
                        onChange={({ option }) => {
                            setPageName(option);
                            setPageValue(selectOptionsMap[option]);
                        }}
                        style={{ flex: "1", maxWidth: "33.33vw" }}
                    />
                </div>

                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="确认" />
                    <Button type="reset" label="重置" onClick={() => setUid(initUID)} />
                </Box>
            </Form>
        </Page>
    );
};
