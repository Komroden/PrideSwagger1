import React, {useState} from 'react';
import './style.scss';



import {LkBalanceItemsMini} from "../BalanceItemsMini";
import {LkGuestMainGuestItem} from "./LkGuestMainGuestItem";
import {Line} from "../MainTitle/GreyLine";
import Fade from '@mui/material/Fade';



export const LkGuestMain = () => {
    const [openModal,setOpenModal]=useState(false);


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
                            className="red_col">500 человек</span></span>
                    </div>
                    <div className="gost_red_block">
                        <div className="gost_red_block_title">Вы популярны!</div>
                        <div className="gost_red_block_descr">Вам надо больше проводить время на сайте.</div>
                    </div>
                </div>
                <div className="gost_row">
                    <LkGuestMainGuestItem image={'url(/images/u1.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal} />
                    <LkGuestMainGuestItem image={'url(/images/u2.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u3.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u4.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u5.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal} />
                    <LkGuestMainGuestItem image={'url(/images/u6.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u1.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u2.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u3.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u4.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u5.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                    <LkGuestMainGuestItem image={'url(/images/u6.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} setOpenModal={setOpenModal}/>
                </div>
                <a href="#" className="more_news open_more_gost">
                    <span>Покать больше гостей</span>
                    <img src="/images/chev.png" alt=""/>
                </a>
            </div>

        </div>
        </>
    );
};
