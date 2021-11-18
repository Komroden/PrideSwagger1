import React from 'react';
import {Header} from "../../components/Home/Header";
import {HeaderSimpleFaq} from "../../components/Home/Header/HeaderSimpleFaq";
import {ContFaq} from "../../components/Home/ContFaq";
import {Footer} from "../../components/Home/Footer";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";


export const Faq = () => {
    return (
        <div className="simple_page_standart bodyHome">
            <Header activeFaq={'active'}/>
            <HeaderSimpleFaq bread={'Faq'} title={'Faq'}/>
            <ContFaq/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

