import React, { useState} from 'react';
import {useTimer} from "../../../hooks/useTimer";

export const DealItem = ({numberDeal,priceSpeed}) => {
    const[speed,setSpeed]=useState(1);
    const [seconds, setSeconds] = useState(60);
    const [minute, setMinute] = useState(59);
    const [hours, setHours] = useState(59);
    const [day, setDays] = useState(59);
    useTimer('NOV 19,2021',setDays,setHours,setMinute,setSeconds)


    return (
        <div className="deal_item">
            <div className="deal_top">Сделка #{numberDeal}</div>
            <div className="deal_top_row">
                <div className="deal_top_row_left">
                    <div className="deal_top_row_left_top">скорость</div>
                    <div className="deal_top_row_left_numb">{speed}x</div>
                </div>
                <div className="deal_top_row_timer">
                    <div className="deal_top_row_timer_top">
                        <span id="days">{day} </span>
                        <span id="hours">{hours} </span>
                        <span id="minutes">{minute} </span>
                        <span id="seconds">{seconds} </span>
                    </div>
                    <div className="deal_top_row_timer_bottom">
                        <span>Дни</span>
                        <span>Часы</span>
                        <span>Минут</span>
                        <span>Секунд</span>
                    </div>
                </div>
            </div>
            <div className="deal_item_money">
                <div className="deal_item_money_left">Ваш <br/>заработок</div>
                <div className="deal_item_money_right">15 679 Руб.</div>
            </div>
            <div className="deal_item_range">
                <div className="form_entry_in_program_bottom_range">
                    <form>
                        <div className="form_entry_in_program_bottom_range_top">
                            <input type="text" name="amountInput2" min="1" max="10" value={speed}
                                   />
                            <span>х Скорость</span>
                        </div>
                        <div className="form_entry_in_program_bottom_range_center">
                            <input type="range" name="amountRange2" min="1" max="10"
                                   onChange={event => setSpeed(event.target.value)}/>
                        </div>
                        <div className="form_entry_in_program_bottom_range_bottom">
                            <div className="form_entry_in_program_bottom_range_bottom_left">1х Скорость.</div>
                            <div className="form_entry_in_program_bottom_range_bottom_right">10х скорость</div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="deal_item_btns">
                <a href="#" className="deal_item_pay_btn">
                    + {speed*priceSpeed} рублей
                    <span>Оплатить</span>
                </a>
                <a href="#" className="deal_item_cansel_btn">Разорвать <br/> сделку</a>
            </div>
        </div>
    );
};

