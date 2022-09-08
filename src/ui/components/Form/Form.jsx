//Core
import {v4} from 'uuid';
import {Form, Field} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../../engine/core/todo/thunks";
import Selectors from "../../../engine/core/todo/selectors";

//Material UI
import Input from "./Input";
import ItemButton from "../Button/Button";

//Style
import {useStyle, buttonStyle} from "./style"

function MainForm() {

    const dispatch = useDispatch()
    const items = useSelector(Selectors.memoItems)
    const classes = useStyle()

    const handleItem = (event) => {
        dispatch(addItem({id: v4(), description: event.description, items}))
        event.description = ''
    }

    return (
        <Form onSubmit={handleItem}
              render={(props) => {
                  const {handleSubmit} = props
                  return (
                      <form onSubmit={handleSubmit} className={classes.form}>
                          <Field component={Input} className={classes.input} name='description'
                                 placeholder={'Enter your task'}/>
                          <ItemButton sx={{...buttonStyle}} text="Add task" varient='contained'/>
                      </form>
                  )
              }}
        />
    )
}

export default MainForm