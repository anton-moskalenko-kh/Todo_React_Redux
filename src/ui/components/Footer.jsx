import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectors} from "../../engine/core/todo/selectors";
import Button from "./Button";
import {clearItems} from "../../engine/core/todo/thunks";

const Footer = () => {
    const items = useSelector(selectors.items)
    const dispatch = useDispatch()

    const deleteAllItems = () => {
        dispatch(clearItems())
    }

    return (
        <div className='footer'>
            <p>Всего: {items.length}</p>
            <Button click={deleteAllItems} text="Очистить"/>
        </div>
    );
};

export default Footer;