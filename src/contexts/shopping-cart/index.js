import React, {createContext, useCallback, useContext, useReducer} from "react";
import {noop} from "lodash";

class ShoppingCartContextValue {
    selectedItems = [];

    addNewItem = noop;

    removeItem = noop;
}

const INITIAL_STATE = new ShoppingCartContextValue();

const ShoppingCartContext = createContext(INITIAL_STATE);

function reducer(state, action) {
    switch (action.type) {
        case 'add-new-item':
            return [...state, action.payload];
        case 'remove-item':
            // TODO
            return [...state, action.payload];
        default:
            return state;
    }
}

function useShoppingCartContextValue(){
    const [state, dispatch] = useReducer(reducer, []);
    const addNewItem = useCallback((item) => {
        dispatch({ type: 'add-new-item', payload: item })
    }, [])
    const removeItem = useCallback((item) => {
        dispatch({ type: 'remove-item', payload: item })
    }, [])
    return {
        selectedItems: state,
        addNewItem,
        removeItem,
    }

}

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
export const ShoppingCartContextProvider = ({ children }) => {
    const value = useShoppingCartContextValue();
    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    );
}