import React from 'react';

export const LkHomeMainDetailItem = ({currency,value,course,index}) => {
    return (
        <div className="detail_cost_item">
            <div className="detail_cost_logo">
                <img src={`/images/e${index+1}.png`} alt=""/>
            </div>
            <div className="detail_cost_curency">{currency}</div>
            <div className="detail_cost_value">{value.toFixed(2)+' USD'}</div>
            <div className="detail_cost_green_value">{value.toFixed(2)/course+' BTC'}</div>
            <div className="detail_cost_img">
                <img src='/images/i2.png' alt=""/>
            </div>
        </div>
    );
};

