import React from 'react';
import {useCourse} from "../../../../hooks/useCourse";
import {useProfit} from "../../../../hooks/useProfit";

export const LkHomeMainBalanceItem = ({url,bgr,title,text,value}) => {
    const course=useCourse(text)
    const profit=useProfit(text)

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
            <div className="balance_cost_item_bottom">
                <div className="balance_cost_item_bottom_left">{'1 '+(text==='CurrenyPriceInfoT'?'USDT':text)+' - '+(1*course).toFixed(2)+' USD'}</div>
                <div className="balance_cost_item_bottom_right">{Math.ceil(profit*course)+' $'}</div>
            </div>
        </div>
    );
};

