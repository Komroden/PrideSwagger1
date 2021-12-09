import React, {useState,useCallback} from 'react';
import './style.scss';
import Fade from '@mui/material/Fade';
import {useDispatch, useSelector} from 'react-redux';

import {useHistory} from "react-router";
import {UserLogout} from "../../../store/auth/actions";
import {openMenu} from "../../../store/menu/actions";
import {HeaderLinkItem} from "./HeaderLinkItem";



export const Header = (props) => {

    const { userData,auth } = useSelector((state) => state);
    const {push}=useHistory()
    const handlePushHome=(e) => {
        e.preventDefault()
        push('/')
    }
    const handlePushLk=(e) => {
        e.preventDefault()
        push('/lk')
    }
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const setLogout = useCallback(() => {
        dispatch(UserLogout())
    }, [dispatch]);
    const [showName,setShowName]=useState(false);
    const [showLang,setShowLang]=useState(false);
    const handleLogout =(e)=>{
        e.preventDefault()
        if(auth.token==null) return
        sessionStorage.clear()
        setLogout()
        setShowName(false)
    };
    const handlePushLogin=(e)=>{
        e.preventDefault()

        push('/lk')
    }
    return (

            <header className="header">

                <div className="first_containerP">
                    <div className="header_left">
                        <a href={'/'} onClick={handlePushHome} className="logo">
                            <img src='/images/logo.png' className='logoImage' alt='pride'/>
                        </a>
                        <div className="menu">
                            <nav className="navig_menu">
                                <ul>
                                    <li className={props.activeHome}>
                                        <HeaderLinkItem title={'Главная'} path={'/'}/>

                                    </li>
                                    <li className={props.activeAbout}>
                                        <HeaderLinkItem title={'О нас'} path={'/about'}/>

                                    </li>
                                    <li className={props.activeFaq} >
                                        <HeaderLinkItem title={'Faq'} path={'/faq'}/>

                                    </li>
                                    <li className={props.activeRev}>
                                        <HeaderLinkItem title={'Отзывы'} path={'/review'}/>

                                    </li>
                                    <li className={props.activeCont}>
                                        <HeaderLinkItem title={'Контакты'} path={'/contact'}/>

                                    </li>

                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div className="header_right">
                        <div className="hello_open_row">
                            <div className="hello_open">
                                {auth.token!==null&&<span className="hello_bas">Привет :</span>}
                                <div onClick={() => auth.token!==null?setShowName(!showName):setShowName(false)} className="open_name_info">
                                    <div className="hello_name" onClick={auth.token!==null?()=>{}:handlePushLogin}>{userData.value.userInfo.login ? userData.value.userInfo.login : 'ВХОД В КАБИНЕТ'}</div>
                                    {auth.token!==null&&<div className="btn_open_name"/>}
                                </div>
                                </div>
                                    <Fade in={showName} >
                                    <div className="name_row_open">
                                    <a href={'/'} onClick={handlePushLk}>В КАБИНЕТ</a>
                                    <a href={'/'} onClick={auth.token!==null?handleLogout:handlePushLogin}>{auth.token!==null?'Выход':'Вход'}</a>
                                    </div>
                                    </Fade>
                                    </div>
                        <div className="languag">
                            <div onClick={()=>setShowLang(!showLang)} className="lang_btn btn_for_open_lang">RU</div>
                            <Fade in={showLang} >
                            <div className="open_row_lang">
                                <div className="lang_btn">ENG</div>
                                <div className="lang_btn">GER</div>
                            </div>
                            </Fade>
                        </div>
                        <div className="menu_right">
                            <div onClick={setName} className="menu_right_btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                    </div>

                </div>
            </header>
)
};

