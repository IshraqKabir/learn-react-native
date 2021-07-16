import 'react-native-gesture-handler';

import React from 'react';

import { AppNavContainer } from "./src/navigations";

// next 2 lines are from ignoring reanimated 2 warnings
// might as well install that properly later
import { LogBox } from "react-native";
LogBox.ignoreLogs(['Reanimated 2']);

import { GlobalProvider } from "./src/contexts/Provider";

const App = () => {
    return (
        <GlobalProvider>
            <AppNavContainer />
        </GlobalProvider>
    );
};

export default App;
