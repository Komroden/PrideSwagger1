import React, {useState} from 'react';
import './style.scss';


import {LkHomeMainBalanceItem} from "./LkHomeMainBalanceItem";
import {LkHomeMainDetailItem} from "./LkHomeMainDetailItem";
import {UserBlock} from "../UserBlock";
import { useSelector} from "react-redux";
import {VoteItem} from "./VoteItem";
import {useFetchWithTokenGet} from "../../../hooks/useFetchWithTokenGet";
import {Loader} from "../../../api/Loader";
import {SnackBar} from "../../Home/Snackbar";


export const LkHomeMain = () => {
    const {allInfoUser,votes} = useSelector((state) => state);
    // const [outputList,setOutputList]=useState({items:[]})
    const outputList=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Finance/list?AccountType=3&TransferDirection=0',{items:[]})
    // const [inputList,setInputList]=useState({items:[]})
    const inputList=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Finance/list?AccountType=3&TransferDirection=1',{items:[]})
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'Скопировано',
        color:'success'
    })

    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Finance/list?AccountType=3&TransferDirection=0', {
    //             method: 'GET',
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(body => setOutputList(body))
    //     }
    // },[auth.token])
    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Finance/list?AccountType=3&TransferDirection=1', {
    //             method: 'GET',
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(body => setInputList(body))
    //     }
    // },[auth.token])


    return (
        <>
            <div className="balance_cost">
                <div className="balance_cost_title">Балансы счетов:</div>
                <div className="balance_cost_row">
                    <LkHomeMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={allInfoUser.value.balanceBitcoin.toFixed(0)}  />
                    <LkHomeMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={allInfoUser.value.balanceEthereum.toFixed(0)}  />
                    <LkHomeMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={allInfoUser.value.balanceLitecoin.toFixed(0)}  />
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint6.png)' title={'USDC'} text={'USDC'} value={allInfoUser.value.balanceUsdc.toFixed(0)}  />
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
                    <input type="text" style={{padding:'5px 45px 5px 10px'}}  value={"http://1-pride.com/register"+allInfoUser.value.id} readOnly/>
                    <button onClick={() => {navigator.clipboard.writeText("http://1-pride.com/register"+allInfoUser.value.id)
                        setOpenSnack({
                        status:true,
                        text:'Скопировано',
                        color:'success'
                    })}}>
                        <img src="/images/copyimg.png" alt=""/>
                    </button>
                </div>
            </div>
            <div className="detail_cost">
                {inputList.data.items.length!==0&&<div className="earned">
                    <div className="detail_cost_title">
                        <img src="/images/earned.png" alt=""/>
                        <span>Внесено</span>
                    </div>
                    <div className="detail_cost_row">
                        <Loader loading={inputList.loading}/>
                        {inputList.data.items.filter((item, index) => index < 5).map((item, index) => <LkHomeMainDetailItem
                            key={item.id} index={index} currency='Bitcoin' value={item.creditSum} course={1}/>)}
                    </div>
                </div>}
                {outputList.data.items.length!==0&&<div className="withdrawn">
                    <div className="detail_cost_title">
                        <img src="/images/withdraft.png" alt=""/>
                        <span>Выведено</span>
                    </div>
                    <div className="detail_cost_row">
                        <Loader loading={outputList.loading}/>
                        {outputList.data.items.filter((item, index) => index < 5).map((item, index) => <LkHomeMainDetailItem
                            key={item.id} index={index} currency='Bitcoin' value={item.debetSum} course={1}/>)}
                    </div>
                </div>}
            </div>
            <div className="voice">
                <div className="detail_cost_title">
                    <img src="/images/voice.png" alt=""/>
                        <span>Голосование</span>
                </div>

                {votes.value.items.filter((item,index)=>index===0).map(item=><VoteItem key={item.id} id={item.id} title={item.question} votesBars={item.answers} all={item.totalVotesCount} isVotesUser={item.votedByUser}/>)}
            </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>

        </>
    );
};

