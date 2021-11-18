import React from 'react';
import {useHistory} from "react-router";


export const UsePath = ({path}) => {
    const {push}=useHistory()
    const handlePush=() => {
        push({path})
    }

    return ({
            handlePush
        }

    );
};

