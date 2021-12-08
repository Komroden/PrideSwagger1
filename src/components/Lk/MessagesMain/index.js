import React, {useEffect, useState} from 'react';
import './style.scss';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import {LkMessagesMainYou} from "./LkMessagesMainYou";
import {LkMessagesMainUser} from "./LkMessagesMainUser";
import {Line} from "../MainTitle/GreyLine";
import {LineTitle} from "../LineTitle";
import {BlockUserId} from "../LkGuestMain/BlockUserId";
import {useHistory, useParams} from "react-router";
import {useSelector} from "react-redux";
import Fade from '@mui/material/Fade';
import {UseYears} from "../../../hooks/useYears";


export const MessagesMain = () => {
    const { auth,allInfoUser } = useSelector((state) => state);
    const {push}=useHistory()
    const [open,setOpen]=useState(false)
    const [send,setSend]=useState(false)
    const [message,setMessage]=useState('')
    const [pic,setPic]=useState('')
    const [value,setValue]=useState({})
    const {text}=UseYears(value.yearsOld)
    const [messages,setMessages]=useState({
        messages:{
            items:[]
        }
    })
    const {id,name}=useParams();
    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/api/Chat/messages?chatRoomId=${id}`,{
            method:'GET',
            headers:{
                'accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(body=>setMessages(body))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth.token,send])
    useEffect(()=>{
        if (messages.id===0) return
        fetch(`http://lk.pride.kb-techno.ru/api/Profile/view-profile/${name}`,{
            method:'GET',
            headers:{
                'accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(body=> {
                setValue(body)
                if(!body.image) return
                fetch(`http://lk.pride.kb-techno.ru/assets/Img/${body.image}`,{
                    method:'GET',
                    headers:{
                        'accept': 'application/octet-stream'
                    }})
                    .then(res=>setPic(res.url))
            })
            .catch(error=>console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth.token,messages.id])
    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/api/Chat/read-chatroom/${id}`,{
            method:'PUT',
            headers:{
                'accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.text())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth.token,send])



    const handleAddEmoji=(emoji)=> setMessage(prev=>prev+emoji)
    const handleSend=(e)=>{
        e.preventDefault()
        fetch(`http://lk.pride.kb-techno.ru/api/Chat/send-message/${name}`,{
            method:'POST',
            body:JSON.stringify(message),
            headers:{
                'Authorization':`Bearer ${auth.token}`,
                'accept': 'application/octet-stream',
                'Content-Type': 'application/json'}
        })
            .then(()=>setSend(!send))


    }
    const handleOpen=(e)=>{
        e.preventDefault()
        setOpen(!open)

    }
    const handlePush=(e)=>{
        e.preventDefault()
        push(`/user${name}`)
    }





    return (
        <>
            <Line/>
            <div className="main_for_all_pages message_no_right_pad">
                <LineTitle title={'Сообщения'}/>
                <div className="message_form_row">
                    <div className="message_left_form">
                        <div className="messageses">
                            {messages.messages.items.map(item=>item.senderId===allInfoUser.value.id?<LkMessagesMainYou key={item.id} url={item.senderId} text={item.text} time={item.creationDate}/>:
                                <LkMessagesMainUser key={item.id} url={pic} text={item.text} time={item.creationDate} />)}
                        </div>
                        <div className="message_left_form_navig">
                            <form>
                                <div className="message_left_form_navig_row">
                                    {/*<div className="mes_file">*/}
                                    {/*    <label>*/}
                                    {/*        <input type="file"/>*/}
                                    {/*            <img src="/images/file_mes.png" alt=""/>*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}
                                    <div className="mes_text">
                                        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message..."/>
                                    </div>
                                    <div className="mes_emoji">
                                        <a href="/" onClick={handleOpen}>
                                            <img src='/images/emoji.png' alt=' '/>
                                            <Fade in={open} unmountOnExit>
                                                <div>
                                                    <Picker onSelect={(e)=>handleAddEmoji(e.native)} style={{position:'absolute',bottom:'135px', right:'-330px'}} set='apple'/>
                                                </div>
                                            </Fade>
                                        </a>

                                    </div>
                                    <div className="mes_send">
                                        <button onClick={handleSend}>
                                            <img src="/images/send_mes.png" alt=""/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="message_right_form">
                        <div className="message_user_right">
                            <div className="gost_item">
                                <div className="gost_item_top">
                                    <div className="gost_item_logo" style={{backgroundImage: pic!==''?`url(${pic})`:'url(../../../images/logo_dark.png)'}}/>
                                    <div className="gost_item_top_right">
                                        <div className="gost_item_name">{value.firstName+' '+ value.lastName}</div>
                                        <div className="gost_item_year">{value.yearsOld+' '+text} </div>
                                        <div className={value?"gost_item_online":'gost_item_offline'}>{value?'Online':'Offline'}</div>
                                    </div>
                                </div>
                                <div className="gost_item_buttons">

                                    <a href="/" onClick={handlePush} className="gost_item_profile">
                                        <img src="/images/prof.png" alt=""/>
                                            <span>Профайл пользователя</span>
                                    </a>
                                </div>
                                <BlockUserId id={name}/>
                            </div>
                        </div>
                        <a href="/" className="technical_help">Тех поддержка</a>
                    </div>
                </div>
            </div>

        </>
    );
};

