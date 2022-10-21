import { createContext, React, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
    isLogin: false,
    user: "",
    password: "",
    level: "",
};

const reducer = (_, action) => {
    const { type, payload, vallevel } = action;

    switch (type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
                user: payload,
                password: payload,
                level: vallevel,
            };
        case "LOGOUT":
            return {
                isLogin: false,
                user: "",
                password: "",
            };
        default:
            throw new Error();
    }
};

export const UsersContextProvider = ({ children }) => {
    const [dataUser, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={[dataUser, dispatch]}>
            {children}
        </UserContext.Provider>
    );
};