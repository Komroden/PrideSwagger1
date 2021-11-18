import React from 'react';

export const ProgramItem = ({img,name,price}) => {
    return (

            <div className="prog_r_item">
                <div className="prog_r_top">
                    <img src={img} alt=""/>
                    <div className="prog_r_name">{name}</div>
                </div>
                <div className="prog_r_price">{price}</div>
                <a href="#" className="prog_r_buy_place">Купить место</a>

        </div>
    );
};