import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {UseYears} from "../../../hooks/useYears";
import {CircularProgressWithLabel} from "./CircularProgressWithLabel";


export const UserBlock = () => {
    const { userData,allInfoUser } = useSelector((state) => state);
    const {push}=useHistory()
    const handlePushUser=(e) => {
        e.preventDefault()
        push(`/user${allInfoUser.value.id}`)
    }
    const handlePushSponsor=(e) => {
        e.preventDefault()
        push(`/user${userData.value.partnerInfo.id}`)
    }

    const [value,setValue] =useState([
        {name: allInfoUser.value.email},
        {name: allInfoUser.value.firstName},
        {name: allInfoUser.value.middleName},
        {name: allInfoUser.value.lastName},
        {name: allInfoUser.value.phoneNumber},
        {name: allInfoUser.value.country},
        {name: allInfoUser.value.city},
        {name: allInfoUser.value.birthDate},
        {name: allInfoUser.value.telegram},
        {name: allInfoUser.value.vkontakte},

])
    const [percent,setPercent]=useState([])
    useEffect(()=>{
        if(!allInfoUser.value) return
        setValue([
            {name: allInfoUser.value.email},
            {name: allInfoUser.value.firstName},
            {name: allInfoUser.value.middleName},
            {name: allInfoUser.value.lastName},
            {name: allInfoUser.value.phoneNumber},
            {name: allInfoUser.value.country},
            {name: allInfoUser.value.city},
            {name: allInfoUser.value.birthDate},
            {name: allInfoUser.value.telegram},
            {name: allInfoUser.value.vkontakte},
    ])
        setPercent(value.filter(item=>item.name!==''&&item.name!==null))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[allInfoUser.value])

    const birth =new Date(allInfoUser.value.birthDate).getFullYear()
    const d =new Date().getFullYear()
    const years = d-birth
    const {text}=UseYears(years)


    return (
        <div className="user_main_block">
            <div className="user_main_block_logo">
                <img src={allInfoUser.avatar?allInfoUser.avatar:'/images/logo_dark.png'} alt=""/>
            </div>
            <div className="user_main_block_info">
                <div className="user_main_block_info_top">
                    <div className="user_main_block_years">{years&&years<100?years:'Не указано'} <span>{years&&years<100?text:''}</span></div>
                    <div className={allInfoUser.value.isVerified?"user_main_block_verif":"user_main_block_verif no_verif"}>
                        <img src={allInfoUser.value.isVerified?"/images/verif.png":"/images/noVerif.png"} alt=""/>
                        <span>Верефикация <br/>{allInfoUser.value.isVerified?'пройдена':'не пройдена'}</span>
                    </div>
                </div>
                <div className="user_main_block_name">{userData.value.userInfo?userData.value.userInfo.fullName:'User'}</div>
                <a href={allInfoUser.value.email?allInfoUser.value.email:'#'} className="user_main_block_info_mail">
                    <img src="/images/email.png" alt=""/>
                    <span>{allInfoUser.value.email?allInfoUser.value.email:'none'}</span>
                </a>
            </div>
            <div className="user_main_block_vip">
                {allInfoUser.value.rang===3&&<div className="user_main_block_vip_top">
                    <img src="/images/vip.png" alt=""/>
                </div>}
                <div className="user_main_block_vip_star">
                    {allInfoUser.value.rang===3&&<img src="/images/star.png" alt=""/>&&
                        <img src="/images/star.png" alt=""/>&&
                        <img src="/images/star.png" alt=""/>}
                    {allInfoUser.value.rang===2&&<img src="/images/star.png" alt=""/>&&
                    <img src="/images/star.png" alt=""/>}
                    {allInfoUser.value.rang==null&&<img src="/images/star.png" alt=""/>}
                </div>
                {<div className="user_main_block_vip_text">VIP Пользователь</div>}
            </div>
            <div className="user_main_block_percent">
                <CircularProgressWithLabel value={percent.length*10} />
                <div className="user_main_block_percent_text">
                    <a href={'/'} onClick={handlePushUser}>Ваш <br/>Профиль</a>
                </div>
            </div>
            <div className="user_main_block_last">
                <div className="user_main_block_last_top">
                    <ul>
                        <li>
                            <a href={`https://www.vk.com/${allInfoUser.value.vkontakte}`}>
                                <img src="/images/soc1.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href={`https://www.facebook.com/${allInfoUser.value.facebook}`}>
                                <img src="/images/soc2.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href={`https://www.instagram.com/${allInfoUser.value.instagram}`}>
                                <img src="/images/soc3.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href={`https://twitter.com/${allInfoUser.value.twitter}`}>
                                <img src="/images/soc4.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href={`https://www.youtube.com/${allInfoUser.value.youtube}`}>
                                <img src="/images/soc5.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user_main_block_last_bottom">
                    {userData.value.partnerInfo.fullName&&<img src="/images/curator.png" alt=""/>}
                    {userData.value.partnerInfo.fullName&&<div className="user_main_block_last_bottom_text">
                        <span>Куратор</span>
                        <a href={'/'} onClick={handlePushSponsor}>{userData.value.partnerInfo.fullName}</a>
                    </div>}
                </div>
            </div>
        </div>
    );
};

