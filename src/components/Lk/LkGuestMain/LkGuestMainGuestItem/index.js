import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {BlockUserId} from "../BlockUserId";
import {UseYears} from "../../../../hooks/useYears";
import {SendMessage} from "../../LkUserMain/SendMessage";



export const LkGuestMainGuestItem = ({image,name,year,isOnline,setOpenModal,id}) => {
    const [pic,setPic]=useState('');
    const [status,setStatus]=useState(false)

    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/assets/Img/${image}`,{
            method:'GET',
            headers:{
                'accept': 'application/octet-stream'
            }
        })
            .then(res=>setPic(res.url))

    },[image])


    const {push}=useHistory()
    const handleSend=(e)=>{
        e.preventDefault()
        setStatus(!status)
    }
    const handlePushUser=(e) => {
        e.preventDefault()
        push(`/user${id}`)
    }
    const {text}= UseYears(year)
    return (
        <div key={id} className="gost_item" style={{backgroundColor: "#fcf2ff"}} >
            <div className="gost_item_top">
                <div className="gost_item_logo" style={{backgroundImage: `url(${pic})`}}/>
                <div className="gost_item_top_right">
                    <div className="gost_item_name">{name}</div>
                    <div className="gost_item_year">{year+' '+text}</div>
                    <div className={isOnline?"gost_item_online":'gost_item_offline'}>{isOnline?'Online':'Offline'}</div>
                </div>
            </div>
            <div className="gost_item_buttons">
                <a href={'/'} onClick={handleSend} className="gost_item_send_mes">
                    <img src="/images/send_mess.png" alt=""/>
                    <span>Отправить сообщение</span>
                </a>

                <a href={'/'} onClick={handlePushUser} className="gost_item_profile">
                    <img src="/images/prof.png" alt=""/>
                    <span>Профайл пользователя</span>
                </a>
                <SendMessage status={status} url={`http://lk.pride.kb-techno.ru/api/Chat/send-message/${id}`} modifyWrap={'mes_guest_wrap'} modifyEmoji={'mes_guest_emoji'}/>
            </div>
            <BlockUserId/>
        </div>
    );
};
// ()=>setOpenModal(true)
