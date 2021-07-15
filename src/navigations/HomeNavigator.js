import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

import { CONTACT_LIST, CONTACT_DETAILS, CONTACT_CREATE, SETTINGS } from "../constants/routeNames";

import { Contacts } from "../screens/Contacts";

const ContactDetail = () => {
    return (
        <View>
            <Text>Hi from Contact Detail</Text>
        </View>
    )
}

const CreateContact = () => {
    return (
        <View>
            <Text>Hi from Create Contact</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View>
            <Text>Hi from Create Settings</Text>
        </View>
    )
}


const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;
