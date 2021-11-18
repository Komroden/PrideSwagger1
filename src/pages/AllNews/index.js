import React from 'react';
import {Header} from "../../components/Home/Header";
import {HeaderSimpleFaq} from "../../components/Home/Header/HeaderSimpleFaq";

import {Footer} from "../../components/Home/Footer";
import {ContAllNews} from "../../components/Home/ContAllNews";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";


export const AllNews = () => {
    return (
        <div className="simple_page bodyHome">
            <Header/>
            <HeaderSimpleFaq bread={'Новости'} title={'Новости от Pride'}/>
<ContAllNews/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};