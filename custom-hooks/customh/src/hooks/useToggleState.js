//Making piece of state - starts as true or false

//making a function to toggle state from t/f or f/t

import React, {useState} from "react" ;

const useToggleState = (initialState=true) => {
    const [state, setState] = useState(initialState)
    const toggleState= () => {
        setState(state => !state)
    }
    return [state, toggleState]
}

export default useToggleState;
