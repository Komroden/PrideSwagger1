import React, {useState} from 'react';
import Fade from "@mui/material/Fade";
import {Picker} from "emoji-mart";
import SendIcon from '@mui/icons-material/Send';
import {SnackBar} from "../../../Home/Snackbar";
import {useFetchHandlePostWithBody} from "../../../../hooks/useFetchHandlePostWithBody";


export const SendMessage = ({url,status,modifyWrap,modifyEmoji}) => {
    const [message,setMessage]=useState('')
    const [open,setOpen]=useState(false)
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    const handleAddEmoji=(emoji)=> setMessage(prev=>prev+emoji)
    const handleOpen=(e)=>{
        e.preventDefault()
        setOpen(!open)}

    const resetFunc=()=>{
        setMessage('')}

    const send =useFetchHandlePostWithBody(url,message,resetFunc,setOpenSnack,'POST','Пользователь заблокировал сообщения')
        const handleSend=(e)=>{
        e.preventDefault()
            send.handlePost()
        // fetch(url,{
        //     method:'POST',
        //     body:JSON.stringify(message),
        //     headers:{
        //         'Authorization':`Bearer ${auth.token}`,
        //         'accept': 'application/octet-stream',
        //         'Content-Type': 'application/json'}
        // })
        //     .then(res=> {
        //         if (res.status >= 200 && res.status < 300) {
        //             setOpenSnack({
        //                 status:true,
        //                 text:'Отправлено',
        //                 color:'success'
        //             })
        //             setMessage('')
        //             return
        //         }
        //         if(res.status===422) {
        //             let error = new Error('Пользователь заблокировал сообщения');
        //             error.response = res;
        //             throw error
        //         }
        //         else {
        //             let error = new Error('Ошибка');
        //             error.response = res;
        //             throw error
        //         }})
        //     .catch(error=>setOpenSnack({
        //             status: true,
        //             text: error.message,
        //             color: 'error'
        //         }))



    }
    return (
        <Fade in={status} unmountOnExit>
        <div  className={modifyWrap?"message_send_user "+modifyWrap:"message_send_user "}>
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
            <div style={{justifyContent:'flex-end'}} className="mes_send mes_send_user">
                <button onClick={handleSend}>
                    <SendIcon fontSize={'small'}/>
                </button>
            </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
        </div>
        </Fade>
    );
};

