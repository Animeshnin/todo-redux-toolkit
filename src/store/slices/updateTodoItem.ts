import {createSlice} from '@reduxjs/toolkit'

interface TodoItemState {
    items: TodoItem[]; // Массив задач
}

interface TodoItem {
    id: number | string;
    text?: string;
    children?: TodoItem[];
}


const initialState: TodoItemState = {
    items: [

    ]
}

let nextId = 0

export const addTodoItemSlice = createSlice({
    name: 'addTodoItem',
    initialState,
    reducers: {
        addParentToDoItem: (state) => {
            nextId = nextId + 1
            state.items.push({
                id: nextId
            })
        },
        removeParentToDoItem: (state) => {
            state.items = []
            nextId = 0
        },
        addChildToDoItem: (state, action ) => {
            const findItem  = state.items.find(item => item.id === action.payload.id)
            if (findItem){
                if (!findItem.children) {
                    findItem.children = []; // Создаем массив, если его еще нет
                }
                const countItem = findItem.children.length
                findItem.children.push({
                    id: `${findItem.id}.${countItem+1}`,
                    text: action.payload.value,
                });
            }
        }
    }
})

export const {addParentToDoItem, removeParentToDoItem, addChildToDoItem} = addTodoItemSlice.actions

export default addTodoItemSlice.reducer