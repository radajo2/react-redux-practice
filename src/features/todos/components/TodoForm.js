import React, {useState} from 'react';
import "../styles/TodoForm.css";
import {useDispatch} from "react-redux";
import {AddTodo} from "../reducers/todosSlice";

function TodoForm() {
const [text, setText] = useState("");
const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd(){
        if(text === ''){
            alert("Oopss! Input can't be left blank :)");
        }
        else {
        dispatch(AddTodo(text));
        setText("");
        }
    }

    return (
        <div>
            <input 
            type = "text" placeholder = "Input new todo item" value = {text} onChange = {handleChange}></input>
            <button onClick = {handleAdd}>Add</button>
        </div>
    )
}

export default TodoForm;
