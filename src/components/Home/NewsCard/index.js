import React, {useEffect, useState} from 'react';
import { useHistory} from "react-router";


export const NewsCard = ({url,date,text}) => {
    const [pic,setPic]=useState('');

    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/assets/Img/${url}`,{
            method:'GET',
            headers:{
                'accept': 'application/octet-stream'
            }
        })
            .then(res=>setPic(res.url))

    },[])

    let d= new Date(date)
    const {push}=useHistory()
    const handlePushFullNews=() => {
       push(`/full/${text}`)
    }
    return (
        <div className="news_item">
            <div className="news_card" style={{backgroundImage:`url(${pic})`}}>
                <div className="news_card_bottom">
                    <div className="news_date">{d.toLocaleDateString()}</div>
                    <div className="news_descr">{text}
                    </div>
                </div>
            </div>
            <a onClick={handlePushFullNews} className="news_link">полная новость</a>
        </div>
    );
};

