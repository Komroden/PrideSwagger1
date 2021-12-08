import  {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useCourse = (value) => {
    const { cryptoData } = useSelector((state) => state);
    const[course,setCourse]=useState(null)
    useEffect(()=>{
        if(!cryptoData.value) return
        cryptoData.value.filter(item=>item.symbol===value).map(item=>setCourse(item.price))

    },[value,cryptoData.value])

    return course
};

