import ItemButton from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, handleChecked, handleUpdateItem} from "../../engine/core/todo/thunks";
import {useState} from "react";
import {selectors} from "../../engine/core/todo/selectors";

function Item(props) {
    const {description, id, checked} = props
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const items = useSelector(selectors.items)

    const onChecked = (event) => {
        dispatch(handleChecked(id, event.target.checked, items))
    }

    const removeItem = () => {
        dispatch(deleteItem(id, items))
    }

    const editItem = () => {
        setEdit(true)
        setValue(description)
    }

    const updateItem = () => {
        dispatch(handleUpdateItem({id, value, items}))
        setEdit(false)
    }

    return (
        <div className="todo-item">
            <label className="todo-item__label">
                <input className='checkbox' onClick={onChecked} type="checkbox" defaultChecked={checked} />
                {edit ?
                    <div className="update__block">
                        <input type="text" name="description" className="form__input" value={value}
                               onChange={(e) => setValue(e.target.value)}/>
                        <ItemButton click={updateItem} varient='outlined' text="Save" />
                    </div>
                    :
                    <>
                        <p className='todo-item__desc'>{description}</p>
                        <ItemButton click={editItem} varient='outlined' text="Edit" />
                        <ItemButton click={removeItem} varient='outlined' text="Delete" />
                    </>
                }
            </label>
        </div>
    )
}

export default Item