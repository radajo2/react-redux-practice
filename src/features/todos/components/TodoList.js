import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import '../styles/TodoList.css';
import {AddTodos} from "../reducers/todosSlice";
import {getTodos} from "../../apis/todos";

function TodoList() {

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then ((response) => {
            // console.log("response.data: ", response.data);
            dispatch(AddTodos(response.data));
        })
    }, [])

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
