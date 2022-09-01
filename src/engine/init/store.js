import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../core/todo/slice'

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})