import React from "react";

const InputTodo = (props) => {
    //can you just write this as {exampleName, exampleName2, exampleName3} = props
    //even if some of them are functions and others are objects or arrays
    const inputTodo = props.inputTodo;
    const setInputTodo = props.setInputTodo;
    const todos = props.todos;
    const setTodos = props.setTodos;

    const handleInputTodoAdd = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                content: inputTodo,
                isDone: false
            }
        ]);
        // console.log(todos);
        setInputTodo('');
    }
    return (
        <div className="inputTodoForm">
            <form onSubmit={(e) => handleInputTodoAdd(e)}>
                <input onChange={(e) => setInputTodo(e.target.value)} type="text" name="inputTodoContent" id="inputTodoContent" value={inputTodo}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}
export default InputTodo;