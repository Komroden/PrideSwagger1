import React, {useEffect, useState} from 'react';
import './style.scss';
import {NewMessage} from "./NewMessage";
import {useFetch} from "../../../hooks/useFetch";
import {useSelector} from "react-redux";
export const NewMessageMain = ({title,mode}) => {
    const { auth } = useSelector((state) => state);
    const [messageList,setMessageList]=useState({items:[]})
    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/Chat/chatrooms',{
            method:'GET',
                headers:{'accept':'application/json',
                    'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(body=>setMessageList(body))

    },[])

    return (
        <>
            <div className="grey_line"/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="main_content_right_sidebar_title_bl_title">{title}</div>
                    <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про голосование
                    </div>
                </div>
                <div className="messages_row">
                    {messageList.items.map(item=><NewMessage key={item.id} mode={mode} date={item.lastMessageDate} text={item.lastMessageText} name={item.recipientName}/>)}
                </div>
            </div>
        </>
    );
};

