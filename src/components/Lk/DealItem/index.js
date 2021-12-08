import React, { useState} from 'react';


import {useTimerDeal} from "../../../hooks/useTimerDeal";


export const DealItem = ({numberDeal,minValue,percent}) => {
    const[speed,setSpeed]=useState(1);

    const {day,hours,minute,seconds,price}=useTimerDeal(minValue, 3, speed)


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
                        <span>Минуты</span>
                        <span>Секунды</span>
                    </div>
                </div>
            </div>
            <div className="deal_item_money">
                <div className="deal_item_money_left">Ваш <br/>заработок</div>
                <div className="deal_item_money_right">{price}</div>
            </div>
            <div className="deal_item_range">
                <div className="form_entry_in_program_bottom_range">
                    <form>
                        <div className="form_entry_in_program_bottom_range_top">
                            <input type="text" name="amountInput2" min="1" max="5" value={speed} readOnly
                                   />
                            <span>х Скорость</span>
                        </div>
                        <div className="form_entry_in_program_bottom_range_center">
                            <input defaultValue={'1'} type="range" name="amountRange2" min="1" max="5"
                                   onChange={event => setSpeed(event.target.value)}/>
                        </div>
                        <div className="form_entry_in_program_bottom_range_bottom">
                            <div className="form_entry_in_program_bottom_range_bottom_left">1х Скорость.</div>
                            <div className="form_entry_in_program_bottom_range_bottom_right">5х скорость</div>
                        </div>
                        <div className="input_strax">
                            <label >Вклад застрахован</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="deal_item_btns">
                <a href="/" className="deal_item_pay_btn">
                    + {1*speed} USD
                    <span>Оплатить</span>
                </a>
                <a href="/" className="deal_item_cansel_btn">Разорвать <br/> сделку</a>
            </div>
        </div>
    );
};

