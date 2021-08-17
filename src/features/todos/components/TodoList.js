import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import '../styles/TodoList.css';

function TodoList() {
    return (
        <body>
        <div>
            <h1>My Todo List</h1>
            <TodoForm></TodoForm>
            <TodoGroup></TodoGroup>
        </div>
        </body>
    );
}

export default TodoList;
