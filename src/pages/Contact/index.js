import React, {useLayoutEffect} from 'react';

import {Footer} from "../../components/Home/Footer";
import {HeaderSimpleAbout} from "../../components/Home/Header/HeaderSimpleAbout";
import {Header} from "../../components/Home/Header";
import {ContactTabs} from "../../components/Home/ContactTabs";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";
import {Contacts} from "../../components/Home/Contacts";


export const Contact = () => {
    useLayoutEffect (() => {
        window.scrollTo ( 0 , 0 ); }, []);
    return (

        <div className="simple_page_standart bodyHome">
            <Header activeCont={'active'}/>
            <HeaderSimpleAbout bread={'Контакты'} title={'Контакты'}/>
            <ContactTabs/>
            <Contacts title={'Контакты'} />
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};