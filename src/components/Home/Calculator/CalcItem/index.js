import React from 'react';

export const CalcItem = ({type,dayProfit,mountProfit,}) => {
    const mount1=new Date().getMonth();
    const mount2=new Date().getMonth()+1;
    const year=new Date().getFullYear();
    const date1 = new Date(year, mount1, 1);
    const date2 = new Date(year, mount2, 1);
    const days = Math.round((date2 - date1) / 1000 / 3600 / 24);
    return (
        <>
            <div className="flex_row take_money">
                <div className="take_money_left">
                    <div className="take_money_tit">Ежедневный доход:</div>
                    <div className="take_money_sum fiolet_t">{(mountProfit/days).toFixed(2) +' '+ type}</div>
                </div>
                <div className="take_money_right">
                    <div className="take_money_tit">Общий доход:</div>
                    <div className="take_money_sum green_t">{mountProfit.toFixed(2) +' '+ type}</div>
                </div>

            </div>

        </>
    );
};

