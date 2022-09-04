import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../core/todo/slice'
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
})