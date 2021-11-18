import React from 'react';

import {Footer} from "../../components/Home/Footer";
import {Header} from "../../components/Home/Header";
import {HeaderSimpleAbout} from "../../components/Home/Header/HeaderSimpleAbout";
import {ContReview} from "../../components/Home/ContReview";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";


export const Review = () => {
    return (

        <div className="simple_page bodyHome">
            <Header activeRev={'active'}/>
            <HeaderSimpleAbout bread={'Отзывы'} title={'Отзывы о Pride'}/>
            <ContReview/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};