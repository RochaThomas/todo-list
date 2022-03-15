import React from "react";
import styles from './DisplayTodos.module.css';

const DisplayTodos = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;

    /*
    this function that was commented out was the original try at making the clicked check box handling work
    this is replaced by the handleChangeIsDone function below
    the problem with this try was it used onClick but onChange was needed in order to update the box that was being clicked
    */
    //function that handles onclick event for the check mark
    // const handleClickCheckbox = (e,oneTodo) => {
    //     setTodos([
    //         ...todos,
    //         {
    //             ...oneTodo,
    //             isDone: e.target.clicked
    //         }
    //     ]);
    // }

    const handleClickDelete = (i) => {
        //in this case i is the index of the todo that is going to be deleted
        const deletedATodo = todos.filter( (todo, idx) =>  i !== idx);
        setTodos(deletedATodo);
    }

    const handleChangeIsDone = (i) => {
        //Go over this again slowly, remember you got this function from the solutions vid around 43 min
        const editedTodos = todos.map( (todo, idx) => {
            if (i === idx) {
                const editedOneTodo = {
                    ...todo,
                    isDone: !todo.isDone
                }
                return editedOneTodo;
            }
            return todo;
        });
        setTodos(editedTodos);
    }

    return (
        <div className="todosDiv">
            {
                todos.map( (oneTodo,i) => {
                    return (
                        <div className={oneTodo.isDone ? styles.checkedTodo : "uncheckedTodo"} key={i}>
                            <label htmlFor="isDone">{oneTodo.content}</label>
                            <input type="checkbox" name="isDone" id="isDone" checked={oneTodo.isDone} onChange={(e) => handleChangeIsDone(i)}/>
                            <button onClick={(e) => handleClickDelete(i) }>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default DisplayTodos;