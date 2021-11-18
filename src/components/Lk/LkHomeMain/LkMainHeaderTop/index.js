import React, { useState} from 'react';
import {LkHomeMainLiderTopItem} from "../LkHomeMainLiderTopItem";

import './style.scss';
export const LkMainHeaderTop = () => {

    const[open,setOpen]=useState(false)


    const handleOpen=(e)=>{

        setOpen(!open)

    }
    const handleClose=(e)=>{

        setOpen(!open)
    }

    return (
        <div className="lider_top">
            <div className="lider_top_title">
                лидеры <br/>
                ваш топ
            </div>
            <div onMouseEnter={handleOpen} onMouseLeave={handleClose}  className="lider_top_add">
                <a>
                    <span  className="dark_plus">+</span>

                </a>
                    <span  className={!open?'add_top hidden':'add_top visible'} >Добавить себя</span>
                <span className='linkNewTop'>
                    <LkHomeMainLiderTopItem url='/images/user.png' number='#1'isVisible={!open} /></span>
            </div>



    <LkHomeMainLiderTopItem url='/images/user1.png' number='#1' />
    <LkHomeMainLiderTopItem url='/images/user2.png' number='#2' />
    <LkHomeMainLiderTopItem url='/images/user3.png' number='#3' />
    <LkHomeMainLiderTopItem url='/images/user4.png' number='#4' />
    <LkHomeMainLiderTopItem url='/images/user5.png' number='#5' />
    <LkHomeMainLiderTopItem url='/images/user6.png' number='#6' />
    <LkHomeMainLiderTopItem url='/images/user7.png' number='#7'  />




        </div>
    );
};

