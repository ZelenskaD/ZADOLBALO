import React from "react";
import "./MoodClicker.css"
import useToggleState from "./hooks/useToggleState";
const MoodClicker = () => {
 const [isHappy, toggleIsHappy]= useToggleState(true)
     const [isDarkMode, toggleIsDarkMode]= useToggleState(false)

    return (
        <div className={isDarkMode ? 'Clicker-dark':'Clicker-light'} >
            <h1> {isHappy ? "😊" : " 😢"}</h1>
            <button onClick={toggleIsHappy}>Change Mood</button>
            <button onClick={toggleIsDarkMode}>Toggle Dark/Light Mode</button>
        </div>

    )
}

export default MoodClicker;