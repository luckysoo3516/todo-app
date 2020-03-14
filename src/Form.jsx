import React, {useContext} from 'react';
import { TodoContext } from './TodoStore';

const Form = () => {
    const {addTodo, changeInputData} = useContext(TodoContext);
    return (
        <form action="">
            <input type="text" name="" onChange={changeInputData}></input>
            <button onClick={addTodo}>할일 추가</button>
        </form>
    )
}

export default Form;