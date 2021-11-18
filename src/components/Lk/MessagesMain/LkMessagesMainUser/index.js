import React from 'react';

export const LkMessagesMainUser = ({url, time, text}) => {
    return (
         <div className="friend_mes">
        <div className="messageses_details">
            <a href="#" className="messageses_details_logo"
               style={{backgroundImage:url}}/>
            <div className="messageses_details_time">{time}</div>
               </div>
             <div className="friend_mes_text">
                <span>{text}</span>
            </div>
        </div>
    );
};

