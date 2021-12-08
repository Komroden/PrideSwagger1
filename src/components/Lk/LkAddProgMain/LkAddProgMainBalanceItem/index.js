import React from 'react';
import {useCourse} from "../../../../hooks/useCourse";

export const LkAddProgMainBalanceItem = ({url,bgr,title,text,value}) => {
    const course=useCourse(text)
    return (
        <div className="balance_cost_item" style={{backgroundImage:bgr}}>
            <div className="balance_cost_item_top">
                <div className="balance_cost_item_logo">
                    <img src={url} alt=""/>
                </div>

                <div className="balance_cost_item_left">
                    <div className="balance_cost_item_lefttext">{title}</div>
                    <div className="balance_cost_item_lefttext">{text==='CurrenyPriceInfoT'?'USDT':text}</div>
                </div>
                <div className="balance_cost_item_right">
                    <div className="balance_cost_item_right_text">{(value/course).toFixed(2)+' '+(text==='CurrenyPriceInfoT'?'USDT':text)}</div>
                    <div className="balance_cost_item_right_text">{value+' USD'}</div>
                </div>
            </div>
        </div>
    );
};