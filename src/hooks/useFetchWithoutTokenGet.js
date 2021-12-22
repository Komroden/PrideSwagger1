import  {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useFetchWithoutTokenGet = (url,initialState) => {
    const { auth } = useSelector((state) => state);
    const [data,setData]=useState(initialState)
    useEffect(()=>{
            fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => setData(body))

    },[url,auth.token])
    return (
        data
    );
};