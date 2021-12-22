import React, { useState} from 'react';

import './style.scss';
import {LkUserInfoItem} from "./LkUserInfoItem";
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router";
import {UseYears} from "../../../hooks/useYears";
import {SendMessage} from "./SendMessage";
import {useFetchWithTokenGet} from "../../../hooks/useFetchWithTokenGet";

export const LkUserMain = () => {
    const { auth,allInfoUser } = useSelector((state) => state);
    // const [value,setValue]=useState({})

    const [status,setStatus]=useState(false)
    const {push}=useHistory()
    const{id}=useParams()
    const handlePushSponsor=(e) => {
        e.preventDefault()
        push(`/user${value.partnerId}`)
    }
    const value =useFetchWithTokenGet(`http://lk.pride.kb-techno.ru/api/Profile/view-profile/${id}`,{})
    // useEffect(()=>{
    //     fetch(`http://lk.pride.kb-techno.ru/api/Profile/view-profile/${id}`,{
    //         method:'GET',
    //         headers:{
    //             'accept': 'application/json',
    //             'Authorization':`Bearer ${auth.token}`}
    //     })
    //         .then(res=>res.json())
    //         .then(body=>setValue(body))
    //         .catch(error=>console.log(error))
    // },[auth.token,id])
    const {text}=UseYears(value.yearsOld)


    //id props
    const handleBlockById=()=>{
        fetch(`http://lk.pride.kb-techno.ru/api/Chat/block-user/${id}`, {
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    }
    const handleAddFriend=(e)=>{
        e.preventDefault()
    }
    return (
        <>

            <div className="balance_cost">
                <div className="balance_cost_title balancenew_cost_title">Балансы счетов: <span>{value.firstName+' '+value.lastName}</span>
                </div>
            </div>
            <div className="user_main_block userblockplus">
                <div className="userblockplus__top">
                    <div className="userblockplus__topleft">
                        <div className="userblockplus__photo">
                            <div className="user_main_block_logo">
                                {/*//image*/}
                                <img src={allInfoUser.avatar?allInfoUser.avatar:'/images/logo_dark.png'} alt=""/>
                            </div>
                            <div className="userblockplus__photolink">
                                {!value.isCurrentUser&& <a href="/" onClick={handleAddFriend}>Добавить в друзья</a>}
                                {value.isCurrentUser&&<p className='your__profile'>Ваш профиль</p>}
                                {!value.isCurrentUser&&<button onClick={()=>setStatus(!status)} className="form_sbmOpen userBlock_sendMessage">Отправить сообщение</button>}
                                {!value.isCurrentUser&&<SendMessage id={id} status={status}/>}
                                {!value.isCurrentUser&& <button style={{marginTop:status?'20px':''}} onClick={handleBlockById} className="form_sbmOpen form_sbmOpen_clear">Заблокировать</button>}
                            </div>
                        </div>
                        <div className="userblockplus__detail">
                            <div className="user_main_block_info">
                                <div className="user_main_block_info_top">
                                    {value.yearsOld && value.yearsOld < 100&&<div
                                        className="user_main_block_years">{value.yearsOld}
                                        <span>{text}</span></div>}
                                    <div className={value.isVerified?"user_main_block_verif":"user_main_block_verif no_verif"}>
                                        <img src={value.isVerified?"/images/verif.png":"/images/noVerif.png"} alt=""/>
                                        <span>Верефикация <br/>{value.isVerified?'пройдена':'не пройдена'}</span>
                                    </div>

                                </div>
                                <div className="user_main_block_name">{value.firstName+' '+value.lastName}</div>
                            </div>
                        </div>
                    </div>
                    <div className="userblockplus__topright">
                        <div className="user_main_block_vip">
                            <div className="user_main_block_vip_top">
                                {value.rang===3&&<img src="/images/vip.png" alt=""/>}
                            </div>
                            <div className="user_main_block_vip_star">
                                {value.rang===3&&<img src="/images/star.png" alt=""/>&&
                                <img src="/images/star.png" alt=""/>&&
                                <img src="/images/star.png" alt=""/>}
                                {value.rang===2&&<img src="/images/star.png" alt=""/>&&
                                <img src="/images/star.png" alt=""/>}
                                {value.rang==null&&<img src="/images/star.png" alt=""/>}
                            </div>
                            {<div className="user_main_block_vip_text">VIP Пользователь</div>}
                        </div>
                        <div className="userblockplus__curator">
                            <div className="user_main_block_last">
                                <div className="user_main_block_last_bottom">
                                    {value.partnerFirstName&&<img src="/images/curator.png" alt=""/>}
                                    {value.partnerFirstName&&<div className="user_main_block_last_bottom_text">
                                        <span>Куратор</span>
                                        <a href={'/'} onClick={handlePushSponsor}>{value.partnerFirstName + ' ' + value.partnerLastName}</a>
                                    </div>}
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="userblockplus__bottom">
                    <div className="userblockplus__botleft">
                        {value.phoneNumber&&<LkUserInfoItem title={'Telephone:'} text={value.phoneNumber} url={"/images/icon_tel.png"}
                                         href={value.phoneNumber}/>}
                        {value.email&&<LkUserInfoItem title={'Email:'} text={'superlady@gmail.com'} url={"/images/icon_email.png"}
                                         href={"mailto:superlady@gmail.com"}/>}
                        {value.telegram&&<LkUserInfoItem title={'Telegram:'} text={value.telegram} url={"/images/icon_telegram.png"}
                                         href={value.telegram}/>}
                    </div>
                    <div className="userblockplus__botright">
                        {value.vkontakte&&<LkUserInfoItem title={'Vkontakte:'} text={value.vkontakte} url={"/images/icon_vk.png"}
                                         href={value.vkontakte} classes={'userinfo_grey'}/>}
                        {value.facebook&&<LkUserInfoItem title={'Facebook:'} text={'fb.com/username'} url={"/images/icon_fb.png"}
                                         href={"#"} classes={'userinfo_grey'}/>}
                        {value.twitter&&<LkUserInfoItem title={'Twitter:'} text={'twitter.com/username'}
                                         url={"/images/icon_twitter.png"} href={"#"} classes={'userinfo_grey'}/>}
                        {value.instagram&&<LkUserInfoItem title={'Instagram:'} text={'instagram.com/use..'}
                                         url={"/images/icon_insta.png"} href={"#"} classes={'userinfo_grey'}/>}
                        {value.youtube&&<LkUserInfoItem title={'Youtube:'} text={'youtube.com/use..'} url={"/images/icon_yout.png"}
                                         href={"#"} classes={'userinfo_grey'}/>}
                    </div>
                </div>

            </div>

            <div className="home2img">
                <img src="/images/home2.png" alt=""/>
            </div>

        </>

    );
};

