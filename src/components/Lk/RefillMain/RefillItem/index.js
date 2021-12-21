import React, {useEffect, useState} from 'react';
import {usePopolnit} from "../../../../hooks/usePopolnit";
import {useSelector} from "react-redux";

 export const RefillItem = ({title,action,withdraw,comission,maxValue,minValue,wallets}) => {
     const { auth } = useSelector((state) => state);
     const addCash=usePopolnit();
     const [value,setValue]=useState(0)
     const [logo,setLogo]=useState('')
     useEffect(()=>{
         if (title==='Usdc'){
             setLogo('/images/pay7.png')
             return
         }
         if (title==='Bitcoin'){
             setLogo('/images/pay3.png')
             return
         }
         if (title==='Ethereum'){
             setLogo('/images/pay4.png')
             return
         }
         if (title==='Litecoin'){
             setLogo('/images/pay5.png')
             return
         }
     },[title])

     useEffect(()=>{
         if(value>maxValue)setValue(maxValue)


     },[value,maxValue])
     const handleWithdraw=(e)=>{
         e.preventDefault()
         fetch(`http://lk.pride.kb-techno.ru/api/Finance/withdraw?sum=${value}&bankRequisitesId=${wallets}&accountName=${title}`, {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Authorization': `Bearer ${auth.token}`
             }
         })
             .then((res) => console.log(res))
             .catch((e) => {
                 console.log(e.message);
             });

     }




    return (
        <div className="popoln_item">
            <div className="popoln_item_logo">
                <img src={logo} alt=""/>
            </div>
            <div className="popoln_item_text">
                <div className="popoln_item_text_top">{action}</div>
                <div className="popoln_item_title">{title}</div>
                <div className="popoln_item_text_bottom">Платежная система</div>
                {withdraw&&<div style={{opacity:1}} className="popoln_item_text_bottom">{'Комиссия '+comission}</div>}
                {withdraw&&<div className="summ_range_withdraw">
                    <p style={{opacity:1}}  className="popoln_item_text_bottom">{'Минимальная сумма: ' + minValue}</p>
                    <p style={{opacity:1}}  className="popoln_item_text_bottom">{'Доступная  сумма: ' + maxValue}</p>
                </div>}

            </div>
            <div className="popoln_item_form">
                <form>
                    <input type="number" value={value} onChange={e=>setValue(e.target.value)} className="popoln_item_input" max={maxValue}/>
                    <button disabled={wallets===0&&maxValue!==0} onClick={withdraw?handleWithdraw:(e)=>addCash.handlePopol(e)} className="popoln_item_btn">
                        <img src="/images/coins.png" alt=""/>
                        <span>{action}</span>
                    </button>
                </form>

            </div>
        </div>
    );
};

