import React, { useEffect, useState} from 'react';
import './style.scss';


import {LkHomeMainBalanceItem} from "./LkHomeMainBalanceItem";
import {LkHomeMainDetailItem} from "./LkHomeMainDetailItem";
import {UserBlock} from "../UserBlock";
import { useSelector} from "react-redux";
import {VoteItem} from "./VoteItem";


export const LkHomeMain = () => {
    const {auth,allInfoUser,votes} = useSelector((state) => state);
    const [outputList,setOutputList]=useState({items:[]})
    const [inputList,setInputList]=useState({items:[]})

    useEffect(()=>{
        if(auth.token) {
            fetch('http://lk.pride.kb-techno.ru/api/Finance/list?AccountType=3&TransferDirection=0', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => setOutputList(body))
        }
    },[auth.token])
    useEffect(()=>{
        if(auth.token) {
            fetch('http://lk.pride.kb-techno.ru/api/Finance/list?AccountType=3&TransferDirection=1', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => setInputList(body))
        }
    },[auth.token])

    // console.log(voteList)
    return (
        <>
            <div className="balance_cost">
                <div className="balance_cost_title">Балансы счетов:</div>
                <div className="balance_cost_row">
                    <LkHomeMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Binance Coin'} text={'BNB'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'CurrenyPriceInfoT'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Solana'} text={'SOL'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Cardano'} text={'ADA'} value={allInfoUser.value.balance.toFixed(0)} course={1} profit={0}/>
                    {/*<div className="balance_cost_item balance_cost_item_plus ">*/}
                    {/*    <a href="#">*/}
                    {/*        <span className="dark_plus">+</span>*/}
                    {/*        <span className="balance_cost_item_plus_text">Добавить кошелек</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
            <UserBlock/>
            <div className="home2link">
                <div className="home2link__logo">
                    <img src="/images/homelogo.png" alt=""/>
                </div>
                <div className="home2link__text">ваша реферальная ссылка:</div>
                <div className="home2link__form">
                    <input type="text" defaultValue={"http://www.pride.io/ref_000001123"}/>
                    <button>
                        <img src="/images/copyimg.png" alt=""/>
                    </button>
                </div>
            </div>
            <div className="detail_cost">
                <div className="earned">
                    <div className="detail_cost_title">
                        <img src="/images/earned.png" alt=""/>
                            <span>Внесено</span>
                    </div>
                    <div className="detail_cost_row">
                        {inputList.items.filter((item,index)=>index<5).map((item,index)=> <LkHomeMainDetailItem
                            key={item.id} index={index}  currency='Bitcoin' value={item.creditSum} course={1} />)}
                    </div>
                </div>
                <div className="withdrawn">
                    <div className="detail_cost_title">
                        <img src="/images/withdraft.png" alt=""/>
                            <span>Выведено</span>
                    </div>
                    <div className="detail_cost_row">
                        {outputList.items.filter((item,index)=>index<5).map((item,index)=> <LkHomeMainDetailItem
                            key={item.id} index={index}  currency='Bitcoin' value={item.debetSum} course={1} />)}
                    </div>
                </div>
            </div>
            <div className="voice">
                <div className="detail_cost_title">
                    <img src="/images/voice.png" alt=""/>
                        <span>Голосование</span>
                </div>

                {votes.value.items.filter((item,index)=>index===0).map(item=><VoteItem key={item.id} id={item.id} title={item.question} votesBars={item.answers} all={item.totalVotesCount}/>)}
            </div>
        </>
    );
};

