import React  from 'react';


export const LkMessagesMainUser = ({url, time, text}) => {
    let d= new Date(time)

    const handlePush=(e)=>{
        e.preventDefault()
    }

    return (
         <div className="friend_mes">
        <div className="messageses_details">
            <a href="/" onClick={handlePush} className="messageses_details_logo"
               style={{backgroundImage:`url(${url})`}}> </a>
            <div className="messageses_details_time">{d.toLocaleString()}</div>
               </div>
             <div className="friend_mes_text">
                <span>{text}</span>
            </div>
        </div>
    );
};

