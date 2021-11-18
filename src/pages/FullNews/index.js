import React from 'react';
import {Header} from "../../components/Home/Header";
import {HeaderSimpleAbout} from "../../components/Home/Header/HeaderSimpleAbout";
import {Footer} from "../../components/Home/Footer";
import {ContFullNews} from "../../components/Home/ContFullNews";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";

export const FullNews = () => {
    return (
        <div className="simple_page_standart bodyHome">
            <Header/>
            <HeaderSimpleAbout bread={'Полная новость'} title={'Полная новость'}/>
            <ContFullNews/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

