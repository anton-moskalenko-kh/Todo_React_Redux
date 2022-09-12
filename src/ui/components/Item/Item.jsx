//Core
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteItem, handleChecked, handleUpdateItem} from "../../../engine/core/todo/thunks";
import Selectors from "../../../engine/core/todo/selectors";

//Parts
import ItemButton from "../Button/Button";
import {DeleteForever, Edit} from "@mui/icons-material";

//Style
import {useStyle} from "./style";
import classNames from "classnames";

function Item(props) {
    const {description, id, checked} = props
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const items = useSelector(Selectors.memoItems)
    const classes = useStyle()

    const checkboxChecked = checked ? classes.descChecked : '';

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
            <label className={classes.label}>
                <input onClick={onChecked} type="checkbox" defaultChecked={checked}/>
                {edit ?
                    <div className={classes.updateBlock}>
                        <input type="text" name="description" className="form__input" value={value}
                               onChange={(e) => setValue(e.target.value)}/>
                        <ItemButton click={updateItem} varient='outlined' text="Save"/>
                    </div>
                    :
                    <>
                        <p className={classNames(classes.desc, checkboxChecked)}>{description}</p>
                        <Edit color='primary' fontSize='large' cursor="pointer"  onClick={editItem} />
                        <DeleteForever color='primary' fontSize='large' cursor="pointer" onClick={removeItem} />
                    </>
                }
            </label>
        </div>
    )
}

export default Item