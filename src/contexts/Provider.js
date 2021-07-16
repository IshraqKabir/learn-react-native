import React, { createContext, useReducer } from "react";
import { authReducer } from "./reducers/auth";
import { authInitialStates } from "./initialStates/auth";
import { contactsReducer } from "./reducers/contacts";
import { contactsInitialStates } from "./initialStates/contacts";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [authStates, authDispatch] = useReducer(authReducer, authInitialStates);
    const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialStates);

    return (
        <GlobalContext.Provider value={{
            authStates,
            authDispatch,
            contactsState,
            contactsDispatch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


