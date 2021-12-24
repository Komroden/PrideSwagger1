import React, { useState} from 'react';
import {useTimer} from "../../../../hooks/useTimer";
import Fade from "@mui/material/Fade";
import {useImage} from "../../../../hooks/useImage";
import {SnackBar} from "../../../Home/Snackbar";
import {useFetchPayStringParametrs} from "../../../../hooks/useFetchPayStringParametrs";




export const DrawItem = ({imgPrice,priceAdd,title,desc,date,members,startDate,id}) => {
    const {pic}=useImage(imgPrice,'/images/prize.png')
    let d =new Date(startDate)
    const [pay,setPay]=useState(false)
    const {hours,seconds,minute}= useTimer(date);
    const [valueType,setValueType]=useState('Usdc')

    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })

    const addContest=useFetchPayStringParametrs(`http://lk.pride.kb-techno.ru/api/Contest/participate/${id}?accountName=${valueType}`,'POST',setOpenSnack,'Вы учавствуете в конкурсе!')
    // const handleAdd =()=>{
    //     fetch(`http://lk.pride.kb-techno.ru/api/Contest/participate/${id}`,{
    //         method:'POST',
    //         headers:{
    //             'Accept': 'application/json',
    //             'Authorization':`Bearer ${auth.token}`},
    //
    //     })
    //         .then(res=> {
    //             if (res.status === 422) {
    //                 let error = new Error('Недостаточно средств');
    //                 error.response = res;
    //                 throw error
    //             }
    //             res.json()
    //         })
    //         .then(body=> {
    //             setOpenSnack({
    //                 status:true,
    //                 text:'Вы участвуете в конкурсе',
    //                 color:'success'
    //             })
    //         })
    //         .catch(error=> {
    //             setOpenSnack({status:true,
    //                 text:error.message,
    //                 color:'error'})
    //         })
    // }


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
                            <span  className="add_top">Выберете  кошелек :</span><br/>
                            <select  style={{width:'50%',marginBottom:'20px',height:'40px'}} className="dark_input"  defaultValue={'Usdc'}  onChange={e=>setValueType(e.target.value)}   name="valueType">
                                <option value='Usdc' >USDC</option>
                                <option value='Bitcoin' >BTC</option>
                                <option value='Ethereum' >ETH</option>
                                <option value='Litecoin' >LITE</option>
                            </select>
                            <button onClick={()=>addContest.handleFetch()} className="form_sbmOpen texp_button_modal" >Подтвердить</button>
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
                        <div className="rozgr_item_big_hours"><span id="hour">{Math.abs(hours)}</span>:<span id="minutes">{Math.abs(minute)}</span>:<span
                            id="seconds">{Math.abs(seconds)}</span></div>

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

            <SnackBar open={openSnack} setOpen={setOpenSnack}/>

        </div>
        </>
    );
};

