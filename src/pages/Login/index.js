import React from 'react';
import {Header} from "../../components/Home/Header";
import {Footer} from "../../components/Home/Footer";
import {ContLogin} from "../../components/Home/ContLogin";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";

export const Login = () => {
    return (
        <div className='login bodyHome'>
            <div className='bg_pink'/>
            <Header/>
            <ContLogin/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

