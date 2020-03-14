import React from 'react';
import './item.css';

const Item = ({todo, changeTodoStatus}) => {
    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        // changeTodoStatus를 실행할 곳!
        changeTodoStatus(id);
    }
    const itemClassName = todo.status === 'done' ? 'done' : '';
    // todo status에 따라 렌더링 방법을 바꿔준다.
    return (
        <li className={itemClassName} data-id={todo.id} onClick={toggleItem}> {todo.title} </li>
    )
}

export default Item;