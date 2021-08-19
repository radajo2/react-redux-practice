import React, {useState} from 'react';
import "../styles/TodoForm.css";
import {useDispatch} from "react-redux";
import {AddTodo} from "../reducers/todosSlice";
import {createTodo} from "../../apis/todos";

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
            createTodo(text).then((response) => {
                // console.log("response.data: ", response.data);
                dispatch(AddTodo(response.data));
            });
            setText("");
        }
    }

    return (
        <div className = "addDesign">
            <input 
            type = "text" placeholder = "Input new todo item" value = {text} onChange = {handleChange}></input>
            <button className = "button2" onClick = {handleAdd}>Add</button>
        </div>
    )
}

export default TodoForm;
