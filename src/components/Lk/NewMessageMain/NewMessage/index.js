import React, {useEffect, useState} from 'react';

export const NewMessage = ({name,text,date,mode}) => {
    const [dateWrite, setDateWrite]=useState('')
    const dateMessage= new Date(date);
    const dateString=new Date(date).toLocaleDateString();
    useEffect(()=>{
        const dateNow = new Date();
        const interval= dateNow-dateMessage
        console.log(interval)
        if(interval<3600000){
            setDateWrite(Math.floor((interval % (60 * 60 * 1000)) / (1000 * 60))+' мин')
        }if(interval>3600000) {
            setDateWrite(dateString)
        }
    },[])

    return (
        <div className="messages_line">
            <div className="messages_line_name">{name}</div>
            <div className="messages_line_text">{text}</div>
            <div className="messages_line_active active"/>
            <div className="messages_line_time">{dateWrite}</div>
            <div className="messages_line_answer">
                {mode&&<a href="#" className="answer_l">Ответить</a>}
            </div>
            <div className="messages_line_remove">
                <a href="#" className="red_remove_btn">Удалить</a>
            </div>
        </div>
    );
};

