import React from 'react';

export const MatrixBlockCard = ({price}) => {
    return (
        <div className="third_level_place">
            <div className="third_level_place_img"/>
            <div className="third_level_place_price">{price}р.</div>
            <a href="#" className="third_level_place_buy">Купить место</a>
        </div>
    );
};

