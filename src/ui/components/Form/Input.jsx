import {TextField} from "@mui/material";

function Input(props) {
    const {input, ...rest} = props
    return (
        <>
            <TextField onChange={input.onChange} value={input.value} {...rest} />
        </>
    )

}

export default Input