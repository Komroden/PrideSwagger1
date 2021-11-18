import React from 'react';

export const NewsItemLk = ({bgr, date, text}) => {
    let d= new Date(date)
    return (
        <a href="#" className="news_itemLk" style={{backgroundImage: bgr}}>
									<span className="news_hover">
										<span className="news_date">{d.toLocaleDateString()}</span>
										<span
                                            className="news_descr">{text}</span>
									</span>
            <span className="news_btn">полная новость</span>
        </a>
    );
};

