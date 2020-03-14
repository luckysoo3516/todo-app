import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';

//fetching 하는 부분을 함수(커스텀 훅)로 만들어서 재사용 가능하게 한다.
const useFetch = () => {
  const [loading, setLoading] = useState(false);
  // 서버로 부터 데이터를 fetch하는 부분. 비동기처리를 위한 함수.
  const fetchinitialData = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:8080/todo');
    const initialData = await response.json();
    console.log(initialData);
    // 가져온 데이터는 setTodos를 통해 초기값을 설정한다.
    setTodos(initialData);
    setLoading(false);
  }
  //비동기 처리를 useEffect안에서 직접 하지 말고, 호출해서 써야한다.(권장)
  // 두번째 인자로 빈 배열을 넣어주면 한번만 실행되고 이후에 관찰할 게 없어진다. (로딩타임에만 실행)
  useEffect( () => {
    fetchinitialData();
  }, []);

  return loading;
}

function App() {

  //useState는 state를 (함수형)컴포넌트 내에서 관리할 수 있게 한다.
  //todos는 초기화할때 빈 배열을 넣어주어야한다.
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  
  const loading = useFetch();
  
  //new Todo는 이 함수를 통해서 생성된다.
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
    console.log("타겟" + e.target.value);
  }

  // new Todo를 todos 상태에 추가한다.
  const addTodo = (e) => {
    e.preventDefault();
    //객체 destructuring 연산자
    setTodos([...todos, newTodo]);
  }
  


  //useEffect에서 렌더링 이후에 일어나는 것들(side effect)에 대해 처리한다. ex. 로깅, 서버로 데이터 전송 등 "후속처리"
  //새로운 할일이 추가될 때 마다 변경을 감지하고 싶으면 todos의 변경을 감지해야한다. 변경을 감지하면 렌더링을 다시 한다.
  useEffect( () => {
    console.log("새로운 내용이 추가 됐네요");
  }, [todos])

   
  return (
    <>
    <h1>
      Todo 애플리케이션
    </h1>
    <form action="">
      <input type="text" name="" onChange={changeInputData}></input>
      <button onClick={addTodo}>할일 추가</button>
    </form>
    <List todos={todos} loading={loading}/>
    </>
  );
}

export default App;
