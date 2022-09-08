import React from 'react';
import TextField from '@mui/material/TextField';
import {useStyle} from "./style";


function Search (props) {
    const {onChange} = props
    const classes = useStyle()

    return (
        <div className={classes.search}>
            <h2 className={classes.header}>Your Tasks:</h2>
            <TextField
                id="standard-search"
                label="Search tasks"
                type="search"
                variant="standard"
                onChange={onChange}
            />
        </div>
    )
}

export default Search