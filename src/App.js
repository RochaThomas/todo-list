import React, {useState} from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import DisplayTodos from './components/DisplayTodos'; 

function App() {

  const [inputTodo, setInputTodo] = useState('');
  const intialTodos = [
    {
      content: "Get a Black Belt in Python Stack",
      isDone: true
    },
    {
      content: "Get a Black Belt in Mern Stack",
      isDone: false
    },
    {
      content: "Get a Black Belt in Java Stack",
      isDone: false
    }
  ];

  const [todos, setTodos] = useState(intialTodos);

  return (
    <div className="App">
      <p>{JSON.stringify(todos)}</p>
      <InputTodo inputTodo={inputTodo} setInputTodo={setInputTodo} todos={todos} setTodos={setTodos}/>
      <DisplayTodos todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
