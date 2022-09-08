import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    search: undefined
}

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.items = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
    }
})

export const { setItem, setSearch } = todo.actions
export default todo.reducer