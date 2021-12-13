import React, {useEffect, useState} from 'react';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkBalanceItemsMini} from "../../../components/Lk/BalanceItemsMini";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {OfferImgMain} from "../../../components/Lk/OfferImgMain";
import {useParams} from "react-router";

export const OfferImg = () => {
    const [value,setValue]=useState({
        objectName:'',
        text:'',
        image:''

    })
    useEffect(()=>{
        fetch(`http://lk.pride.kb-techno.ru/api/News/detail/${id}`,{
            method:'GET',
            headers:{'accept': 'application/json'}})
            .then(res=>res.json())
            .then(body=>setValue(body))
            .catch(error=>console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const{id}=useParams()
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Оферта'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkBalanceItemsMini/>
                        <OfferImgMain title={value.objectName} text={value.text} url={value.image}/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

