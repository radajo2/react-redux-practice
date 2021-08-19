import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {selectTodoById, ToggleTodo, ToggleRemoveTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import { updateTodo, deleteTodo } from '../../apis/todos';
import { Button, Modal  } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "undone";
    const [text, setText] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);


    function handleClick(event){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            // console.log("response: ", response);
            dispatch(ToggleTodo({id:props.itemId, updateTodo: response.data}));
        });
        event.stopPropagation();
    };

    function handleTodoRemove(event){
        deleteTodo(props.itemId).then((response) => {
            dispatch(ToggleRemoveTodo(response.data));
        })
        event.stopPropagation();
    };

    const openModal = (event) => {
        setIsModalVisible(true);
        event.stopPropagation();
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = (event) => {
        if (text === ''){
            setIsModalVisible(false);
        }
        else{
            updateTodo(props.itemId, {text: text}).then((response) => {
                dispatch(ToggleTodo({id:props.itemId, updateTodo: response.data}));
            });
            event.stopPropagation();
            setIsModalVisible(false);
            setText("");
        }
      };

    function handleTodoUpdate (event) {
        setText(event.target.value);
    }

    return( 
        <div className = "testCenter">
            <ul className = {`TodoItem-todo ${todoStatus}`} onClick = {handleClick}> 
                <div className = "todoRemove">
                <span>
                {todo.text} 
                {todoStatus === 'undone' && <span className = "button3" onClick = {openModal} ><EditOutlined/> </span>}
                <Button type="text" className = "button1" onClick = {handleTodoRemove}> <DeleteOutlined/> </Button>
                </span>    
                </div>
            </ul>
            <Modal title="Edit Todo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <input
                    style = {{width: 480}}
                    placeholder = {todo.text}
                    value = {text}
                    onChange = {handleTodoUpdate}
                />
            </Modal>   
        </div>
        );
//remove yung 
}

export default TodoItem;
