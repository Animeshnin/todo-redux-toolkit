import { configureStore } from '@reduxjs/toolkit'
import addTodoItemSlice from "./slices/updateTodoItem.ts";

export const store = configureStore({
    reducer: {
        addTodoItem: addTodoItemSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch