import React, {useCallback} from 'react';
import {LkHomeHeaderLinks} from "../LkHomeHeaderLinks";
import './style.scss';


import {useDispatch, useSelector} from "react-redux";
import {openLeftMenu} from "../../../../store/leftMenu/actions";
import {LkHeaderUserProfile} from "../../HeaderUserProfile";


export const LkHomeHeader = ({title}) => {

    const dispatch = useDispatch();
    const openMenu = useCallback(() => {
        dispatch(openLeftMenu())
    }, [dispatch]);
    const { leftMenu,allInfoUser } = useSelector((state) => state);



    return (
        <header className="main_content_header">
            <div  onClick={openMenu} className={!leftMenu.leftMenu ?'hamburger':'hamburger active'}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span  className="name_page_text">{title}</span>
            </div>
            <div className="main_content_header_right">
                <div className="links_header">
                    <LkHomeHeaderLinks url='/images/l1.png' path={'/newMessage'} count={allInfoUser.value.messagesCount} />
                    <LkHomeHeaderLinks url='/images/l2.png' path={'/notifications'} count={0}/>
                    <LkHomeHeaderLinks url='/images/l3.png' color='yeallow_col' path={'/draw'} count={0} />
                    <LkHomeHeaderLinks url='/images/l4.png' color='dark_col' path={'/guest'} count={allInfoUser.value.visitorsCount}/>
                </div>
                <LkHeaderUserProfile path={'/transactions'}  />
            </div>
        </header>
    );
};

