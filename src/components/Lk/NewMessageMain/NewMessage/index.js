import React, {useEffect, useState} from 'react';
import {SendMessage} from "../../LkUserMain/SendMessage";


export const NewMessage = ({name,text,date,mode,id,setDeleteMessage}) => {
    const [dateWrite, setDateWrite]=useState('')
    const[open,setOpen]=useState(false)
    const dateMessage= new Date(date);
    const dateString=new Date(date).toLocaleDateString();
    useEffect(()=>{
        const dateNow = new Date();
        const interval= dateNow-dateMessage
        if(interval<3600000){
            setDateWrite(Math.floor((interval % (60 * 60 * 1000)) / (1000 * 60))+' мин')
        }if(interval>3600000) {
            setDateWrite(dateString)
        }

    },[])// eslint-disable-line react-hooks/exhaustive-deps


    const handlePush=(e) => {
        e.preventDefault()
        setOpen(!open)
    }
    const handleDelete=(e) => {
        e.preventDefault()
        setDeleteMessage(id)
    }

    return (
        <div className="messages_line">
            <div className="messages_line_name">{name}</div>
            <div className="messages_line_text">{text}</div>
            <div className="messages_line_active active"/>
            <div className="messages_line_time">{dateWrite}</div>
            <div className="messages_line_answer">
                {mode&&<a href="/" onClick={handlePush}  className="answer_l">Ответить</a>}
            </div>

            <div className="messages_line_remove">
                <a href="/" onClick={handleDelete} className="red_remove_btn">Удалить</a>
            </div>
            <div style={{position:'absolute',top:'-115px',right:'0'}}>
            <SendMessage url={`http://lk.pride.kb-techno.ru/api/Chat/send-message/${id}`} status={open}/>
            </div>
        </div>
    );
};

