import React from 'react';
import {Header} from "../../components/Home/Header";

import {Footer} from "../../components/Home/Footer";
import {ContRegister} from "../../components/Home/ContRegister";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";
import {MessageSms} from "../../components/Home/MessageSms";

export const Registration = () => {
    return (
        <div className='login bodyHome'>
            <div className='bg_pink'/>
            <Header/>
            <ContRegister/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
            <MessageSms/>
        </div>
    );
};

