import React, {useEffect, useState} from 'react';



import {useTimer} from "../../../hooks/useTimer";
import {ModalConfirm} from "./modalConfirm";



export const DealItemCancel = ({numberDeal,value,isTimeout}) => {
    const [open,setOpen]=useState(false)
    const [success,setSuccess]=useState(false)
    useEffect(()=>{
        if(success){
            setSuccess(false)
            // какая-то функция
            console.log('Отправлено')
        }

    },[success])
    const handleCancel=(e)=>{
        e.preventDefault()
        setOpen(true)
    }


    const {day,hours,minute,seconds}=useTimer('2022-01-13');




    return (
        <div className="cancel_item deal_item">
            <div className="deal_top">Сделка #{numberDeal}</div>
            <ModalConfirm open={open} setOpen={setOpen} setSuccess={setSuccess} isDate={true}/>
            <div style={{marginBottom:isTimeout?'15px':''}} className="text_vozvrat">
                <p >{isTimeout?'Сделка закрыта':'Возврат депозита через:'}</p>
            </div>
            <div className="deal_top_row">

                <div className="cancel_timer deal_top_row_timer">
                    {isTimeout&& <div  className=" deal_top_row_timer_top deal_item_cloze ">Депозит возвращен</div>}
                    {!isTimeout&&<div className=" deal_top_row_timer_top ">
                        <span id="days">{day} </span>
                        <span id="hours">{hours} </span>
                        <span id="minutes">{minute} </span>
                        <span id="seconds">{seconds} </span>
                    </div>}
                    {!isTimeout&&<div className="deal_top_row_timer_bottom">
                        <span>Дни</span>
                        <span>Часы</span>
                        <span>Минуты</span>
                        <span>Секунды</span>
                    </div>}
                </div>
            </div>
            <div className="deal_item_money">
                <div className="deal_item_money_left">Ваш <br/>заработок</div>
                <div className="deal_item_money_right">{value}</div>
            </div>
            {!isTimeout&&<div className="deal_item_range">
                <div className="form_entry_in_program_bottom_range">
                    <form>

                        <div className="input_strax">
                            <label >Вклад застрахован</label>
                        </div>
                    </form>
                </div>
            </div>}
            {!isTimeout&&<div className="deal_item_btns">
                <a href="/" onClick={handleCancel} style={{width:'100%'}} className="deal_item_pay_btn">
                    <span>Возобновить</span>
                </a>
            </div>}
        </div>
    );
};