import {TextField} from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {errorStyle} from "./style";

function Input(props) {
    const {input, meta, ...rest} = props
    return (
        <>
            <TextField onChange={input.onChange} value={input.value} {...rest} />
            {meta.error && meta.touched &&
            <Stack sx={{ ...errorStyle }} spacing={2}>
                <Alert severity="error">{meta.error}</Alert>
            </Stack>}
        </>
    )

}

export default Input