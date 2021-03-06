import React from 'react';
import './style.scss';
import {LkHomeRightSlidebarNewsItem} from "../LkHomeRightSlidebarNewsItem";
import {LkHomeRightSlidebarUserOnLine} from "../LkHomeRightSlidebarUserOnLine";
import { useSelector} from "react-redux";
import {useHistory} from "react-router";
import {useText} from "../../../../hooks/useText";
import {useFetchWithTokenGet} from "../../../../hooks/useFetchWithTokenGet";
import {Loader} from "../../../../api/Loader";



export const LkHomeRightSlidebar = () => {
    const { contests } = useSelector((state) => state);
    // const [users,setUsers]=useState([])
    const users =useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Main/online-user-list',[])
    const statistic =useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Partners/referal-stat',{})
    // const [statistic,setStatistic]=useState({})
    const textLink=useText(statistic.linkHitsCount,'Переход','Перехода','Переходов')
    const textReg=useText(statistic.referalsCount,'Регистрация','Регистрации','Регистраций')
    const textActivate=useText(statistic.activatedReferalsCount,'Активация','Активации','Активаций')


    const {push}=useHistory()
    const handlePush=(e) => {
        e.preventDefault()
        push(`/draw`)
    }



    // online user list
    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Main/online-user-list', {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then((res) => res.json())
    //             .then((body) => {
    //                 setUsers(body)
    //             })
    //             .catch((e) => {
    //                 console.log(e.message);
    //             });
    //     }
    //     return ()=>{setUsers([])}
    // },[auth.token])

    // referal-stat
    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Partners/referal-stat', {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then((res) => res.json())
    //             .then((body) => {
    //                 setStatistic(body)
    //             })
    //             .catch((e) => {
    //                 console.log(e.message);
    //             });
    //     }
    //     return ()=>{setStatistic({})}
    // },[auth.token])





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
                {contests.active.map((item)=>
                  <LkHomeRightSlidebarNewsItem key={item.id} img={item.image} value={item.participationCost} title={item.caption}  />)}
                {contests.active.length>2&&<a href={'/'} onClick={handlePush} className="right_news_row_viewmore">
                    <span>View more</span>
                    <img src="/images/chevr_pink.png" alt=""/>
                </a>}
            </div>
            <div className="my_statistic">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="main_content_right_sidebar_title_bl_title">Рефералы</div>
                    <div className="main_content_right_sidebar_title_bl_subtitle">моя статистика</div>
                </div>
                <div className="my_statistic_row">
                    <div className="my_statistic_item">
                        <Loader loading={statistic.loading}/>
                        <div className="my_statistic_number">{statistic.data.linkHitsCount}</div>
                        <div className="my_statistic_text">{textLink}</div>
                    </div>
                    <div className="my_statistic_item">
                        <Loader loading={statistic.loading}/>
                        <div className="my_statistic_number">{statistic.data.referalsCount}</div>
                        <div className="my_statistic_text">{textReg}</div>
                    </div>
                    <div className="my_statistic_item my_statistic_item_greem">
                        <Loader loading={statistic.loading}/>
                        <div className="my_statistic_number">{statistic.data.activatedReferalsCount}</div>
                        <div className="my_statistic_text">{textActivate}</div>
                    </div>
                </div>
                <div className="my_statistic_bottom">Статистика обновляется каждые 24 часа</div>
            </div>
            <div className="now_on_site">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="main_content_right_sidebar_title_bl_title">Сейчас на сайте</div>
                    <div className="main_content_right_sidebar_title_bl_subtitle">Пользователи онлайн {users.data.length}</div>
                </div>
                <div className="now_on_site_row">
                    <Loader loading={users.loading}/>
                    {users.data.map((item)=>
                        <LkHomeRightSlidebarUserOnLine  key={item.id} id={item.id} img={item.image} />)}

                </div>
            </div>
        </div>
    );
};

