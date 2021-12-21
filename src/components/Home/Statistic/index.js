import React, {useEffect, useState} from 'react';
import './style.scss'
import {RegistItem} from "./RegistItem";
import {PayItem} from "./PayItem";
import {InvestItem} from "./InvestItem";
export const Statistic = () => {
    const[data, setData]=useState({
        registrations: [],
        payments: [],
        investments: []
    })

    useEffect(()=>{
        let cleanupFunction = false;
        fetch('http://lk.pride.kb-techno.ru/api/Main/last-events',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then((body)=>{
                if(!cleanupFunction){
                    setData(body)
                }
            })
            .catch((e) => {
                console.log(e.message);
            });
        return () => cleanupFunction = true;
    },[])
    return (
        <div className="stastistic">
            <div className="containerP wow slideInUp" data-wow-duration="2s">
                <div className="pride_title">Статистика</div>
                <div className="pride_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/>eiusmod
                    tempor incididunt ut labore et dolore magna</div>
            </div>
            <div className="containerP">
                <div className="static_row">
                    <div className="static_item last_register wow slideInLeft" data-wow-duration="3s">
                        <div className="static_item_title">
                            Последнии регистранции
                            <span className="stat_sub_tit">реальное время</span>
                        </div>
                        <ul className="static_data">
                            {data.registrations.map((item,index)=>
                                <RegistItem key={index} date={item.creationDate} object={item.eventData}/>)}
                        </ul>
                    </div>
                    <div className="static_item last_paymend wow slideInUp" data-wow-duration="2s">
                        <div className="static_item_title">
                            Последнии выплаты
                            <span className="stat_sub_tit">реальное время</span>
                        </div>
                        <ul className="static_data">
                            {data.payments.map((item,index)=>
                                <PayItem key={index} date={item.creationDate} object={item.eventData}/>)}
                        </ul>
                    </div>
                    <div className="static_item last_invest wow slideInRight" data-wow-duration="3s">
                        <div className="static_item_title">
                            последнии инвестиции
                            <span className="stat_sub_tit">реальное время</span>
                        </div>
                        <ul className="static_data">
                            {data.investments.map((item,index)=>
                                <InvestItem key={index} date={item.creationDate} object={item.eventData}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

