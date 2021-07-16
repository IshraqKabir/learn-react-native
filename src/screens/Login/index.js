import React, { useState } from "react";

import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Container } from "../../components/common/Container";
import { Input } from "../../components/common/Input"
import { MyButton } from "../../components/common/MyButton";

import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routeNames";

export const Login = () => {
    const { navigate } = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>

            <Image
                source={require("../../assets/images/logo.png")}
                style={styles.logoImage}
            />

            <View>
                <Text style={styles.title}>Welcome To My First React Native App!</Text>
                <Text style={styles.subTitle}>Please login here.</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        value={username}
                        setValue={setUsername}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        value={password}
                        setValue={setPassword}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        secureTextEntry={true}
                    />

                    <MyButton
                        title="Submit"
                        variant="primary"
                        disabled={false}
                        onPress={() => { }}
                    />

                    <View style={{ flexDirection: "row" }}>
                        <Text>Need a new account?</Text>
                        <TouchableOpacity onPress={() => { navigate(REGISTER) }}>
                            <Text style={{ marginLeft: 5, fontWeight: "bold", textDecorationLine: "underline" }}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        height: 180,
        width: 180,
        alignSelf: "center",
        marginTop: 50,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 5,
    },
    subTitle: {
        alignSelf: "center",
        marginVertical: 5,
    },
    form: {
        marginTop: 20
    },
})

