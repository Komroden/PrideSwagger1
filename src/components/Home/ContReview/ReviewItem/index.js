import React from 'react';

export const ReviewItem = ({url,login,desc}) => {
    return (
        <div className="news_item_refer">
					<span className="news_item_head">
						<span className="news_item_head_left">
							<span className="news_head_logo"
                                  style={{backgroundImage: url}}/>
							</span>
							<span className="news_item_head_right">
								<span className="news_item_head_name">{login}</span>
								<span className="news_item_head_profes">
									designer at
									<a href="#">btcoins</a>
								</span>
							</span>
					</span>
            <span className="news_item_descr">{desc}</span>
        </div>
    );
};

