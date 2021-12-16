import React from 'react';
import {useImage} from "../../../../hooks/useImage";

export const DrawItemArchive = ({imgUrl,title,priceAdd,startDate,members,name}) => {
    const {pic}=useImage(imgUrl,'/images/prize.png')
    let d =new Date(startDate)
    return (
        <div className="rozgr_item rozgr_item_archive">
            <div className="rozgr_item_left">
                <div className="rozgr_item_left_row">
                    <div className="rozgr_item_left_img">
                        <img src={pic} alt=""/>
                    </div>
                    <div className="rozgr_item_left_descr">
                        <div className="rozgr_item_left_title">{title}</div>
                        <div className="rozgr_item_winner">Победитель</div>
                        <div className="gost_item_top">
                            <div className="gost_item_logo"
                                 style={{backgroundImage: ''}}/>
                            <div className="gost_item_top_right">
                                <div className="gost_item_name">{name}</div>
                                <div className="gost_item_year">age</div>
                                <div className="gost_item_online">status</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rozgr_item_left_row rozgr_item_left_row_bottom">
                    <div className="rozgr_item_left_bot_text">Конкурс добавлен {d.toLocaleDateString()}</div>
                    <div className="rozgr_item_left_bot_text rozgr_item_left_bot_text_r"><img
                        src="/images/face.png" alt=""/> В конкурсе участвую {members} человек</div>
                </div>
            </div>
            <div className="rozgr_item_right">
                <div className="rozgr_item_timer">
                    <div className="rozgr_item_img">
                        <img src="/images/timer.png" alt=""/>
                    </div>
                    <div className="rozgr_item_hours">
                        <div className="rozgr_item_big_hours">00:00</div>
                        <div className="rozgr_item_hours_descr">Окончание конкурса</div>
                    </div>
                </div>
                <div className="rozgr_item_text">
                    <img src="/images/price_small.png" alt=""/>Стоимость участия:
                    <span>{priceAdd} р.</span>
                </div>
                <button disabled className="rozgr_item_btn">Конкурс окончен!</button>
            </div>
        </div>
    );
};

