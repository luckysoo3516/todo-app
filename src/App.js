import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.jsx';

function App() {
  const [todos, setTodos] = useState(['공지사항 만들기']);
  const [newTodo, setNewTodo] = useState();
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }
  return (
    <>
    <h1>
      Todo 애플리케이션
    </h1>
    <form action="">
      <input type="text" name="" onChange={changeInputData}></input>
      <button onClick={addTodo}>할일 추가</button>
    </form>
    <List todos={todos}/>
    </>
  );
}

export default App;
