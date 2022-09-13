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

    const handleItem = (values, form) => {
        dispatch(addItem({id: v4(), description: values.description, items}))
        // event.description = ''

        Object.keys(values).forEach(key => {
            form.change(key, undefined);
            form.resetFieldState(key)
        })
    }

    const minLengthField = (values) => {
        const errors = {}
        const valueLength = values.description || []
        if (valueLength.length === 0) {
            errors.description = "The field mustn't be empty"
        }
        return errors
    }

    return (
        <Form onSubmit={handleItem}
              validate={minLengthField}
              render={(props) => {
                  const {handleSubmit, form} = props
                  return (
                      <form onSubmit={(values) => handleSubmit(values, form)} className={classes.form}>
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