import React from 'react';
import {useImage} from "../../../../hooks/useImage";

export const ReviewItem = ({url,login,desc,date}) => {
	const d=new Date(date)
	const {pic}=useImage(url)

    return (
        <div   className="news_item_refer">
					<span className="news_item_head">
						<span className="news_item_head_left">
							<span className="news_head_logo"
                                  style={{backgroundImage: `url(${pic})`}}/>
							</span>
							<span className="news_item_head_right">
								<span className="news_item_head_name">{login}</span>
								<span className="news_item_head_profes">
									{'Дата публикации: '+d.toLocaleDateString()}
								</span>
							</span>
					</span>
            <span className="news_item_descr">{desc}</span>
        </div>
    );
};

