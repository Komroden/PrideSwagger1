import React, {useState,useEffect} from 'react';
import {useHistory} from "react-router";

export const NewsItemLk = ({url, date, text,id}) => {
    const [pic,setPic]=useState('');
    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/assets/Img/${url}`,{
            method:'GET',
            headers:{
                'accept': 'application/octet-stream'
            }
        })
            .then(res=>setPic(res.url))

    },[url])

    let d= new Date(date)

    const {push}=useHistory()
    const handlePushFullNews=(e) => {
        e.preventDefault()
        push(`/full${id}`)
    }
    return (
        <a href="/" onClick={handlePushFullNews} className="news_itemLk" style={{backgroundImage: `url(${pic})`}}>
									<span className="news_hover">
										<span className="news_date">{d.toLocaleDateString()}</span>
										<span
                                            className="news_descr">{text}</span>
									</span>
            <span className="news_btn">полная новость</span>
        </a>
    );
};

