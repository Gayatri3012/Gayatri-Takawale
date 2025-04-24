import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { Sun, Moon } from "lucide-react";

export default function ModeToggleButton() {

    const {darkMode, dispatch} = useContext(DarkModeContext);

    function toggleTheme(){
       dispatch({type: 'TOGGLE'});
                   
    }
    
    return (
        <button id="themeButton" className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200 ease-in"  onClick={toggleTheme}>{darkMode ?  <Sun size={20} className="text-yellow-300"/> :  <Moon size={20} className="text-gray-600"/>}</button>
    )
}