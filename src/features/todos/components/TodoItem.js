import React from 'react'
import {useSelector} from 'react-redux';
import {selectTodoById, ToggleTodo, ToggleRemoveTodo} from "../reducers/todosSlice";
import {useDispatch} from "react-redux";
import "../styles/TodoItem.css";


function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(ToggleTodo(props.itemId))
    }

    function handleTodoRemove(event){
        event.stopPropagation();
        dispatch(ToggleRemoveTodo(props.itemId));
    }

    const todoStatus = todo.done ? "done" : "";

    return( 
        <div>
            <ul className = {`TodoItem-todo ${todoStatus}`} onClick = {handleClick}> 
                <li>{todo.text} 
                <span className = "todoRemove" onClick = {handleTodoRemove}> x </span>
                </li>
            </ul>
        </div>
        );
}

export default TodoItem;
