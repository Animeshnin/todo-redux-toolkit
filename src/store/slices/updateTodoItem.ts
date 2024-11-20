import { createSlice } from '@reduxjs/toolkit'

interface TodoItemState {
    items: TodoItem[]; // Массив задач
}

interface TodoItem {
    id: number;
    text?: string;
    children?: TodoItem[];
}


const initialState: TodoItemState = {
    items: []
}

export const addTodoItemSlice = createSlice({
    name: 'addTodoItem',
    initialState,
    reducers: {

    }
})


export default addTodoItemSlice.reducer