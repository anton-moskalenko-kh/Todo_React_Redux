import React from 'react';
import {useSelector} from "react-redux";
import {selectors} from "../../engine/core/todo/selectors";

const Footer = () => {
    const items = useSelector(selectors.items)

    return (
        <div>
            Всего: {items.length}
        </div>
    );
};

export default Footer;