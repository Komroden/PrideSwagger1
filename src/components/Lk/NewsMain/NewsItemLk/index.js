import React from 'react';
import {useHistory} from "react-router";
import {useImage} from "../../../../hooks/useImage";

export const NewsItemLk = ({url, date, text,id}) => {
    const {pic}=useImage(url)

    let d= new Date(date)

    const {push}=useHistory()
    const handlePushFullNews=(e) => {
        e.preventDefault()
        push(`/lkNews${id}`)
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

