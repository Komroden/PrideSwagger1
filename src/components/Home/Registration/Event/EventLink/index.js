import React from 'react';
import {useHistory} from "react-router";

export const EventLink = ({path,classes,title}) => {
    const {push}=useHistory()
    const handlePush=(e)=>{
        e.preventDefault()
        push(path)
    }
    return (
        <a href={'/'} onClick={handlePush} className={classes}>{title}</a>
    );
};

