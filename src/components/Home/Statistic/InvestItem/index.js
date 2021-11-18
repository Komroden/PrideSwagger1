import React from 'react';

export const InvestItem = ({date,object}) => {
    const d= new Date(date)
    return (
        <li >
            <span className="left_stat">{d.toLocaleDateString()}</span>
            <span className="left_money">Инвестированно - {object} р</span>
        </li>
    );
};

