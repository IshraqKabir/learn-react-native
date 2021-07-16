import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

import { GlobalContext } from "../contexts/Provider";

export const AppNavContainer = () => {
    const { authStates } = useContext(GlobalContext);
    const { isLoggedIn } = authStates;

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
