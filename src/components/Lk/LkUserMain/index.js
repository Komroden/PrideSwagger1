import React, {useEffect, useState} from 'react';

import './style.scss';
import {LkUserInfoItem} from "./LkUserInfoItem";
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router";
import {UseYears} from "../../../hooks/useYears";
import {SendMessage} from "./SendMessage";
import {useFetchWithTokenGet} from "../../../hooks/useFetchWithTokenGet";
import {Loader} from "../../../api/Loader";
import {useFetchStringParametr} from "../../../hooks/useFetchStringParametr";
import {SnackBar} from "../../Home/Snackbar";

export const LkUserMain = () => {
    const { auth,allInfoUser } = useSelector((state) => state);
    // const [value,setValue]=useState({})
    const [pic,setPic]=useState('')

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
    const {text}=UseYears(value.data.yearsOld)

    useEffect(()=>{
        if(auth.token&&!value.data.isCurrentUser&&value.data.image) {
            fetch(`http://lk.pride.kb-techno.ru/assets/Img/${value.data.image}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/octet-stream',
                    'Authorization': `Bearer ${auth.token}`
                }

            })
                .then(res => setPic(res.url))
        }
    },[auth.token,value.data.image,value.data.isCurrentUser])



    //id props
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    const block=useFetchStringParametr(`http://lk.pride.kb-techno.ru/api/Chat/block-sender/${id}`,'PUT',setOpenSnack,'Пользователь заблокирован')
    // const handleBlockById=()=>{
    //     fetch(`http://lk.pride.kb-techno.ru/api/Chat/block-sender/${id}`, {
    //         method:'PUT',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization':`Bearer ${auth.token}`}
    //     })
    //         .then(res=>res.json())
    //         .then(res=>console.log(res))
    //         .catch(e=>console.log(e))
    // }
    // const handleAddFriend=(e)=>{
    //     e.preventDefault()
    // }
    return (
        <>

            <div className="balance_cost">
                <div className="balance_cost_title balancenew_cost_title">Балансы счетов: <span>{value.data.firstName+' '+value.data.lastName}</span>
                </div>
            </div>
            <div className="user_main_block userblockplus">
                <Loader loading={value.loading}/>
                <div className="userblockplus__top">
                    <div className="userblockplus__topleft">
                        <div className="userblockplus__photo">
                            <div className="user_main_block_logo">
                                {/*//image*/}
                                {value.data.isCurrentUser&&<img src={allInfoUser.avatar ? allInfoUser.avatar : '/images/logo_dark.png'} alt=""/>}
                                {!value.data.isCurrentUser&&<img src={pic?pic:'/images/logo_dark.png'} alt=""/>}
                            </div>
                            <div className="userblockplus__photolink">
                                {/*{!value.data.isCurrentUser&& <a href="/" onClick={handleAddFriend}>Добавить в друзья</a>}*/}
                                {value.data.isCurrentUser&&<p className='your__profile'>Ваш профиль</p>}
                                {!value.data.isCurrentUser&&<button onClick={()=>setStatus(!status)} className="form_sbmOpen userBlock_sendMessage">Отправить сообщение</button>}
                                {!value.data.isCurrentUser&&<SendMessage url={`http://lk.pride.kb-techno.ru/api/Chat/send-message/${id}`} status={status}/>}
                                {!value.data.isCurrentUser&& <button style={{marginTop:status?'20px':''}} onClick={(e)=>{e.preventDefault()
                                block.handleFetch()}} className="form_sbmOpen form_sbmOpen_clear">Заблокировать</button>}
                            </div>
                        </div>
                        <div className="userblockplus__detail">
                            <div className="user_main_block_info">
                                <div className="user_main_block_info_top">
                                    {value.data.yearsOld && value.yearsOld < 100&&<div
                                        className="user_main_block_years">{value.data.yearsOld}
                                        <span>{text}</span></div>}
                                    <div className={value.data.isVerified?"user_main_block_verif":"user_main_block_verif no_verif"}>
                                        <img src={value.data.isVerified?"/images/verif.png":"/images/noVerif.png"} alt=""/>
                                        <span>Верефикация <br/>{value.data.isVerified?'пройдена':'не пройдена'}</span>
                                    </div>

                                </div>
                                <div className="user_main_block_name">{value.data.firstName+' '+value.data.lastName+' '+value.data.middleName}</div>
                            </div>
                        </div>
                    </div>
                    <div className="userblockplus__topright">
                        <div className="user_main_block_vip">
                            <div className="user_main_block_vip_top">
                                {value.data.rang===3&&<img src="/images/vip.png" alt=""/>}
                            </div>
                            <div className="user_main_block_vip_star">
                                {value.data.rang===3&&<img src="/images/star.png" alt=""/>&&
                                <img src="/images/star.png" alt=""/>&&
                                <img src="/images/star.png" alt=""/>}
                                {value.data.rang===2&&<img src="/images/star.png" alt=""/>&&
                                <img src="/images/star.png" alt=""/>}
                                {value.data.rang==null&&<img src="/images/star.png" alt=""/>}
                            </div>
                            {<div className="user_main_block_vip_text">VIP Пользователь</div>}
                        </div>
                        <div className="userblockplus__curator">
                            <div className="user_main_block_last">
                                <div className="user_main_block_last_bottom">
                                    {value.data.partnerFirstName&&<img src="/images/curator.png" alt=""/>}
                                    {value.data.partnerFirstName&&<div className="user_main_block_last_bottom_text">
                                        <span>Куратор</span>
                                        <a href={'/'} onClick={handlePushSponsor}>{value.data.partnerFirstName + ' ' + value.data.partnerLastName}</a>
                                    </div>}
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="userblockplus__bottom">
                    <div className="userblockplus__botleft">
                        {value.data.phoneNumber&&<LkUserInfoItem title={'Telephone:'} text={value.data.phoneNumber} url={"/images/icon_tel.png"}
                                         href={value.data.phoneNumber}/>}
                        {value.data.email&&<LkUserInfoItem title={'Email:'} text={'superlady@gmail.com'} url={"/images/icon_email.png"}
                                         href={"mailto:superlady@gmail.com"}/>}
                        {value.data.telegram&&<LkUserInfoItem title={'Telegram:'} text={value.data.telegram} url={"/images/icon_telegram.png"}
                                         href={value.data.telegram}/>}
                    </div>
                    <div className="userblockplus__botright">
                        {value.data.vkontakte&&<LkUserInfoItem title={'Vkontakte:'} text={value.data.vkontakte} url={"/images/icon_vk.png"}
                                         href={value.data.vkontakte} classes={'userinfo_grey'}/>}
                        {value.data.facebook&&<LkUserInfoItem title={'Facebook:'} text={'fb.com/username'} url={"/images/icon_fb.png"}
                                         href={"#"} classes={'userinfo_grey'}/>}
                        {value.data.twitter&&<LkUserInfoItem title={'Twitter:'} text={'twitter.com/username'}
                                         url={"/images/icon_twitter.png"} href={"#"} classes={'userinfo_grey'}/>}
                        {value.data.instagram&&<LkUserInfoItem title={'Instagram:'} text={'instagram.com/use..'}
                                         url={"/images/icon_insta.png"} href={"#"} classes={'userinfo_grey'}/>}
                        {value.data.youtube&&<LkUserInfoItem title={'Youtube:'} text={'youtube.com/use..'} url={"/images/icon_yout.png"}
                                         href={"#"} classes={'userinfo_grey'}/>}
                    </div>
                </div>

            </div>

            <div className="home2img">
                <img src="/images/home2.png" alt=""/>
            </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>

        </>

    );
};

