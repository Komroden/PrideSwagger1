import React from 'react';
import {useCourse} from "../../../../hooks/useCourse";
import {useDaysOnMounth} from "../../../../hooks/useDaysOnMounth";

export const CalcItem = ({type,mountProfit,}) => {
    const days=useDaysOnMounth()
    const course=useCourse(type)
    return (
        <>
            <div className="flex_row take_money">
                <div className="take_money_left">
                    <div className="take_money_tit">Ежедневный доход:</div>
                    <div className="take_money_sum fiolet_t">{(mountProfit*course/days).toFixed(2) +' USD'}</div>
                </div>
                <div className="take_money_right">
                    <div className="take_money_tit">Общий доход:</div>
                    <div className="take_money_sum green_t">{(mountProfit*course).toFixed(2) +' USD'}</div>
                </div>

            </div>

        </>
    );
};

