import React, { useState} from 'react';
import {useTimer} from "../../../../hooks/useTimer";

export const AutoDealItem = ({number,value,percent,url}) => {
    const [seconds, setSeconds] = useState(60);
    const [minute, setMinute] = useState(59);
    const [hours, setHours] = useState(59);
    const [day, setDays] = useState(59);
    useTimer('NOV 19,2021',setDays,setHours,setMinute,setSeconds)
    return (
        <div className="deal_item">
            <div className="deal_top">Сделка #{number}</div>
            <div className="deal_top_row">
                <div className="deal_top_row_left">
                    <div className="deal_top_row_left_top">взнос</div>
                    <div className="deal_top_row_left_numb">{percent}%</div>
                </div>
                <div className="deal_top_row_timer">
                    <div className="deal_top_row_timer_top">
                        <span id="days">{day}</span>:
                        <span id="hours">{hours}</span>:
                        <span id="minutes">{minute}</span>:
                        <span id="seconds">{seconds}</span>
                    </div>
                    <div className="deal_top_row_timer_bottom">
                        <span>Дни</span>
                        <span>Часы</span>
                        <span>Минут</span>
                        <span>Секунд</span>
                    </div>
                </div>
            </div>
            <div className="dealroww">
                <div className="dealroww__title">внесено:</div>
                <div className="dealroww__value">{value} Руб.</div>
            </div>
            <div className="dealroww__img">
                <img src={url} alt=""/>
            </div>
            <div className="deal_item_btns">
                <a href="#" className="dealroww__link"><span>+</span> Разорвать сделку</a>
            </div>
        </div>
    );
};

