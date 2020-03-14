import React, { useContext } from 'react';
import './header.css';
import { TodoContext } from './TodoStore.js';

//App.js는 store역할을 하기 때문에 나중에 이름을 바꿔야 함.
// Header에서 Context를 소비해야함. <Context.Consumer>로 todo 정보를 받을 수 있음.
// destructuring.. 어렵다..
// 그러나 useContext를 이용하면 Context.Consumer라는 껍데기도 필요 없어진다
const Header = () => {
    const { todos } = useContext(TodoContext);
    return (

        <div>
            <h1>Hello ToDo 애플리케이션</h1>
            <div className="countInfo">해야할 일 ! {todos.filter(v => v.status === "todo").length}개 있습니다.</div>
        </div>

    )
}

export default Header;