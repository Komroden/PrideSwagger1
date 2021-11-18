import React from 'react';

export const LkMessagesMainYou = ({url,time,text}) => {
    return (
        <div className="yours_mes">
            <div className="yours_mes_text">
                <span>{text}</span>
            </div>
            <div className="messageses_details">
                <a href="#" className="messageses_details_logo"
                   style={{backgroundImage: url}}/>
                <div className="messageses_details_time">{time}</div>
            </div>
        </div>
    );
};

