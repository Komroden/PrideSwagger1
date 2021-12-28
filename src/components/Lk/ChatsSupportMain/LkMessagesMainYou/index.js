import React from 'react';
import {useSelector} from "react-redux";

export const LkMessagesMainYou = ({time,text}) => {
    const { allInfoUser } = useSelector((state) => state);

    let d= new Date(time)
    const handlePush=(e)=>{
        e.preventDefault()
    }
    return (
        <div className="yours_mes">
            <div className="yours_mes_text">
                <span>{text}</span>
            </div>
            <div className="messageses_details">
                <a href="/" onClick={handlePush} className="messageses_details_logo"
                   style={{backgroundImage: `url(${allInfoUser.avatar})`}}> </a>
                <div className="messageses_details_time">{d.toLocaleString()}</div>
            </div>
        </div>
    );
};

