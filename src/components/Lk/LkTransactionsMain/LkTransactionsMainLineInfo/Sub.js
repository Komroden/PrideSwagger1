import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {SubSub} from "./SubSub";
import Collapse from '@mui/material/Collapse';

export const Sub = ({status,date,firstName,lastName,email,id}) => {
    const { auth } = useSelector((state) => state);
    const [value,setValue]=useState([])
    const [open,setOpen]=useState(false)
    const handleActive =() => {
        setOpen(!open)
    }
    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/api/Partners/sublevel/${id}`,{
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
    },[auth.token,id])

    const d=new Date(date)
    return (
        <>

        <div className="lineinfo__top" onClick={handleActive}>
            <div className="lineinfo__day">
                <img src="/images/calendar.png" alt=""/>
                <span>{d.toLocaleDateString()}</span>
            </div>
            <div className="lineinfo__time">
                <img src="/images/clokck.png" alt=""/>
                <span>{d.toLocaleTimeString()}</span>
            </div>
            <div className="lineinfo__active">
                <div className={status?"lineinfo__activeins":'lineinfo__activeins lineinfo__activeins_red'}>{status?'Active':'Inactive'}</div>
            </div>
            <div className={status?"lineinfo__user":'lineinfo__user lineinfo__user_red'}><img src={status?"/images/user_green.png":"/images/user_red.png"} alt=""/> {firstName+' '+lastName}</div>
            <div className="lineinfo__details">
                <div className="lineinfo__detailsitem">
                    <img src="/images/im.png" alt=""/>
                </div>
                <div className="lineinfo__detailsitem">
                    <img src="/images/im2.png" alt=""/>
                </div>
                <div className="lineinfo__detailsitem">
                    <img src="/images/im3.png" alt=""/>
                </div>
            </div>
            <div className="lineinfo__email">
                <img src="/images/icon_ma.png" alt=""/>
                <a href={email}>{email}</a>
            </div>
            <div className="lineinfo__status">
                <span></span>
            </div>
        </div>
            <Collapse  in={open}  unmountOnExit>
    <div className="lineinfo__body" >
        {value.map(item=><SubSub key={item.id} status={item.isActivated} date={item.creationDate} firstName={item.firstName} lastName={item.lastName} email={item.email} id={item.id} />)}
    </div>
            </Collapse>
        </>
    );
};

