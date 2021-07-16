import React, { useState } from "react";

import { Text } from "react-native";
import { Container } from "../../components/common/Container";

import { Input } from "../../components/common/Input"


export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <Text>Hi from Login</Text>

            <Input
                label="Username"
                value={username}
                setValue={setUsername}
            />

            <Input
                label="Password"
                value={password}
                setValue={setPassword}
                icon={<Text>HIDE</Text>}
                iconPosition="right"
            />

        </Container>
    )
}

