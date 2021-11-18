import React from 'react';

export const LkHomeMainBalanceItem = ({url,bgr,title,text,value,allValue,dayValue,allDayValue}) => {
    return (
        <div className="balance_cost_item" style={{backgroundImage:bgr}}>
            <div className="balance_cost_item_top">
                <div className="balance_cost_item_logo">
                    <img src={url} alt=""/>
                </div>
                <div className="balance_cost_item_left">
                    <div className="balance_cost_item_lefttext">{title}</div>
                    <div className="balance_cost_item_lefttext">{text}</div>
                </div>
                <div className="balance_cost_item_right">
                    <div className="balance_cost_item_right_text">{value}</div>
                    <div className="balance_cost_item_right_text">{allValue}</div>
                </div>
            </div>
            <div className="balance_cost_item_bottom">
                <div className="balance_cost_item_bottom_left">{dayValue}</div>
                <div className="balance_cost_item_bottom_right">{allDayValue}</div>
            </div>
        </div>
    );
};

