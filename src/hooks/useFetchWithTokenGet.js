import  {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useFetchWithTokenGet = (url,initialState,dopRefresh) => {
    const { auth } = useSelector((state) => state);
    const [data,setData]=useState(initialState)
    useEffect(()=>{
        if(auth.token) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => setData(body))
        }
    },[url,auth.token,dopRefresh])
    return (
        data
    );
};

