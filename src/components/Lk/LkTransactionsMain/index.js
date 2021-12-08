import React, {useEffect, useState} from 'react';
import './style.scss';


import {LkTransactionsMainLineInfo} from "./LkTransactionsMainLineInfo";
import {LkHomeMainBalanceItem} from "../LkHomeMain/LkHomeMainBalanceItem";
import {UserBlock} from "../UserBlock";
import {useSelector} from "react-redux";

export const LkTransactionsMain = () => {
    const { auth,allInfoUser } = useSelector((state) => state);
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
            })
            .catch((e) => {
                console.log(e.message);
            });
    },[auth.token])


    return (
        <div>
            <div className="balance_cost">
                <div className="balance_cost_title">Балансы счетов:</div>
                <div className="balance_cost_row">
                    <LkHomeMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                </div>
            </div>
            <UserBlock/>
            <div className="withdrawn">
                <div className="detail_cost_title">
                    <img src="/images/withdraft.png" alt=""/>
                        <span>Рефералы</span>
                </div>
            </div>
            {value.map(item=><LkTransactionsMainLineInfo key={item.id} status={item.isActivated} date={item.creationDate} firstName={item.firstName} lastName={item.lastName} email={item.email} id={item.id} />)}


            {/*<LkTransactionsMainLineInfo status={'Active'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Active'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Active'}/>*/}
            {/*<LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>*/}
        </div>
    );
};

