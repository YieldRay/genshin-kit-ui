import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormField, Box, Button, TextInput, Page } from "grommet";
import { isValidUid, isValidCnUid, isValidOsUid } from "../lib/uid";
import alert from "../components/alert";

const initUID = 100010001;
export default () => {
    const [uid, setUid] = useState(initUID);
    const navigate = useNavigate();

    return (
        <Page pad="medium">
            <Form
                onSubmit={({ value }) => {
                    if (isValidUid(uid)) navigate(`/UserInfo/${uid}`);
                    else alert("UID 不合法！！！");
                }}
            >
                <FormField name="name" htmlFor="text-input-id" label="查询玩家信息">
                    <TextInput
                        type="number"
                        id="text-input-id"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        name="name"
                    />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="确认" />
                    <Button type="reset" label="重置" onClick={() => setUid(initUID)} />
                </Box>
            </Form>
        </Page>
    );
};
