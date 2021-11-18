import React from 'react';
import {useHistory} from "react-router";

export const HeaderLinkItem = ({title,path}) => {
    const {push}=useHistory()
    const handlePush=() => {
        push(path)
    }
    return (
        <a onClick={handlePush}>{title}</a>
    );
};

