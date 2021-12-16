import React, {useEffect, useState} from 'react';
import './style.scss';



import {LkBalanceItemsMini} from "../BalanceItemsMini";
import {LkGuestMainGuestItem} from "./LkGuestMainGuestItem";
import {Line} from "../MainTitle/GreyLine";
import Fade from '@mui/material/Fade';
import {useSelector} from "react-redux";
import {useText} from "../../../hooks/useText";



export const LkGuestMain = () => {
    const { auth } = useSelector((state) => state);
    const [openModal,setOpenModal]=useState(false);
    const [value,setValue]=useState([])
    const text=useText(value.length,'Человек','Человека','Человек')
    useEffect(()=>{
        if(auth.token) {
            fetch('http://lk.pride.kb-techno.ru/api/Profile/guest-list', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => setValue(body))
                .catch(error => console.log(error))
        }
        return ()=>{setValue([])}
    },[auth.token])


    return (
        <>
            <Fade  in={openModal}>
        <div className='modal__wrapper'>
            <div className='modal__text'>
                <div onClick={()=>setOpenModal(false)} className="close_menu_btn close_window">
                    <span className="before arrow_color"/>
                    <span className="after arrow_color"/>
                </div>
                Пользователь вас заблокировал
            </div>
        </div>
            </Fade>
        <div className="main_content_central">
            <LkBalanceItemsMini/>
            <Line/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl gost_top">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">Гости</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про
                            голосование
                        </div>
                    </div>
                    <div className="gost_text_center">
                        <span className="bid_t"> Статистика: </span>
                        <span className="norm_text">вами интересовались за неделю <span
                            className="red_col">{value.length+' '+text}</span></span>
                    </div>
                    {value.length>25&&<div className="gost_red_block">
                        <div className="gost_red_block_title">Вы популярны!</div>
                        <div className="gost_red_block_descr">Вам надо больше проводить время на сайте.</div>
                    </div>}
                    {value.length>10&&<div className="gost_red_block" style={{backgroundColor: '#e6fa8e',color:'#0f20d9'}}>
                        <div className="gost_red_block_title">Вами Интересуются!</div>
                        <div className="gost_red_block_descr">Продолжайте в том же духе.</div>
                    </div>}
                    {value.length<10&&<div className="gost_red_block" style={{backgroundColor: '#8efa9f',color:'#122928'}}>
                        <div className="gost_red_block_title">О Вас знают!</div>
                        <div className="gost_red_block_descr">Проявляйте активность на платформе.</div>
                    </div>}
                </div>
                <div className="gost_row">
                    {value.map(item=><LkGuestMainGuestItem key={item.id} id={item.id}  name={item.firstName} setOpenModal={setOpenModal} image={item.image} isOnline={item.isOnline} year={item.yearsOld}/>)}
                </div>
                {value.length>15&&<a href="/" className="more_news open_more_gost">
                    <span>Покать больше гостей</span>
                    <img src="/images/chev.png" alt=""/>
                </a>}
            </div>

        </div>
        </>
    );
};
