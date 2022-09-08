import {createSelector} from "@reduxjs/toolkit";

const selector = {
    items: (state) => state.todo.items,
    search: (state) => state.todo.search,
}

const memoSelector = {
    memoItems: createSelector(
        [selector.items, selector.search],
        (items, search) => {
            return search
            ? items.filter(item => item.description.includes(search))
            : items
        }
    )
}

export default {...selector, ...memoSelector}


