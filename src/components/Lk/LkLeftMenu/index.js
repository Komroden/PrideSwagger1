import React, {useCallback} from 'react';
import './style.scss';

import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {LkLeftMenuOpenFive} from "./LkLeftMenuOpenFive";
import {LkLeftMenuOpenThree} from "./LkLeftMenuOpenThree";
import {openLeftMenu} from "../../../store/leftMenu/actions";


export const LkLeftMenu = () => {
    const dispatch = useDispatch();
    const openMenu = useCallback(() => {
        dispatch(openLeftMenu())
    }, [dispatch]);
    const { leftMenu } = useSelector((state) => state);
    const {push}=useHistory()
    const handlePushSettings=(e) => {
        e.preventDefault()
        push('settings')
        openMenu()
    }
    const handlePushHome=(e) => {
        e.preventDefault()
        push('/lk')
    }
    const handlePushStructure=(e) => {
        e.preventDefault()
        push('/structure')
    }



    return (
        <div  className={ leftMenu.leftMenu ?'menu_left_sidebar active':'menu_left_sidebar'} >
            <div className="top_sidebar">
                <div className="menu_left_sidebar_top">
                    <a href={'/'} onClick={handlePushHome} className="logo">
                        <img src="/images/logo.png" alt=""/>
                    </a>

                </div>
                <div onClick={handlePushHome} className="your_cab">
                    <div className="your_cab_ins">
                        <img src="/images/your_cab.png" alt=""/>
                            <span className="your_cab_text">Личный кабинет</span>
                    </div>
                </div>
                <div className="us_menu">
                    <ul>
                        <LkLeftMenuOpenFive title={'Основные'} icon={'/images/icon_m2.png'}
                                            subtitle1={'Главная'} subtitle2={'О нас'} subtitle3={'FAQ'} subtitle4={'Отзывы'} subtitle5={'Контакты'}
                                            path1={"/"} path2={'/about'} path3={'/faq'} path4={'/review'} path5={'/contact'}/>
                        <li onClick={handlePushSettings} className="us_menu_li">
                            <div  >
                                <img src="/images/icon_m1.png" alt=""/>
                                <span className="text_li">Настройки профиля</span>
                            </div>
                        </li>
                        <LkLeftMenuOpenFive title={'Платформа'} icon={'/images/icon_m2.png'}
                                            subtitle1={'Новости'} subtitle2={'Голосование'} subtitle3={'Розыгрыши'} subtitle4={'Сообщения'} subtitle5={'Гости'}
                        path1={'/lkNews'} path3={'/draw'} path2={'/vote'} path4={'/chats'} path5={'/guest'}/>
                        <LkLeftMenuOpenThree title={'Финансы'} icon={'/images/icon_m2.png'}
                                            subtitle1={'Пополнить счет'} subtitle2={'Вывод средств'} subtitle3={'История операций'}
                         path1={'/refill'} path3={'/history'}/>
                        <LkLeftMenuOpenThree title={'Прогораммы'} icon={'/images/icon_m2.png'}
                                             subtitle1={'Программа  Макси 1'} subtitle2={'Программа  Макси 2'} subtitle3={'Программа  Макси 3'}
                                             path1={'/programMaxi'} path2={'/programMaxi2'} path3={'/programMaxi3'} />
                        {/*<LkLeftMenuOpenFive title={'Прогораммы'} icon={'/images/icon_m2.png'}*/}
                        {/*                     subtitle1={'Программа  Макси'} subtitle2={'Программа  №15'} subtitle3={'Программа Матрикс'} subtitle4={'Программа Автомобильная'} subtitle5={'Добавить программу'}*/}
                        {/*path1={'/programMaxi'} path2={'/program15'} path3={'/programMatrix'} path4={'/programAuto'} path5={'/addProg'}/>*/}
                        <LkLeftMenuOpenThree title={'О проекте'} icon={'/images/icon_m2.png'}
                                             subtitle1={'Оферта'} subtitle2={'Правила'} subtitle3={'Мисиия'}
                        path1={'/offer'}/>
                        <li onClick={handlePushStructure} className="us_menu_li us_menu_li_hiddenMobile">
                            <div  >
                                <img src="/images/icon_m1.png" alt=""/>
                                <span className="text_li">Структура рефералов</span>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="bottom_sidebar">
                <div className="balance_sidebar">
                    <div className="balance_sidebar_title">Баланс стабилизационного фонда</div>
                    <div className="balance_sidebar_total">1 348.343 ETH</div>
                    <a href="/" className="balance_sidebar_link">смореть на blockchain</a>
                </div>
                <div className="advert">
						<span className="us_menu_li">
							<a href="/" onClick={handlePushHome}>
								<img className='reklama_link' src="/images/icon_m2.png" alt=""/>
								<span className="text_li">Рекламодатели</span>
							</a>
						</span>
                    <a href="/" className="advert_link">
                        <img src="/images/advert1.png" alt=""/>
                    </a>
                    <a href="/" className="advert_link">
                        <img src="/images/advert2.png" alt=""/>
                    </a>
                </div>
                <div className="footer_sidebar">
                    <a href="/" className="call_help">
                        <span className="green_circle"/>
                        <span>написать в тех.поддержку</span>
                    </a>
                    <div className="copyr"><strong>Pride.io User Dashboard</strong> <br/>© 2020 All Rights Reserved</div>
                    <div className="footer_links">
                        <a href="/">Публичная оферта</a>
                        |
                        <a href="/">Правила сервиса</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

