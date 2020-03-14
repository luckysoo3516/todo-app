import React from 'react';
import './header.css';

const Header = ({todos}) => {
return (
    <div>
        <h1>Hello ToDo 애플리케이션</h1>
        <div className="countInfo">해야할 일 ! {todos.length}개 있습니다.</div>
    </div>
)
}

export default Header;