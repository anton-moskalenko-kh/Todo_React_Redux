import {setItem} from "./slice";

export const getItems = () => (dispatch) => {
    dispatch(setItem(JSON.parse(localStorage.getItem('items')) || []));
}

export const addItem = ({id, description, items}) => (dispatch) => {
    const newItems = [...items, {id, description}];
    dispatch(setItem(newItems))
    localStorage.setItem('items', JSON.stringify(newItems))
}

export const deleteItem = (id, items) => (dispatch) => {
    const newItems = items.filter(item => item.id !== id)
    dispatch(setItem(newItems))
    localStorage.setItem('items', JSON.stringify(newItems))
}

export const handleChecked = (id, checked, items) => (dispatch) => {
    const checkedItems = items.map(item => {
        if (item.id === id) {
            return {...item, checked}
        }
        return item;
    });
    dispatch(setItem(checkedItems))
    localStorage.setItem('items', JSON.stringify(checkedItems))
}

export const handleUpdateItem = ({id, value, items}) => (dispatch) => {
    const saveItem = items.map(item => {
        if (item.id === id) {
            return { ...item, description: value };
        }
        return item;
    });
    dispatch(setItem(saveItem));
    localStorage.setItem('items', JSON.stringify(saveItem))
}

export const clearItems = () => (dispatch) => {
    dispatch(setItem([]))
    localStorage.clear()
}