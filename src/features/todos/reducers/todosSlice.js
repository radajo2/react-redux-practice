import {createSlice, createEntityAdapter, createSelector} from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState();

const todoSlice = createSlice ({
    name: "todos",
    initialState,
    reducers: {
        AddTodo(state, action) {
            //action.payload => response.data
            todosAdapter.addOne(state, action.payload);
        },
        AddTodos(state, action) {
            //action.payload => response.data
            todosAdapter.addMany(state, action.payload);
        },
        ToggleTodo(state, action) {
            //action.payload
            // const todo = state.entities[action.payload];
            // todo.done = !todo.done;
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            });
        },
        ToggleRemoveTodo(state, action) {
            todosAdapter.removeOne(state, action.payload.id);
        },
    },
});

export const {AddTodo, ToggleTodo, ToggleRemoveTodo, AddTodos} = todoSlice.actions;

export default todoSlice.reducer;

export const {selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors(state => state.todoList);

export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter ((todo) => todo.done)); 