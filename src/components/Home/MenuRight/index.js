import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './style.scss';
import Grow from '@mui/material/Grow';
import {openMenu} from "../../../store/menu/actions";
import {LkHeaderUserProfile} from "../../Lk/HeaderUserProfile";
import {MenuRightLinkItem} from "./MenuRightLinkItem";
import {useHistory} from "react-router";

export const MenuRight = () => {

    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const { showMenu,auth } = useSelector((state) => state);

    const {push}=useHistory()
    const handlePush = (e)=>{
        e.preventDefault()
        push('/login')
        setName()
    }
    const handlePushRegistr = (e)=>{
        e.preventDefault()
        push('/register')
        setName()
    }

    return (
        <Grow in={showMenu.showMenuBurg} unmountOnExit>
        <div className="menu_right_open_r closed wow slideInRight">

            <div onClick={setName} className="close_menu_btn">
                <span className="before"/>
                <span className="after"/>
            </div>
            <LkHeaderUserProfile path={'/transactions'}  logo={'/images/user.png'} textClassName={'userProfileText'} homeClassName={auth.token!=null?'user_profile_rightMenu':'user_profile_rightMenu none'} buttonClassName='user_part_exit_marginTop'/>
            <div className={'menu_link_wrapper'}>
                <a href={'/'} onClick={handlePush} style={{display:auth.token?'none':'block'}} className='push_link'>Вход</a>
                <a href={'/'} onClick={handlePushRegistr} style={{display:auth.token?'none':'block'}} className='push_linkRegistr'>Регистрация</a>
            </div>
            <ul>
                {auth.token!==null&&<li>
                    <MenuRightLinkItem path={'/lk'} title={'Кабинет'}/>
                </li>}
                <li className="active">
                    <MenuRightLinkItem path={'/'} title={'Главная'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/about'} title={'О нас'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/faq'} title={'Faq'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/review'} title={'Отзывы'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/contact'} title={'Контакты'}/>
                </li>
            </ul>
        </div>
        </Grow>
    );
};

