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
            const findItemInState = (data : TodoItem[], targetId : string) => {
                for (const item of data) {
                    if (item.id === targetId) {
                        return item;
                    }
                    if (item.children) {
                        const found : any = findItemInState(item.children, targetId);
                        if (found) {
                            return found;
                        }
                    }
                }
                return null; // Если элемент не найден
            }
            const findItem = findItemInState(state.items, action.payload.id)
            console.log(findItem)
            if (findItem){
                if (!findItem.children) {
                    findItem.children = []; // Создаем массив, если его еще нет
                    console.log(findItem)

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