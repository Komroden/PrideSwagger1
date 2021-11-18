import React from 'react';

import './style.scss';
import {LkUserInfoItem} from "./LkUserInfoItem";
import {useSelector} from "react-redux";
import {ENDPOINT} from "../../../api/endpoints";

export const LkUserMain = () => {
    const { auth } = useSelector((state) => state);
    const url = ENDPOINT
    //id props
    const handleBlockById=()=>{
        let payload={
            id:'3'
        }
        fetch(`${url}/api/auth/block-user`, {
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    }
    const handleUnblockById=()=>{
        let payload={
            id:'3'
        }
        fetch(`${url}/api/auth/unblock-user`, {
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    }
    return (
        <>

            <div className="balance_cost">
                <div className="balance_cost_title balancenew_cost_title">Балансы счетов: <span>NATALIA Familia</span>
                </div>
            </div>
            <div className="user_main_block userblockplus">
                <div className="userblockplus__top">
                    <div className="userblockplus__topleft">
                        <div className="userblockplus__photo">
                            <div className="user_main_block_logo">
                                <img src="/images/user.png" alt=""/>
                            </div>
                            <div className="userblockplus__photolink">
                                <a href="#">Добавить в друзья</a>
                                <button className="form_sbmOpen userBlock_sendMessage" >Отправить сообщение</button>
                            </div>
                        </div>
                        <div className="userblockplus__detail">
                            <div className="user_main_block_info">
                                <div className="user_main_block_info_top">
                                    <div className="user_main_block_years">27 <span>лет</span></div>
                                    <div className="user_main_block_verif">
                                        <img src="/images/checkk.png" alt=""/>
                                            <span>Верефикация <br/>пройдена</span>
                                    </div>

                                </div>
                                <div className="user_main_block_name">Natalia Familia</div>
                            </div>
                        </div>
                    </div>
                    <div className="userblockplus__topright">
                        <div className="userblockplus__star">
                            <div className="user_main_block_vip">
                                <div className="user_main_block_vip_top">
                                    <img src="/images/vip.png" alt=""/>
                                </div>
                                <div className="user_main_block_vip_star">
                                    <img src="/images/star.png" alt=""/>
                                        <img src="/images/star.png" alt=""/>
                                            <img src="/images/star.png" alt=""/>
                                </div>
                                <div className="user_main_block_vip_text">VIP Пользователь</div>
                            </div>
                        </div>
                        <div className="userblockplus__curator">
                            <div className="user_main_block_last">
                                <div className="user_main_block_last_bottom">
                                    <img src="/images/curator.png" alt=""/>
                                        <div className="user_main_block_last_bottom_text">
                                            <span>Куратор</span>
                                            <a href="#">Волкова Анастасия</a>
                                        </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="userblockplus__bottom">
                    <div className="userblockplus__botleft">
                        <LkUserInfoItem title={'Telephone:'} text={'+12 345 5662 66'} url={"/images/icon_tel.png"} href={"tel:+12345566266"}/>
                        <LkUserInfoItem title={'Email:'} text={'superlady@gmail.com'} url={"/images/icon_email.png"} href={"mailto:superlady@gmail.com"}/>
                        <LkUserInfoItem title={'Telegram:'} text={'+12 345 5662 66'} url={"/images/icon_telegram.png"} href={"#"}/>
                    </div>
                    <div className="userblockplus__botright">
                        <LkUserInfoItem title={'Vkontakte:'} text={'vk.com/username'} url={"/images/icon_vk.png"} href={"#"} classes={'userinfo_grey'}/>
                        <LkUserInfoItem title={'Facebook:'} text={'fb.com/username'} url={"/images/icon_fb.png"} href={"#"} classes={'userinfo_grey'}/>
                        <LkUserInfoItem title={'Twitter:'} text={'twitter.com/username'} url={"/images/icon_twitter.png"} href={"#"} classes={'userinfo_grey'}/>
                        <LkUserInfoItem title={'Instagram:'} text={'instagram.com/use..'} url={"/images/icon_insta.png"} href={"#"} classes={'userinfo_grey'}/>
                        <LkUserInfoItem title={'Youtube:'} text={'youtube.com/use..'} url={"/images/icon_yout.png"} href={"#"} classes={'userinfo_grey'}/>
                    </div>
                </div>
                {/*<div className='crop_buttons'>*/}
                {/*    <button onClick={handleUnblockById} className="form_sbmOpen" >Разблокировать</button>*/}
                {/*    <button onClick={handleBlockById} className="form_sbmOpen form_sbmOpen_clear" >Заблокировать</button>*/}
                {/*</div>*/}
            </div>

            <div className="home2img">
                <img src="/images/home2.png" alt=""/>
            </div>

        </>

    );
};

