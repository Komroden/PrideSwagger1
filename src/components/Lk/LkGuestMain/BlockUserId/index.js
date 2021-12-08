import React from 'react';
import {useSelector} from "react-redux";


export const BlockUserId = ({id}) => {
    const { auth } = useSelector((state) => state);
    //id props
     const handleBlockById=(e)=>{
         e.preventDefault()
        fetch(`http://lk.pride.kb-techno.ru/api/Chat/block-user/${id}`, {
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    }
    return (
        <a href={'/'} onClick={handleBlockById} className="gost_item_blocked">
										<span className="gost_item_blocked_img">
											<img src="/images/blocked.png" alt=""/>
										</span>
            <span className="gost_item_blocked_text">Заблокировать пользователя</span>
        </a>
    );
};

