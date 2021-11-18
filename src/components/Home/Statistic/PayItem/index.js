import React from 'react';

export const PayItem = ({date,object}) => {
    const d= new Date(date)
    return (
        <li >
            <span className="left_stat">{d.toLocaleDateString()}</span>
            <span className="left_pay">выплачено - {object} руб.</span>
        </li>
    );
};

