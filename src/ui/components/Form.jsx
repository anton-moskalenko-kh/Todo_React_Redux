import {v4} from 'uuid';
import {Form, Field} from "react-final-form";

//Material UI
import Input from "./Form/Input";
import ItemButton from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../engine/core/todo/thunks";
import {selectors} from "../../engine/core/todo/selectors";

function MainForm() {

    const dispatch = useDispatch()
    const items = useSelector(selectors.items)

    const handleItem = (event) => {
        dispatch(addItem({id: v4(), description: event.description, items}))
        event.description = ''
    }

    const minLengthField = (values) => {
        const errors = {}
        const valueLength = values.description || []
        if (valueLength.length < 5 && values.description !== '') {
            errors.description = "Минимальная длина не менее 5 символов"
        }
        return errors
    }

    return (
        <Form onSubmit={handleItem}
              validate={minLengthField}
              render={(props) => {
                  const {handleSubmit} = props
                  return (
                      <form className="form" onSubmit={handleSubmit}>
                          <Field component={Input} name='description' placeholder={'Enter your task'} className="form__input"/>
                          <ItemButton text="Add task" varient='contained'/>
                      </form>
                  )
              }}
        />
    )
}

export default MainForm