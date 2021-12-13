import React from 'react';
import {useHistory} from "react-router";
import {useImage} from "../../../../hooks/useImage";

export const LkHomeRightSlidebarNewsItem = ({img,title,value}) => {
	const {push}=useHistory()
	const handlePush=(e)=>{
		e.preventDefault()
		push('/draw')
	}
	const {pic}=useImage(img,'/images/prize.png')
    return (
        <a  href="/" onClick={handlePush} className="right_news_item">
								<span className="right_news_item_img">
									<img src={pic} alt=""/>
								</span>
            <span className="right_news_item_title">{title}</span>
            <span className="right_news_item_bottom">
									<span className="right_news_item_bottom_text">
										<img src="/images/price_small.png" alt=""/>
										<span>Призовой фонд:</span>
									</span>
									<span className="right_news_item_bottom_price">{value}</span>
								</span>
        </a>
    );
};

