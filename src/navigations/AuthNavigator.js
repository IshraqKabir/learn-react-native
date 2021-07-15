import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

import { LOGIN, REGISTER } from "../constants/routeNames";

const Login = () => {
    return (
        <View>
            <Text>Hi from Login</Text>
        </View>
    )
}

const Signup = () => {
    return (
        <View>
            <Text>Hi from Signup</Text>
        </View>
    )
}

const AuthNavigator = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={Signup}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;
