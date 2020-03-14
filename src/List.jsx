import React, {useContext} from 'react';
import Item from './Item.jsx';
import { TodoContext } from './TodoStore.js';

//클릭 핸들러를 다루기 위해 li 태그는 Item 컴포넌트로 만든다.
//Item 컴포넌트에도 todos를 전달해줘서 각 Item별로 일을 할 수 있도록 한다.
//changeTodoStatus의 실행 주체는 Item이므로 그대로 전달.
const List = () => {
    const {todos, loading, changeTodoStatus} = useContext(TodoContext);
    let todoList = <div>loading...</div>
    if(!loading) todoList = todos.map( (todo) => 
    <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus}/>);
    return(
        <ul>
            {todoList}
        </ul>
    )
}

export default List;