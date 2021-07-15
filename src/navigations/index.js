import React from "react";

import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

export const AppNavContainer = () => {
    const isLoggedIn = true;

    return (
        <NavigationContainer>
            {isLoggedIn ?
                <DrawerNavigator />
                :

                <AuthNavigator />
            }
        </NavigationContainer>
    )
}
