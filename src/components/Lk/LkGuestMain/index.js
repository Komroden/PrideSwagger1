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
                    <div className="gost_red_block">
                        <div className="gost_red_block_title">Вы популярны!</div>
                        <div className="gost_red_block_descr">Вам надо больше проводить время на сайте.</div>
                    </div>
                </div>
                <div className="gost_row">
                    {value.map(item=><LkGuestMainGuestItem key={item.id} id={item.id}  name={item.firstName} setOpenModal={setOpenModal} image={item.image} isOnline={item.isOnline} year={item.yearsOld}/>)}
                </div>
                <a href="/" className="more_news open_more_gost">
                    <span>Покать больше гостей</span>
                    <img src="/images/chev.png" alt=""/>
                </a>
            </div>

        </div>
        </>
    );
};
