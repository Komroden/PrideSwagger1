import React, {useState} from 'react';
import './style.scss';
import {NewsItemLk} from "./NewsItemLk";
import {useSelector} from "react-redux";


export const NewsMain = () => {
    const { news } = useSelector((state) => state);
    const [count,setCount]=useState(9)
    const handleAddNews=e=>{
        e.preventDefault()
        news.value.filter((item,index)=>index>count)
        setCount(count+9)
    }
    return (
        <>
            <div className="grey_line"/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">Новости</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про
                            голосование
                        </div>
                    </div>

                </div>

                <div className="news_row">
                    {news.value.map((item)=><NewsItemLk id={item.id} key={item.id} date={item.publishDate} url={item.image} text={item.objectName}/>)}
                    {news.value.map((item)=><NewsItemLk id={item.id} key={item.id} date={item.publishDate} url={item.image} text={item.objectName}/>)}
                    {news.value.map((item)=><NewsItemLk id={item.id} key={item.id} date={item.publishDate} url={item.image} text={item.objectName}/>)}


                </div>
                {news.value.length>9&&<a href="/" onClick={handleAddNews} className="more_news">
                    <span>Еще новости</span>
                    <img src="/images/chevr_pink.png" alt=""/>
                </a>}
            </div>
            <div className="main_for_all_pages youtube_main">
                <div className="youtube_row">
                    <div className="youtube_item">

                            <iframe style={{width: '100%'}} height="225" src="https://www.youtube.com/embed/ozq5pqdekuE"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={'CBS'}/>

                        <div className="youtube_item_text">Токены CBS - что будет дальше. Заголовок видео!</div>
                    </div>
                    <div className="youtube_item">

                            <iframe style={{width: '100%'}} height="225" src="https://www.youtube.com/embed/xD5EDTKFig4"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={'Where'}/>

                        <div className="youtube_item_text">Где найти деньги на свой стартапв гараже!</div>
                    </div>
                    <div className="youtube_item">

                            <iframe style={{width: '100%'}} height="225" src="https://www.youtube.com/embed/XReHfoqiDf0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={'CBS1'}/>

                        <div className="youtube_item_text">Токены CBS - что будет дальше. Заголовок видео!</div>
                    </div>
                </div>
                <div className="open_more_youtube">
                    <a href="/" className="open_more_youtube_link">
                        <span>наш youtube канал </span>
                        <img src="images/yuotube.png" alt=""/>
                    </a>
                </div>
            </div>
        </>
    );
};

