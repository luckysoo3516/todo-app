import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.jsx';

function App() {
  const [todos, setTodos] = useState(['공지사항 만들기']);
  return (
    <>
    <h1>
      Todo 애플리케이션
    </h1>
    <form action="">
      <input type="text" name=""></input>
      <button>할일 추가</button>
    </form>
    <List todos={todos}/>
    </>
  );
}

export default App;
