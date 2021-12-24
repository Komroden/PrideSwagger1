import  {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useFetchWithTokenGet = (url,initialState,dopRefresh) => {
    const { auth } = useSelector((state) => state);
    const [data,setData]=useState(initialState)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        if(auth.token) {
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
                    setData(body)
                    setLoading(false)
                })
                .catch(e=> {
                    setLoading(false)
                    console.log(e.message)
                })
        }
        return () => setData(initialState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url,auth.token,dopRefresh])
    return {
        data,
        loading
    }


};

