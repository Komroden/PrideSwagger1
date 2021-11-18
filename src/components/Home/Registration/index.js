import React from 'react';
import './style.scss';
import Slider from "react-slick";
import {useHistory} from "react-router";
import {NewsCard} from "../NewsCard";
import {Event} from "./Event";
import {useSelector} from "react-redux";
export const Registration = () => {
    const { news } = useSelector((state) => state);
    const windowInnerWidth = window.innerWidth
    const {push}=useHistory()


    const handlePushAllNews=() => {
        push('/allNews')
    }
    const handlePushRegist=() => {
        push('/register')
    }

    const slider = React.useRef(null);
        const settings = {
            arrows:false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: windowInnerWidth>500?3:2,
            slidesToScroll: 1

        };

    return (
        <div className="bg_big">
            <div className="register_click">
                <div className="containerP">
                    <div className="register_click_left">
                        <img src="/images/reg_img.png" alt="" className="register_click_img wow pulse"
                             data-wow-iteration="infinite" data-wow-duration="2.5s"/>
                    </div>
                    <div className="register_click_right">
                        <div className="yel_titl">как начать зарабатывть</div>
                        <div className="regg_title">Регистрируйся в пару кликов</div>
                        <div className="steps wow slideInRight" data-wow-duration="2s">
                            <div className="count_step">
                                <span>1</span>
                            </div>
                            <div className="right_step">
                                <div className="step_tit">Регистрация</div>
                                <div className="step_descr">Yellentesque vestibulum fermentum velit non placerat
                                    aecenase in hendrerit justo quisque quis.
                                </div>
                            </div>
                        </div>
                        <div className="steps wow slideInRight" data-wow-duration="3s">
                            <div className="count_step">
                                <span>2</span>
                            </div>
                            <div className="right_step">
                                <div className="step_tit">Пополнение баланаса</div>
                                <div className="step_descr">Yellentesque vestibulum fermentum velit non placerat
                                    aecenase in hendrerit justo quisque quis.
                                </div>
                            </div>
                        </div>
                        <div className="steps wow slideInRight" data-wow-duration="4s">
                            <div className="count_step"><span>3</span></div>
                            <div className="right_step">
                                <div className="step_tit">заключить контакт</div>
                                <div className="step_descr">Yellentesque vestibulum fermentum velit non placerat
                                    aecenase in hendrerit justo quisque quis.
                                </div>
                            </div>
                        </div>
                        <a onClick={handlePushRegist} className="invest_btn">Регистрация</a>
                    </div>
                </div>
            </div>
            <div className="video_blog">
                <div className="containerP">
                    <div className="title_bg wow slideInUp" data-wow-duration="2s">
                        <div className="bg wow pulse" data-wow-iteration="infinite" data-wow-duration="2.5s">
                            <img src="/images/bg_title.png" alt=""/>
                        </div>
                        <div className="pride_title">Видео блог компании</div>
                        <div className="pride_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do <br/>eiusmod tempor incididunt ut labore et dolore magna</div>
                    </div>
                    <div className="flex_row_video">
                        <span
                           className="popup-youtube video_item wow slideInUp" data-wow-duration="2s">
	  							<iframe height="250" src="https://www.youtube.com/embed/ozq5pqdekuE"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            <span className="vider_title_you">Токены CBS - что будет дальше. Заголовок видео!</span>
                        </span>
                        <div
                           className="popup-youtube video_item wow slideInUp" data-wow-duration="3s">
                            <iframe height="250" src="https://www.youtube.com/embed/xD5EDTKFig4"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <span className="vider_title_you">Где найти деньги на свой стартапв гараже!</span>
                        </div>
                        <span
                           className="popup-youtube video_item wow slideInUp" data-wow-duration="4s">

	  							<iframe height="250" src="https://www.youtube.com/embed/XReHfoqiDf0"
                                        allow="accelerometer; autoplay; gyroscope; picture-in-picture"
                                        allowFullScreen/>

                            <span className="vider_title_you">Токены CBS - что будет дальше. Заголовок видео!</span>
                        </span>

                    </div>
                    <a href="#" className="invest_btn wow slideInUp" data-wow-duration="2s">наш youtube канал <img
                        src="/images/you_icon.png" alt=""/></a>
                </div>
            </div>
            <div className="new_pride">
                <div className="containerP">
                    <div className="pride_title">новости от pride.</div>
                </div>
                <div className="dflex_news">
                    <div className="news_left_img wow slideInLeft" data-wow-duration="2s">
                        <img src="/images/news.png" alt=""/>
                    </div>
                    <div className="news_right wow slideInRight" data-wow-duration="2s">

                        <div className="news_slider">
                            <Slider ref={slider} {...settings}>
                                {news.value.map((item,index)=><NewsCard key={index} date={item.publishDate} url={item.image} text={item.objectName}/>)}
                            {/*<NewsCard url={'url(/images/newsimg.jpg)'}/>*/}
                            {/*<NewsCard url={'url(/images/newsimg2.png)'}/>*/}
                            {/*<NewsCard url={'url(/images/newsimg3.png)'}/>*/}
                            {/*<NewsCard url={'url(/images/newsimg.jpg)'}/>*/}
                            {/*<NewsCard url={'url(/images/newsimg2.png)'}/>*/}
                            {/*<NewsCard url={'url(/images/newsimg3.png)'}/>*/}
                        </Slider>
                        </div>

                        <div className="slider_nav">
                            <div className="left_slide" onClick={() => slider?.current?.slickPrev()}>

                            </div>
                            <div className="right_slide" onClick={() => slider?.current?.slickNext()}>

                            </div>
                            <a onClick={handlePushAllNews} className="all_news">все новости</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="show">
                <div className="containerP">
                   <Event/>
                </div>
            </div>
        </div>
    );
};

