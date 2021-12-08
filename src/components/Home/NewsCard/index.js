import React from 'react';
import { useHistory} from "react-router";
import {useImage} from "../../../hooks/useImage";


export const NewsCard = ({url,date,text,id}) => {
    const {pic}=useImage(url)

    let d= new Date(date)
    const {push}=useHistory()
    const handlePushFullNews=(e) => {
        e.preventDefault()
       push(`/full${id}`)
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
            <a href={'/'} onClick={handlePushFullNews} className="news_link">полная новость</a>
        </div>
    );
};

