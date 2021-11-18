import React from 'react';

export const ProgramItemNoActive = ({img,name,price,status,line}) => {
    return (

            <div className="prog_r_item no_active">
                <div className="prog_r_top">
                    <img src={img} alt=""/>
                    <div className="prog_r_name">{name}</div>
                </div>
                <div className="prog_r_price">{price}</div>
                <div className="prog_r_buy_place">{status}</div>
                <div style={{display: line?'block':'none'}} className="vert_line_red"/>

            </div>


    );
};

