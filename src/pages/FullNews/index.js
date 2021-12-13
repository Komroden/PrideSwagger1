import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Header} from "../../components/Home/Header";
import {HeaderSimpleAbout} from "../../components/Home/Header/HeaderSimpleAbout";
import {Footer} from "../../components/Home/Footer";
import {ContFullNews} from "../../components/Home/ContFullNews";
import {MenuRight} from "../../components/Home/MenuRight";
import {Timer} from "../../components/Home/Timer";
import {Message} from "../../components/Home/Message";
import {useParams} from "react-router";

export const FullNews = () => {
    useLayoutEffect (() => {
        window.scrollTo ( 0 , 0 ); }, []);
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
    // console.log(id)
    return (
        <div className="simple_page_standart bodyHome">
            <Header/>
            <HeaderSimpleAbout bread={value.objectName} title={value.objectName}/>
            <ContFullNews title={value.objectName} text={value.text} url={value.image}/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

