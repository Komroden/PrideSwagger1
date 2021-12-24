import React from 'react';
import {NewsCard} from "../NewsCard";
import './style.scss';
import {useSelector} from "react-redux";
import {usePagination} from "../../../hooks/usePagination";
import {PaginationHome} from "../../../api/PaginationHome/PaginationHome";

export const ContAllNews = () => {
    const { news } = useSelector((state) => state);
    const pagination=usePagination(news.value,9)
    return (
        <div className="main_cont">
            <div className="news_row containerP new_news_row">
                {pagination.currentItem.map((item,index)=><NewsCard key={index} date={item.publishDate} url={item.image} text={item.objectName}/>)}

            </div>
            {news.value.length>9&&<PaginationHome countOnPage={9} items={news.value} nextPage={pagination.nextPage}
                             paginate={pagination.paginate} prevPage={pagination.prevPage}/>}
        </div>
    );
};

