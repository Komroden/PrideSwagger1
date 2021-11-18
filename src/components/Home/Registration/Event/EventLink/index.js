import React from 'react';
import {useHistory} from "react-router";

export const EventLink = ({path,classes,title}) => {
    const {push}=useHistory()
    const handlePush=()=>{
        push(path)
    }
    return (
        <a onClick={handlePush} className={classes}>{title}</a>
    );
};

