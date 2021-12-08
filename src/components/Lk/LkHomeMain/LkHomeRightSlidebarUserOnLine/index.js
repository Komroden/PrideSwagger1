import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";

export const LkHomeRightSlidebarUserOnLine = ({img,id}) => {
    const [pic,setPic]=useState('');
    const {push}=useHistory()
    const handlePush=(e) => {
        e.preventDefault()
        push(`/user${id}`)
    }
    useEffect(()=>{
        if(!img) return

            fetch(`http://lk.pride.kb-techno.ru/assets/Img/${img}`,{
                method:'GET',
                headers:{
                    'accept': 'application/octet-stream'
                }
            })
                .then(res=>setPic(res.url))
                .catch(error=>console.log(error))

        },[img])
    return (
        <a href={'/'} onClick={handlePush} className="now_on_site_item">
        <img src={pic?pic:'/images/logo_dark.png'} alt=""/>
         </a>
    );
};

