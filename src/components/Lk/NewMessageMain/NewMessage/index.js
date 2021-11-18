import React from 'react';

export const NewMessage = ({name,text,date,mode}) => {
    return (
        <div className="messages_line">
            <div className="messages_line_name">{name}</div>
            <div className="messages_line_text">{text}</div>
            <div className="messages_line_active active"/>
            <div className="messages_line_time">{date}</div>
            <div className="messages_line_answer">
                {mode&&<a href="#" className="answer_l">Ответить</a>}
            </div>
            <div className="messages_line_remove">
                <a href="#" className="red_remove_btn">Удалить</a>
            </div>
        </div>
    );
};

