import React, {useEffect, useState} from 'react';
import './style.scss';
import {RefillItem} from "./RefillItem";
import {Line} from "../MainTitle/GreyLine";
import {useSelector} from "react-redux";
export const RefillMain = ({action,actionTitle}) => {
    const { auth,allInfoUser } = useSelector((state) => state);
    const [wallets,setWallets]=useState([])
    const [valueType,setValueType]=useState(allInfoUser.wallets.length===1?allInfoUser.wallets[0].id:0)


    useEffect(()=>{
        if(auth.token&&actionTitle==='Вывести') {
            fetch('http://lk.pride.kb-techno.ru/api/Finance/withdraw', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then((res) => res.json())
                .then((body) => {
                    setWallets(body)
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    },[auth.token,actionTitle])




console.log(valueType)

    return (
        <>
            <Line/>
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">{action}</span>
            </div>
            <div className="popoln_row">
                {allInfoUser.wallets.length!==0&&<div>
                    <span className="title_input" style={{marginTop: '30px'}}>Выберете  кошелек:</span><br/>
                    <select className="dark_input" style={{width: '20%'}} defaultValue={0} onChange={e => setValueType(e.target.value)}
                            name="valueType">
                        <option value={0}>Сбросить</option>
                        {allInfoUser.wallets.map((item) => <option value={item.id} key={item.id}>{item.objectName}</option>)}

                    </select>
                </div>}
                {/*<RefillItem logo={'/images/pay1.png'} title={'PAYEER'} action={actionTitle} />*/}
                {/*<RefillItem logo={'/images/pay2.png'} title={'Perfect money'} action={actionTitle}/>*/}
                {/*<RefillItem logo={'/images/pay3.png'} title={'Bitcoin'} action={actionTitle}/>*/}
                {/*<RefillItem logo={'/images/pay4.png'} title={'Etherium'} action={actionTitle}/>*/}
                {/*<RefillItem logo={'/images/pay7.png'} title={'USD-T'} action={actionTitle}/>*/}

                {wallets.map((item,index)=><RefillItem key={index} withdraw={true} action={actionTitle} title={item.accountName} comission={item.comission} maxValue={item.maxSum} minValue={item.minSum} wallets={valueType}/>)}
            </div>
        </>
    );
};

