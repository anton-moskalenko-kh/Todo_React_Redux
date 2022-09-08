import {Button} from "@mui/material";

function ItemButton(props) {
    const { text, click, varient, sx} = props
    return (
        <Button variant={varient} sx={sx} size='small' type='submit' onClick={click}>{text}</Button>
    )
}

export default ItemButton
