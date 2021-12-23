import  {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useFetchWithoutTokenGet = (url,initialState) => {
    const { auth } = useSelector((state) => state);
    const [data,setData]=useState(initialState)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
            fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => {
                    setLoading(false)
                    setData(body)
                })
                .catch(e=> {
                    setLoading(false)
                    console.log(e.message)
                })

    },[url,auth.token])
    return{
        data,loading
    }

    ;
};