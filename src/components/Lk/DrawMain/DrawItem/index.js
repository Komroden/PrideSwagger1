import React, { useState} from 'react';
import {useTimer} from "../../../../hooks/useTimer";
import Zoom from '@mui/material/Zoom';




export const DrawItem = ({imgPrice,priceAdd,title,desc,date,members,startDate}) => {
    let d =new Date(startDate)
    const [pay,setPay]=useState(false)
    const {hours,seconds,minute}= useTimer(date);

    return (
        <div className="rozgr_item">
            <div className="rozgr_item_left">
                <div className="rozgr_item_left_row">
                    <div className="rozgr_item_left_img">
                        <img src={imgPrice} alt=""/>
                    </div>
                    <div className="rozgr_item_left_descr">
                        <div className="rozgr_item_left_title">{title}</div>
                        <div className="rozgr_item_left_descr_text">{desc}
                        </div>
                    </div>
                </div>
                <div className="rozgr_item_left_row rozgr_item_left_row_bottom">
                    <div className="rozgr_item_left_bot_text">Конкурс добавлен {d.toLocaleDateString()}</div>
                    <div className="rozgr_item_left_bot_text rozgr_item_left_bot_text_r"><img
                        src="/images/face.png" alt=""/> В конкурсе участвую {members} человек</div>
                </div>
            </div>
            <div className="rozgr_item_right">
                <div className="rozgr_item_timer">
                    <div className="rozgr_item_img">
                        <img src="/images/timer.png" alt=""/>
                    </div>
                    <div className="rozgr_item_hours">
                        <div className="rozgr_item_big_hours"><span id="hour">{hours}</span>:<span id="minutes">{minute}</span>:<span
                            id="seconds">{seconds}</span></div>

                        <div className="rozgr_item_hours_descr">Окончание конкурса</div>
                    </div>
                </div>
                <div className="rozgr_item_text">
                    <img src="/images/price_small.png" alt=""/>Стоимость участия:
                    <span>{priceAdd} р.</span>
                </div>
                <button onClick={()=>setPay(!pay)} className="rozgr_item_btn">Участвовать!</button>


            </div>
                    <Zoom in={pay}>{<div className="balance_sidebar pay_confirm">
                        <div onClick={()=>setPay(!pay)} className="close_menu_btn modal_pay">
                            <span className="before modal_pay_height"/>
                            <span className="after modal_pay_height"/>
                        </div>
                        <div className="balance_sidebar_title">Стоймость входа</div>
                        <div className="balance_sidebar_total">{priceAdd+' руб.'}</div>
                        <button className="form_sbmOpen" >Подтвердить</button>
                    </div>}</Zoom>

        </div>
    );
};

