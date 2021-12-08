import React from 'react';

export const RegistItem = ({date,object}) => {
    let d= new Date(date)
    return (
        <li >
            <span className="left_stat">{d.toLocaleDateString()}</span>
            <span className="left_user">{object}</span>

        </li>
    );
};

