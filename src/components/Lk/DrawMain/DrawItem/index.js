import React, { useState} from 'react';
import {useTimer} from "../../../../hooks/useTimer";

import Fade from "@mui/material/Fade";
import {useImage} from "../../../../hooks/useImage";




export const DrawItem = ({imgPrice,priceAdd,title,desc,date,members,startDate}) => {
    const {pic}=useImage(imgPrice,'/images/prize.png')
    let d =new Date(startDate)
    const [pay,setPay]=useState(false)
    const {hours,seconds,minute}= useTimer(date);

    return (
        <>
            <Fade  in={pay}>
                <div className='modal__wrapper'>
                    <div className='modal__text priceModal_noPadding'>
                        <div onClick={()=>setPay(false)} className="close_menu_btn close_window">
                            <span className="before arrow_color"/>
                            <span className="after arrow_color"/>
                        </div>
                        <div className='text__wrapper'>
                        <div className="balance_sidebar_title texp_price_modal">Стоймость входа</div>
                            <div className="balance_sidebar_total texp_priceValue_modal">{priceAdd+' руб.'}</div>
                            <button className="form_sbmOpen texp_button_modal" >Подтвердить</button>
                        </div>
                    </div>
                </div>
            </Fade>
        <div className="rozgr_item">
            <div className="rozgr_item_left">
                <div className="rozgr_item_left_row">
                    <div className="rozgr_item_left_img">
                        <img src={pic} alt=""/>
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

                    {/*<Zoom in={pay}>{<div className="balance_sidebar pay_confirm">*/}
                    {/*    <div onClick={()=>setPay(!pay)} className="close_menu_btn modal_pay">*/}
                    {/*        <span className="before modal_pay_height"/>*/}
                    {/*        <span className="after modal_pay_height"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="balance_sidebar_title">Стоймость входа</div>*/}
                    {/*    <div className="balance_sidebar_total">{priceAdd+' руб.'}</div>*/}
                    {/*    <button className="form_sbmOpen" >Подтвердить</button>*/}
                    {/*</div>}</Zoom>*/}

        </div>
        </>
    );
};

