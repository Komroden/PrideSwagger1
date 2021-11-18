import React, {useCallback, useEffect, useState} from 'react';
import './style.scss';
import {LkHomeRightSlidebarNewsItem} from "../LkHomeRightSlidebarNewsItem";
import {LkHomeRightSlidebarUserOnLine} from "../LkHomeRightSlidebarUserOnLine";
import {useDispatch, useSelector} from "react-redux";

import {setContestsList} from "../../../../store/contest/actions";
export const LkHomeRightSlidebar = () => {
    const { auth,contests } = useSelector((state) => state);
    const [contest,setContest]= useState([])
    const dispatch=useDispatch()
    const setContests = useCallback(() => {
        dispatch(setContestsList(contest))
    }, [dispatch,contest]);

    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/Contest/contest-list',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => res.json())
            .then((body)=>{
                setContest(body)
                console.log(body)
            })
            .catch((e) => {
                console.log(e.message);
            });
    },[auth.token])
    useEffect(()=>{
        setContests()
    },[contest])




    return (
        <div className="main_content_right_sidebar">
            <div className="right_news_row">
                <div className="right_news_title">
                    <div className="right_news_title_img">
                        <img src="/images/price_red.png" alt=""/>
                    </div>
                    <div className="right_news_title_text">
                        <div className="right_news_title_t">Розыгрыши</div>
                        <div className="right_news_title_subt">Lorem ipsum dolor</div>
                    </div>
                </div>
                {contests.value.map((item,index)=>
                  <LkHomeRightSlidebarNewsItem key={item.id} img={item.desc} value={item.participationCost} title={item.caption}  />)}
                {/*<LkHomeRightSlidebarNewsItem img='/images/news1.png' title='Lays - Акция ! Футбол вкуснее с LAY’s !' value='6 000 р.'/>*/}
                {/*<LkHomeRightSlidebarNewsItem img='/images/news2.png' title='Акция ! Заправь свою машину с шинами Michelin' value='3 500 р.'/>*/}
                {/*<LkHomeRightSlidebarNewsItem img='/images/news3.png' title='Milka - Акция ! получи супер подарок от MILKA' value='100 000 р.'/>*/}
                <a href="#" className="right_news_row_viewmore">
                    <span>View more</span>
                    <img src="/images/chevr_pink.png" alt=""/>
                </a>
            </div>
            <div className="my_statistic">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="main_content_right_sidebar_title_bl_title">Рефералы</div>
                    <div className="main_content_right_sidebar_title_bl_subtitle">моя статистика</div>
                </div>
                <div className="my_statistic_row">
                    <div className="my_statistic_item">
                        <div className="my_statistic_number">33,999</div>
                        <div className="my_statistic_text">Переходов</div>
                    </div>
                    <div className="my_statistic_item">
                        <div className="my_statistic_number">23,469</div>
                        <div className="my_statistic_text">Регистраций</div>
                    </div>
                    <div className="my_statistic_item my_statistic_item_greem">
                        <div className="my_statistic_number">22,929</div>
                        <div className="my_statistic_text">Активаций</div>
                    </div>
                </div>
                <div className="my_statistic_bottom">Статистика обновляется каждые 24 часа</div>
            </div>
            <div className="now_on_site">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="main_content_right_sidebar_title_bl_title">Сейчас на сайте</div>
                    <div className="main_content_right_sidebar_title_bl_subtitle">Пользователи онлайн 2 459</div>
                </div>
                <div className="now_on_site_row">
                    <LkHomeRightSlidebarUserOnLine img='/images/user1.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user2.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user3.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user4.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user5.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user6.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user7.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user1.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user2.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user3.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user4.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user5.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user6.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user7.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user1.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user2.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user3.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user4.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user5.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user6.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user7.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user1.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user2.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user3.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user4.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user5.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user6.png'/>
                    <LkHomeRightSlidebarUserOnLine img='/images/user7.png'/>
                </div>
            </div>
        </div>
    );
};

