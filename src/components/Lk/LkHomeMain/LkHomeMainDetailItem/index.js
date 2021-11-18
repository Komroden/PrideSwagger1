import React from 'react';

export const LkHomeMainDetailItem = ({logo,currency,allValue,value,img}) => {
    return (
        <div className="detail_cost_item">
            <div className="detail_cost_logo">
                <img src={logo} alt=""/>
            </div>
            <div className="detail_cost_curency">{currency}</div>
            <div className="detail_cost_value">{allValue}</div>
            <div className="detail_cost_green_value">{value}</div>
            <div className="detail_cost_img">
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

