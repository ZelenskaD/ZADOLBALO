import React, {useState, useEffect} from 'react';

function Counter () {
    const [num, setNum] = useState(0);

    const increment = () => {
         setNum(n => n + 1);
    };



    useEffect (() => {
         document.title=`Hi${'!'.repeat(num)}`
    }, )

    return (

        <div>
        let's get exited.
        <button onClick={increment}>
            Get more excited.
        </button>
            <p>Counter: {num}</p>
        </div>
    );


}

export default  Counter;