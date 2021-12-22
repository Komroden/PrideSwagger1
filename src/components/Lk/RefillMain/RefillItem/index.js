import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {ModalConfirmAll} from "./modalConfirmAll";
import {SnackBar} from "../../../Home/Snackbar";

 export const RefillItem = ({title,action,withdraw,comission,maxValue,minValue,wallets}) => {
     const { auth } = useSelector((state) => state);
     const [value,setValue]=useState(0)
     const [logo,setLogo]=useState('')
     const [open,setOpen]=useState(false)
     const [success,setSuccess]=useState(false)

     const [openSnack,setOpenSnack]=useState({
         status:false,
         text:'',
         color:'error'
     })
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
     useEffect(()=>{
         if(auth.token&&success){
             fetch(`http://lk.pride.kb-techno.ru/api/Finance/withdraw?sum=${value}&bankRequisitesId=${wallets}&accountName=${title}`, {
                 method: 'POST',
                 headers: {
                     'Accept': 'application/json',
                     'Authorization': `Bearer ${auth.token}`
                 }
             })
                 .then((res) => {
                     if (res.status >= 200 && res.status < 300) {
                         setOpenSnack({
                             status:true,
                             text:'Отправлено',
                             color:'success'
                         })}
                     if (res.status>=400){
                         let error = new Error('Ошибка');
                         error.response = res;
                         throw error
                     }
                     setSuccess(false)
                 })
                 .catch((e) => {
                     setSuccess(false)
                     setOpenSnack({status:true,
                         text:e.message,
                         color:'error'})
                 });
         }

         // eslint-disable-next-line react-hooks/exhaustive-deps
     },[success,auth.token])

    return (
        <>
            <ModalConfirmAll setOpen={setOpen} open={open} comission={comission} wallets={wallets} value={value} setSuccess={setSuccess}/>
        <div className="popoln_item">
            <div className="popoln_item_logo">
                <img src={logo} alt=""/>
            </div>
            <div className="popoln_item_text">
                <div className="popoln_item_text_top">{action}</div>
                <div className="popoln_item_title">{title}</div>
                <div className="popoln_item_text_bottom">Платежная система</div>
                {withdraw&& <p style={{opacity:1}}  className="popoln_item_text_bottom">{'Минимальная сумма: ' + minValue}</p>}
                {withdraw&&<p style={{opacity:1}}  className="popoln_item_text_bottom">{'Доступная  сумма: ' + maxValue}</p>}

            </div>
            <div className="popoln_item_form">
                <form>
                    <input type="number" value={value} onChange={e=>setValue(e.target.value)} className="popoln_item_input" max={maxValue}/>
                    <button disabled={wallets===0||maxValue===0} onClick={(e)=> {
                        e.preventDefault()
                        setOpen(true)
                    }} className="popoln_item_btn">
                        <img src="/images/coins.png" alt=""/>
                        <span>{action}</span>
                    </button>
                </form>
                <SnackBar open={openSnack} setOpen={setOpenSnack}/>
            </div>
        </div>
        </>
    );
};

