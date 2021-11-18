import React from 'react';
import {useHistory} from "react-router";
import {BlockUserId} from "../BlockUserId";



export const LkGuestMainGuestItem = ({image,name,year,isOnline,setOpenModal}) => {

    const {push}=useHistory()
    const handleSend=()=>{
        push ('/messages')
    }
    return (
        <div className="gost_item" style={{backgroundColor: "#fcf2ff"}} >
            <div className="gost_item_top">
                <div className="gost_item_logo" style={{backgroundImage: image}}/>
                <div className="gost_item_top_right">
                    <div className="gost_item_name">{name}</div>
                    <div className="gost_item_year">{year}</div>
                    <div className="gost_item_online">{isOnline}</div>
                </div>
            </div>
            <div className="gost_item_buttons">
                <a onClick={handleSend} className="gost_item_send_mes">
                    <img src="/images/send_mess.png" alt=""/>
                    <span>Отправить сообщение</span>
                </a>
                <a onClick={()=>setOpenModal(true)} className="gost_item_profile">
                    <img src="/images/prof.png" alt=""/>
                    <span>Профайл пользователя</span>
                </a>
            </div>
            <BlockUserId/>
        </div>
    );
};

