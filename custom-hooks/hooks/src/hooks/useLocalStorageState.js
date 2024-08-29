import React, {useState, useEffect} from "react";


const useLocalStorageState = (key, defaultValue) => {

    const [state, setState] = useState(()=> {
       let value = JSON.parse(window.localStorage.getItem(key) || defaultValue);
       return value;
    })

        useEffect (()=> {
            window.localStorage.setItem(key, state)
        }, [state])

    return [state, setState];
    //   const [count, setCount] = useState(() => {
    //     let value;
    //     value = JSON.parse(
    //         window.localStorage.getItem('count') || 0 // if there is anything in local storage as count
    //     );
    //     return value;
    // });
    //
    // useEffect(() => {
    //     window.localStorage.setItem('count', count);
    // }, [count]);
}

export default useLocalStorageState;