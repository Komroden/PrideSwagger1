import React from 'react';

export const MatrixCard = ({number,img,name,date}) => {
    return (
        <div className="prog_card">
            <div className="prog_card_code">#{number}</div>
            <div className="prog_card_img">
                <img src={img} alt=""/>
            </div>
            <div className="prog_card_name">{name}</div>
            <div className="prog_card_date">{date}0</div>
            <a href="#" className="prog_card_btn">
                <img src="/images/close.png" alt=""/>Заблокировать</a>
        </div>
    );
};

