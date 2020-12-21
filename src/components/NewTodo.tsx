import React, {useRef} from 'react';

import { NewTodoProps } from './../todo.model'

const NewTodo:React.FC<NewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value
        console.log(enteredText);
        props.onAddTodo(enteredText)
    }

    return (
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" name="" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
    </form>
    )
}

export default NewTodo;