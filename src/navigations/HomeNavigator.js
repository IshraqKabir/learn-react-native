import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CONTACT_LIST, CONTACT_DETAILS, CONTACT_CREATE, SETTINGS } from "../constants/routeNames";

import { Contacts } from "../screens/Contacts";
import { ContactDetail } from "../screens/ContactDetail";
import { CreateContact } from "../screens/CreateContact";
import { Settings } from "../screens/Settings";

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
