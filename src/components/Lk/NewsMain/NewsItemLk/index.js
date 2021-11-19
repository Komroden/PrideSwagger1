import React, {useState,useEffect} from 'react';

export const NewsItemLk = ({url, date, text}) => {
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
    return (
        <a href="#" className="news_itemLk" style={{backgroundImage: `url(${pic})`}}>
									<span className="news_hover">
										<span className="news_date">{d.toLocaleDateString()}</span>
										<span
                                            className="news_descr">{text}</span>
									</span>
            <span className="news_btn">полная новость</span>
        </a>
    );
};

