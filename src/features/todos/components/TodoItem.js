import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {selectTodoById, ToggleTodo, ToggleRemoveTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import { updateTodo, deleteTodo } from '../../apis/todos';
import { Button } from 'antd';


function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "undone";

    function handleClick(){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            // console.log("response: ", response);
            dispatch(ToggleTodo({id:props.itemId, updateTodo: response.data}));
        });
    };

    function handleTodoRemove(event){
        deleteTodo(props.itemId).then((response) => {
            dispatch(ToggleRemoveTodo(response.data));
        })
        event.stopPropagation();
    };

    return( 
        <div className = "testCenter">
            <ul className = {`TodoItem-todo ${todoStatus}`} onClick = {handleClick}> 
                <div className = "todoRemove">
                <span>
                {todo.text} 
                <Button danger type="text" className = "button1" onClick = {handleTodoRemove}> x </Button>
                </span>    
                </div>

            </ul>
        </div>
        );
//remove yung 
}

export default TodoItem;
