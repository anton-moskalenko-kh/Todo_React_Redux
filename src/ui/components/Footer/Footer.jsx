import React from 'react';

//Core
import {useDispatch, useSelector} from "react-redux";
import Selectors from "../../../engine/core/todo/selectors";
import {clearItems} from "../../../engine/core/todo/thunks";

//Parts
import Button from "../Button/Button";

//Style
import {useStyle} from "./style";

const Footer = () => {
    const items = useSelector(Selectors.memoItems)
    const dispatch = useDispatch()
    const classes = useStyle()

    const deleteAllItems = () => {
        dispatch(clearItems())
    }

    return (
        <div className={classes.footer}>
            <p className={classes.footerText}>Total: {items.length}</p>
            <Button click={deleteAllItems} text="Delete all"/>
        </div>
    );
};

export default Footer;