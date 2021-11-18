import React from 'react';

export const LkHomeRightSlidebarNewsItem = ({img,title,value}) => {
    return (
        <a href="#" className="right_news_item">
								<span className="right_news_item_img">
									<img src={img} alt=""/>
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

