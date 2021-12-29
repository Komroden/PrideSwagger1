import React, {useEffect, useState} from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import {Line} from "../MainTitle/GreyLine";
import {LineTitle} from "../LineTitle";
import { useParams} from "react-router";
import {useSelector} from "react-redux";
import Fade from '@mui/material/Fade';
import {useFetchWithTokenGet} from "../../../hooks/useFetchWithTokenGet";
import {Loader} from "../../../api/Loader";
import {LkMessagesMainUser} from "../MessagesMain/LkMessagesMainUser";
import {LkMessagesMainYou} from "../MessagesMain/LkMessagesMainYou";
import {useFetchSendMessage} from "../../../hooks/useFetchSendMessage";




export const ChatsSupportMain = () => {
    const { auth,allInfoUser } = useSelector((state) => state);
    const [open,setOpen]=useState(false)
    const [send,setSend]=useState(false)
    const [message,setMessage]=useState('')

    // const [messages,setMessages]=useState({
    //     messages:{
    //         items:[]
    //     }
    // })

    const {id}=useParams()


    const messages=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Chat/support/messages?pageNumber=1&pageSize=10',{messages:{items:[]}},send)
    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch(`http://lk.pride.kb-techno.ru/api/Chat/messages?chatRoomId=${id}`, {
    //             method: 'GET',
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(body => setMessages(body))
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[auth.token,send])

    useEffect(()=>{
        if(auth.token) {
            fetch(`http://lk.pride.kb-techno.ru/api/Chat/read-chatroom/${id}`, {
                method: 'PUT',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.text())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth.token,send])



    const handleAddEmoji=(emoji)=> setMessage(prev=>prev+emoji)
    const sendMessage=useFetchSendMessage('http://lk.pride.kb-techno.ru/api/Chat/support/send-message',message,setMessage,setSend,send)
    const handleSend=(e)=>{
        e.preventDefault()
        sendMessage.handleFetch()


    }
    const handleOpen=(e)=>{
        e.preventDefault()
        setOpen(!open)

    }






    return (
        <>
            <Line/>
            <div className="main_for_all_pages message_no_right_pad">
                <LineTitle title={'Сообщения'}/>
                <div className="message_form_row">
                    <div className="message_left_form" style={{border:'none',flexBasis:'100%'}}>
                        <div className="messageses">
                            <Loader loading={messages.loading}/>
                            {messages.data.messages.items.map(item=>item.senderId===allInfoUser.value.id?<LkMessagesMainYou key={item.id} url={item.senderId} text={item.text} time={item.creationDate}/>:
                                <LkMessagesMainUser key={item.id} url={'/images/logo_dark.png'} text={item.text} time={item.creationDate} />)}
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
                                    <div style={{maxWidth:'none'}} className="mes_text">
                                        <textarea  value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message..."/>
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
                                        <a style={{color:'black'}} href="/" onClick={handleSend} className="technical_help mes_send_button">Отправить</a>
                                        {/*<button  onClick={handleSend}>*/}
                                        {/*    <img className='message_image_send' src="/images/send_mes.png" alt=""/>*/}
                                        {/*</button>*/}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

