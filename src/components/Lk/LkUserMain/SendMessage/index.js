import React, {useState} from 'react';
import Fade from "@mui/material/Fade";
import {Picker} from "emoji-mart";
import {useSelector} from "react-redux";
import SendIcon from '@mui/icons-material/Send';


export const SendMessage = ({id,status,modifyWrap,modifyEmoji}) => {
    const { auth } = useSelector((state) => state);
    const [message,setMessage]=useState('')
    const [open,setOpen]=useState(false)
    const handleAddEmoji=(emoji)=> setMessage(prev=>prev+emoji)
    const handleOpen=(e)=>{
        e.preventDefault()
        setOpen(!open)}
    const handleSend=(e)=>{
        e.preventDefault()
        fetch(`http://lk.pride.kb-techno.ru/api/Chat/send-message/${id}`,{
            method:'POST',
            body:JSON.stringify(message),
            headers:{
                'Authorization':`Bearer ${auth.token}`,
                'accept': 'application/octet-stream',
                'Content-Type': 'application/json'}
        })
            .then(res=>res.text())
            .then(setMessage(''))


    }
    return (
        <Fade in={status} unmountOnExit>
        <div className={modifyWrap?"message_send_user "+modifyWrap:"message_send_user "}>
            {/*<div className="mes_file">*/}
            {/*    <label>*/}
            {/*        <input type="file"/>*/}
            {/*            <img src="/images/file_mes.png" alt=""/>*/}
            {/*    </label>*/}
            {/*</div>*/}
            <div className="mes_text mes_text_user">
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message..."/>
            </div>
            <div className={modifyEmoji?"mes_emoji mes_emoji_user "+modifyEmoji:"mes_emoji mes_emoji_user "}>
                <a href="/" onClick={handleOpen}>
                    <img src='/images/emoji.png' alt=' '/>
                    <Fade in={open} unmountOnExit>
                        <div>
                            <Picker onSelect={(e)=>handleAddEmoji(e.native)} style={{position:'absolute',bottom:'135px', right:'-330px'}} set='apple'/>
                        </div>
                    </Fade>
                </a>

            </div>
            <div className="mes_send mes_send_user">
                <button onClick={handleSend}>
                    <SendIcon fontSize={'small'}/>
                </button>
            </div>
        </div>
        </Fade>
    );
};

