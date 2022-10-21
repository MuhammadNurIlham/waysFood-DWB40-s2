import { createContext, React, useReducer } from "react";

export const CartReducer = createContext();

const initialState = {
    counter: [],
};

const reducer = (_, action) => {
    const {type, SetCounter} = action
    switch (type) {
        case "Add":
            return {
                type: SetCounter,
            };
        case "Less":
            return {
                type: SetCounter,
            };
        default:
            throw new Error();
    }
};

export const CartReducerProvider = ({ children}) => {
    const [totalCart, setTotalCart] = useReducer(reducer, initialState);

    return (
        <CartReducer.Provider value={[totalCart, setTotalCart]}>
            {children}
        </CartReducer.Provider>
    );
};