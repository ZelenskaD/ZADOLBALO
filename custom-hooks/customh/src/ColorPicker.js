import React from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";
const ColorPicker = () => {

    const [color, setColor] = useLocalStorageState('color', 'teal');
    const changeColor = e => {
        setColor(e.target.value)
    }
    return (
        <div>
          <h1 style = {{color}}>Your Color is {color}</h1>
            <select value={color} onChange={changeColor}>
                <option value="red"> Red</option>
                <option value="teal"> Teal</option>
                <option value="orange"> Orange</option>
                <option value="yellow"> Yellow</option>
                <option value="purple"> Purple</option>

            </select>
        </div>
    );
}

export default ColorPicker;