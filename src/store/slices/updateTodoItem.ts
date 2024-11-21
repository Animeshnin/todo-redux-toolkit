import { createSlice } from "@reduxjs/toolkit";

interface TodoItemState {
  items: TodoItem[]; // Массив задач
}

export interface TodoItem {
  id: number | string;
  text?: string;
  children?: TodoItem[];
}

const initialState: TodoItemState = {
  items: [],
};

let nextId = 0;

export const addTodoItemSlice = createSlice({
  name: "addTodoItem",
  initialState,
  reducers: {
    addParentToDoItem: (state, action) => {
      nextId = nextId + 1;
      state.items.push({
        id: nextId,
        text: action.payload,
      });
    },
    removeParentToDoItem: (state) => {
      state.items = [];
      nextId = 0;
    },
    addChildToDoItem: (state, action) => {
      const findItemInState = (data: TodoItem[], targetId: string) => {
        for (const item of data) {
          if (item.id === targetId) {
            return item;
          }
          if (item.children) {
            const found: TodoItem = findItemInState(item.children, targetId)!;
            if (found) {
              return found;
            }
          }
        }
        return null;
      };
      const findItem = findItemInState(state.items, action.payload.id)!;
      if (findItem) {
        if (!findItem.children) {
          findItem.children = [];
          console.log(findItem);
        }
        const countItem = findItem.children.length;
        findItem.children.push({
          id: `${findItem.id}.${countItem + 1}`,
          text: action.payload.value,
        });
      }
    },
  },
});

export const { addParentToDoItem, removeParentToDoItem, addChildToDoItem } =
  addTodoItemSlice.actions;

export default addTodoItemSlice.reducer;
