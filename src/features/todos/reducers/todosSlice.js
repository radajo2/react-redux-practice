import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1","2"],
    entities: {
        1: {
            id: "1",
            text: "Standup Meeting",
            done: false,
        },
        2: {
            id: "2",
            text: "Code Review",
            done: false,
        },
    },
});

const todoSlice = createSlice ({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        ToggleRemoveTodo(state, action) {
            todosAdapter.removeOne(state, action.payload);
        },
    },
});

export const {AddTodo, ToggleTodo, ToggleRemoveTodo} = todoSlice.actions;

export default todoSlice.reducer;

export const {selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors(state => state.todoList);


