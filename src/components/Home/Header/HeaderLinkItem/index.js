import React from 'react';
import {useHistory} from "react-router";

export const HeaderLinkItem = ({title,path}) => {
    const {push}=useHistory()
    const handlePush=(e) => {
        e.preventDefault()
        push(path)
    }
    return (
        <a href={'/'} onClick={handlePush}>{title}</a>
    );
};

