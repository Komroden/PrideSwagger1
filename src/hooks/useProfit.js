import  {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useProfit = (value) => {
    const { cryptoData } = useSelector((state) => state);
    const[course,setCourse]=useState(null)
    useEffect(()=>{
        if(!cryptoData.value) return
        cryptoData.value.filter(item=>item.symbol===value).map(item=>setCourse(item.percentChange24h))

    },[value,cryptoData.value])

    return course
};