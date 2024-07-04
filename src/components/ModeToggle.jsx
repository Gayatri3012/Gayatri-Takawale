import { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";


export default function ModeToggleButton() {

    const {darkMode, dispatch} = useContext(DarkModeContext);

    function toggleTheme(){
       dispatch({type: 'TOGGLE'});
                   
    }
    
    return (
        <button id="themeButton" className=" w-12 h-12" onClick={toggleTheme}>{darkMode ? <img src="/images/sun.png"/> : <img src="/images/moon4.png"/>}</button>
    )
}