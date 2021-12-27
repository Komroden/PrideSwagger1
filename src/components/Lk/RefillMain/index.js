import React, {useEffect, useState} from 'react';
import './style.scss';
import {RefillItem} from "./RefillItem";
import {Line} from "../MainTitle/GreyLine";
import {useSelector} from "react-redux";
import {Loader} from "../../../api/Loader";
import {useHistory} from "react-router";
export const RefillMain = ({action,actionTitle}) => {
    const { auth,allInfoUser } = useSelector((state) => state);
    const [wallets,setWallets]=useState([])
    const [valueType,setValueType]=useState(allInfoUser.wallets.length===1?allInfoUser.wallets[0].id:0)
    const [loading,setLoading]=useState(false)

    const {push}=useHistory()
    const handlePush=(e) => {
        e.preventDefault()
        push('/settings')
    }


    useEffect(()=>{
        if(auth.token&&actionTitle==='Вывести') {
            setLoading(true)
            fetch('http://lk.pride.kb-techno.ru/api/Finance/withdraw', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then((res) => res.json())
                .then((body) => {
                    setLoading(false)
                    setWallets(body)
                })
                .catch((e) => {
                    setLoading(false)
                    console.log(e.message);
                });
        }
    },[auth.token,actionTitle])
    useEffect(()=>{
        if(allInfoUser.wallets&&allInfoUser.wallets.length===1){
            setValueType(allInfoUser.wallets[0].id)
        }
    },[allInfoUser])




    return (
        <>
            <Line/>
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">{action}</span>
            </div>
            <div className="popoln_row">
                {allInfoUser.wallets.length!==0&&actionTitle==='Вывести'&&<div>
                    <span className="title_input" style={{marginTop: '30px'}}>Выберете  кошелек:</span><br/>
                    <select disabled={allInfoUser.wallets.length<=1} className="dark_input" style={{width: '20%'}} defaultValue={0} onChange={e => setValueType(e.target.value)}
                            name="valueType">
                        {allInfoUser.wallets.map((item) => <option value={item.id} key={item.id}>{item.objectName}</option>)}

                    </select>
                </div>}
                {allInfoUser.wallets.length===0&&actionTitle==='Вывести'&&
                <span className="title_input" style={{marginTop: '30px',textAlign:'center'}}>Для вывода необходимо <span onClick={handlePush} style={{color:'green',cursor:'pointer'}}>добавить кошелек</span></span>}
                {actionTitle==='Пополнить'&&<RefillItem action={actionTitle} title={'CoinBase'} draw={true}/>}

                {/*<RefillItem logo={'/images/pay1.png'} title={'PAYEER'} action={actionTitle} />*/}
                {/*<RefillItem logo={'/images/pay2.png'} title={'Perfect money'} action={actionTitle}/>*/}
                {/*<RefillItem logo={'/images/pay3.png'} title={'Bitcoin'} action={actionTitle}/>*/}
                {/*<RefillItem logo={'/images/pay4.png'} title={'Etherium'} action={actionTitle}/>*/}
                {/*<RefillItem logo={'/images/pay7.png'} title={'USD-T'} action={actionTitle}/>*/}
                <Loader loading={loading}/>

                {wallets.map((item,index)=><RefillItem key={index} withdraw={true} action={actionTitle} title={item.accountName} comission={item.comission} maxValue={item.maxSum} minValue={item.minSum}
                                                       wallets={valueType}/>)}
            </div>
        </>
    );
};

