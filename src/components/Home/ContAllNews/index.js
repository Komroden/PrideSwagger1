import React, {useState} from 'react';
import {NewsCard} from "../NewsCard";
import './style.scss';
import {useSelector} from "react-redux";
import {Pagination} from "../ContReview/Pagination";

export const ContAllNews = () => {
    const { news } = useSelector((state) => state);
    const [currentPage,setCurrentPage]=useState(1);
    const [itemOnPage]=useState(9);
    const lastItemIndex = currentPage * itemOnPage
    const firstItemIndex = lastItemIndex-itemOnPage
    const currentItem = news.value.slice(firstItemIndex,lastItemIndex)

    const paginate=pageNumber=> setCurrentPage(pageNumber);
    const nextPage=()=> {
        if(currentPage===3){
            setCurrentPage(1)
        }
        setCurrentPage(prev => prev + 1)
    };
    const prevPage=()=> {
        if(currentPage===1){
            setCurrentPage(3)
        }
        setCurrentPage(prev => prev - 1)
    };
    return (
        <div className="main_cont">
            <div className="news_row containerP new_news_row">
                {currentItem.map((item,index)=><NewsCard key={index} date={item.publishDate} url={item.image} text={item.objectName}/>)}

            </div>
            <div className="pagination_p">
                <div className="containerP">
                    <li onClick={prevPage} className="prev_pag ">
                        <i className="fa fa-arrow-left" aria-hidden="true"/>
                    </li>
                    <Pagination itemsPerPage={itemOnPage} totalItems={27} paginate={paginate} className={"prev_pag "}/>
                    <li onClick={nextPage} className="prev_pag ">
                        <i className="fa fa-arrow-right" aria-hidden="true"/>
                    </li>
                </div>
            </div>
        </div>
    );
};

