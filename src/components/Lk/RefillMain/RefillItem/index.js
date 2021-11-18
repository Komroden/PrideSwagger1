import React from 'react';

 export const RefillItem = ({logo,title,action}) => {
    return (
        <div className="popoln_item">
            <div className="popoln_item_logo">
                <img src={logo} alt=""/>
            </div>
            <div className="popoln_item_text">
                <div className="popoln_item_text_top">{action}</div>
                <div className="popoln_item_title">{title}</div>
                <div className="popoln_item_text_bottom">Платежная система</div>
            </div>
            <div className="popoln_item_form">
                <form action="">
                    <input type="number" placeholder="$ 0.00" className="popoln_item_input"/>
                    <button className="popoln_item_btn">
                        <img src="/images/coins.png" alt=""/>
                        <span>{action}</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

