import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), task: "Feed puppies"},
        {id: uuidv4(), task: "Make a dinner"}
    ]

    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setTodos(todos =>
            [...todos,
                {id: uuidv4(), task: newTodo.task }

            ])
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return(
        <div>
            <h3> Todo List</h3>
            <NewTodoForm addTodo={addTodo}/>
            <div>
                {todos.map(({id, task}) => < Todo key={id}
                                                     id={id}
                                                     task={task}
                                                     removeTodo={removeTodo}/>)}
            </div>
        </div>
    )
}


export default TodoList;