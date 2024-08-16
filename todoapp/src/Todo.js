

import React from 'react';


const Todo = ({id, task, removeTodo}) => {

  const handleRemoving = (e) =>{
        e.preventDefault();
        removeTodo(id);
    };//remove btn

    return (
        <div>
            <ul>
                <li> {task}</li>
                <button onClick={handleRemoving}>X</button>

            </ul>
        </div>
    )
}

export default Todo;