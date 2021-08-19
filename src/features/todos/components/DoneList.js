import React from 'react'
import {useSelector} from 'react-redux';
import {selectDoneList} from "../reducers/todosSlice";
import TodoItem from './TodoItem';

function DoneList() {
    const doneTodos = useSelector (selectDoneList);

    return (
        <div>
            <h1>My Completed Task/s</h1>
            {doneTodos.map((todo) => (
                <TodoItem key = {todo.id} itemId={todo.id} />
            ))}
        </div>
    );
}

export default DoneList;
