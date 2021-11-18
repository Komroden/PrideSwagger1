import React from 'react';

export const LkHistoryMainItem = ({img,date,time,id,from,color,to,value,price,status,colorStatus}) => {
    return (
        <div className="history_item">
            <div className="history_item_img">
                <img src={img} alt=""/>
            </div>
            <div className="history_item_descr">
                <div className="history_item_code">{id}</div>
                <div className="history_item_date"><img src="/images/calend.png" alt=""/>{date}</div>
                <div className="history_item_time">
                    <img src="/images/clock.png" alt=""/>{time}
                </div>
            </div>
            <div className="history_item_text">
                <div className={color}>{from}</div>
                <div className="history_item_span">{to}</div>
            </div>
            <div className="history_item_coints">{value} <br/>btc</div>
            <div className="history_item_price">{price}</div>
            <div className="history_item_btn">
                <a href="#" className={"history_item_b "+colorStatus}>{status}</a>
            </div>
            <div className="history_item_dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

