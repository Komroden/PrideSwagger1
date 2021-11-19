import React from 'react';
import {useHistory} from "react-router";

export const LkHomeHeaderLinks = ({url,color,path,count}) => {
    const {push}=useHistory()
    const handlePush=() => {
        push(path)
    }
    return (
        <div className="links_header_item">
            <a onClick={handlePush}>
                <img src={url} alt=""/>
                <span className={'links_header_item_number '+color} >{count}</span>
            </a>
        </div>
    );
};

