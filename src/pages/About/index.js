import React from 'react';

import {Footer} from "../../components/Home/Footer";
import {HeaderSimpleAbout} from "../../components/Home/Header/HeaderSimpleAbout";
import {Header} from "../../components/Home/Header";
import {ContAbout} from "../../components/Home/ContAbout";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";

export const About = () => {
    return (

            <div className="simple_page_standart bodyHome">
                <Header activeAbout={'active'}/>
            <HeaderSimpleAbout bread={'О нас'} title={'О Компании'}/>
            <ContAbout/>
            <Footer/>
                <MenuRight/>
                <Timer />
                <Message/>
            </div>
    );
};

