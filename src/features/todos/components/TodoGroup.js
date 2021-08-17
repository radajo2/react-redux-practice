import React from 'react-redux';
import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';
import {selectTodoIds} from "../reducers/todosSlice";

function TodoGroup() {
    const todoIds = useSelector (selectTodoIds);

    return (
        <div>
            {todoIds.map((id) => (
                <TodoItem key = {id} itemId={id} />
            ))}
        </div>
    );
}

export default TodoGroup;
