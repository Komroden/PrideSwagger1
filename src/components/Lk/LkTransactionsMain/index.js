import React, {useEffect, useState} from 'react';
import './style.scss';


import {LkTransactionsMainLineInfo} from "./LkTransactionsMainLineInfo";
import {LkHomeMainBalanceItem} from "../LkHomeMain/LkHomeMainBalanceItem";
import {UserBlock} from "../UserBlock";
import {useSelector} from "react-redux";

export const LkTransactionsMain = () => {
    const { auth } = useSelector((state) => state);
    const [value,setValue]=useState([])
    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/Partners/referal-list',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => res.json())
            .then((body)=>{
                setValue(body)
                console.log(body)
            })
            .catch((e) => {
                console.log(e.message);
            });
    },[])



    return (
        <div>
            <div className="balance_cost">
                <div className="balance_cost_title">Балансы счетов:</div>
                <div className="balance_cost_row">
                    <LkHomeMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={'0.356 BTC'} allValue={'2 658 USD'} dayValue={'1 BTC - 8,837.88 USD'} allDayValue={'+ 236$'}/>
                    <LkHomeMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={'0.25 ETH'} allValue={'248 USD'} dayValue={'1 ETH - 987 USD'} allDayValue={'- 31$'}/>
                    <LkHomeMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={'25 LTC'} allValue={'5 361 USD'} dayValue={'1 LTC - 265 USD'} allDayValue={'+ 0,6$'}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={'1 356 USDT'} allValue={'1 356 USD'} dayValue={'1 USDT - 1 USD'} allDayValue={'+ 0.001$'}/>
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={'125 TRX'} allValue={'248 USD'} dayValue={'1 TRX - 87 USD'} allDayValue={'- 31$'}/>
                    <div className="balance_cost_item balance_cost_item_plus ">
                        <a href="#">
                            <span className="dark_plus">+</span>
                            <span className="balance_cost_item_plus_text">Добавить кошелек</span>
                        </a>
                    </div>
                </div>
            </div>
            <UserBlock/>
            <div className="withdrawn">
                <div className="detail_cost_title">
                    <img src="/images/withdraft.png" alt=""/>
                        <span>Рефералы</span>
                </div>
            </div>
            {value.map(item=><LkTransactionsMainLineInfo key={item.id} status={item.isActivated} date={item.creationDate} firstName={item.firstName} lastName={item.lastName} email={item.email} />)}


            {/*<LkTransactionsMainLineInfo status={'Active'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Active'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Active'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>*/}
        </div>
    );
};

