import { createContext, useEffect, useReducer } from "react";
import darkModeReducer from "./darkModeReducer.js";

const INITIAL_STATE = {
    darkMode: true
}


export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(darkModeReducer,INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
        document.body.classList.toggle('dark', state.darkMode);
    },[state.darkMode])

    return (
        <DarkModeContext.Provider value={{darkMode:state.darkMode, dispatch}}>{children}</DarkModeContext.Provider>
    )
}