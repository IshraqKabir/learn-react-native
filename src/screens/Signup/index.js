import React, { useState } from "react";

import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Container } from "../../components/common/Container";
import { Input } from "../../components/common/Input"
import { MyButton } from "../../components/common/MyButton";

import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeNames";

export const Signup = () => {
    const { navigate } = useNavigation();

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = ({ name, value }) => {
        if (name == 'password') {
            setForm({ ...form, [name]: value });
            setErrors({ ...form, [name]: value.length > 5 ? null : "Password has to be atleast 6 characters long." });
            return;
        }

        setForm({ ...form, [name]: value });
        // add this if you want to remove error on typing
        if (value) {
            setErrors({ ...form, [name]: null })
        } else {
            setErrors({ ...form, [name]: "This Field Is Required." })
        }

    }

    const onSubmit = () => {
        // validations
        const { username, firstName, lastName, email, password } = form;

        setErrors({
            ...errors,
            username: !username ? "Username cannot be empty" : null,
            firstName: !firstName ? "First name cannot be empty" : null,
            lastName: !lastName ? "Last name cannot be empty" : null,
            email: !email ? "Email cannot be empty" : null,
            password: !password ? "Password cannot be empty" : password.length < 6 ? "Password has to be atleast 6 characters long." : null,
        });
    }

    return (
        <Container>

            <Image
                source={require("../../assets/images/logo.png")}
                style={styles.logoImage}
            />

            <View>
                <Text style={styles.title}>Welcome To My First React Native App!</Text>
                <Text style={styles.subTitle}>Create a free account.</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        onChangeText={(text) => {
                            onChange({ name: "username", value: text })
                        }}
                        error={errors.username}
                    />

                    <Input
                        label="First Name"
                        placeholder="Enter First Name"
                        onChangeText={(text) => {
                            onChange({ name: "firstName", value: text })
                        }}
                        error={errors.firstName}
                    />

                    <Input
                        label="Last Name"
                        placeholder="Enter Last Name"
                        onChangeText={(text) => {
                            onChange({ name: "lastName", value: text })
                        }}
                        error={errors.lastName}
                    />

                    <Input
                        label="Email"
                        placeholder="Enter Email"
                        textContentType="emailAddress"
                        onChangeText={(text) => {
                            onChange({ name: "email", value: text })
                        }}
                        error={errors.email}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            onChange({ name: "password", value: text })
                        }}
                        error={errors.password}
                    />

                    <MyButton
                        title="Submit"
                        variant="primary"
                        disabled={false}
                        onPress={onSubmit}
                    />

                    <View style={{ flexDirection: "row" }}>
                        <Text>Already Have An Account?</Text>
                        <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
                            <Text style={{ marginLeft: 5, fontWeight: "bold", textDecorationLine: "underline" }}>Login</Text>
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

