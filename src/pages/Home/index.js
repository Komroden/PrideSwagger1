import React from 'react';
import './style.scss';
import {Main} from "../../components/Home/Main";
import {WhyMe} from "../../components/Home/WhyMe";
import {CryptoShop} from "../../components/Home/CryptoShop";
import {InvestPlan} from "../../components/Home/InvestPlan";
import {Calculator} from "../../components/Home/Calculator";
import {Registration} from "../../components/Home/Registration";
import {Statistic} from "../../components/Home/Statistic";
import {Contacts} from "../../components/Home/Contacts";
import {Footer} from "../../components/Home/Footer";
import {Header} from "../../components/Home/Header";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";



export const Home = () => {
    return (
        <div className='bodyHome'>
            <div className='bg_pink'/>
                <Header activeHome={'active'}/>
            <Main/>
            <WhyMe/>
            <CryptoShop/>
            <InvestPlan/>
            <Calculator/>
            <Registration/>
            <Statistic/>
            <Contacts title={'Форма обратной связи'} isSocial={true}/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

