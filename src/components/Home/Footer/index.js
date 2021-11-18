import React, {useCallback} from 'react';
import './style.scss'
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {openMenu} from "../../../store/menu/actions";

export const Footer = () => {
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const {push}=useHistory()
    const handlePushHome=() => {
        push('/')
    }
    const handlePushAbout=() => {
        push('/about')
    }
    const handlePushAllNews=() => {
        push('/allNews')
    }
    const handlePushRev=() => {
        push('/review')
    }
    const handlePushCont=() => {
        push('/contact')
    }
    return (
        <footer className="footer">
            <div className="clasic_footer">
                <div className="containerP">
                    <div className="clasic_footer_left">
                        <a href="/" className="logo">
                            <img src="/images/logo.png" alt=""/>
                        </a>
                        <div className="footer_descr">
                            <p>Тут блок с описание и правилами , текст примерem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                        </div>
                    </div>
                    <div className="clasic_footer_menu">
                        <div className="clasic_footer_title">Меню</div>
                        <div className="clasic_footer_nav">
                            <ul>
                                <li>
                                    <a onClick={handlePushHome}>Главная</a>
                                </li>
                                <li>
                                    <a onClick={handlePushAbout}>О нас</a>
                                </li>
                                <li>
                                    <a href="/">Как начать</a>
                                </li>
                                <li>
                                    <a href="/">Инвестиции</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clasic_footer_menu">
                        <div className="clasic_footer_title">Меню</div>
                        <div className="clasic_footer_nav">
                            <ul>
                                <li>
                                    <a onClick={handlePushRev}>Отзывы</a>
                                </li>
                                <li>
                                    <a onClick={handlePushAllNews}>Новости</a>
                                </li>
                                <li>
                                    <a onClick={setName} >Меню</a>
                                </li>
                                <li>
                                    <a onClick={handlePushCont} >Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clasic_footer_menu">
                        <div className="clasic_footer_title">Документы</div>
                        <div className="clasic_footer_nav">
                            <ul>
                                <li>
                                    <a href="/">Сертификат</a>
                                </li>
                                <li>
                                    <a href="/">Лицензия 0234АР</a>
                                </li>
                                <li>
                                    <a href="/">Правовая информация</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="under_footer">
                <div className="containerP">
                    <div className="under_footer_left">
                        <div className="copyr">© 2011-2020 Pride.io Все права защищены.</div>
                    </div>
                    <div className="under_footer_right">
                        <ul>
                            <li>
                                <a href="#" className="fb"/>
                            </li>
                            {/* <li>*/}
                            {/*    <a href="#" class="m"></a>*/}
                            {/*</li> */}
                            <li>
                                <a href="#" className="telegram"/>
                            </li>
                            <li>
                                <a href="#" className="btc"/>
                            </li>
                            <li>
                                <a href="#" className="tw"/>
                            </li>
                            <li>
                                <a href="#" className="inst"/>
                            </li>
                            <li>
                                <a href="#" className="gith"/>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

