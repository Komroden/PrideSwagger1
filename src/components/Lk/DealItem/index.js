import React, {useEffect, useState} from 'react';


import {useTimerDeal} from "../../../hooks/useTimerDeal";
import {ModalConfirm} from "./modalConfirm";
import {useText} from "../../../hooks/useText";



export const DealItem = ({numberDeal,minValue,percent}) => {
    const[speed,setSpeed]=useState(1);
    const [open,setOpen]=useState(false)
    const [success,setSuccess]=useState(false)
    const {day,hours,minute,seconds,price}=useTimerDeal(minValue, 3, speed)
    const minText=useText(minute,"Минута","Минуты","Минут");
    const secText=useText(seconds,"Секунда","Секунды","Секунд");
    const hourText=useText(hours,"Час","Часа","Часов");
    const dayText=useText(day,"День","Дня","Дней");
    const handleCancel=(e)=>{
        e.preventDefault()
        setOpen(true)
    }
    useEffect(()=>{
        if(success){
            setSuccess(false)
            // какая-то функция
            console.log('Отправлено')
        }

    },[success])


    return (
        <div  className="deal_item">
            <ModalConfirm open={open} setOpen={setOpen} setSuccess={setSuccess}/>

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
                        <span>{dayText}</span>
                        <span>{hourText}</span>
                        <span>{minText}</span>
                        <span>{secText}</span>
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
                <a href="/" onClick={handleCancel} className="deal_item_cansel_btn">Разорвать <br/> сделку</a>
            </div>
        </div>
    );
};

