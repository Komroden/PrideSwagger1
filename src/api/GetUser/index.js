import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UserData} from "../../store/userInfo/actions";

export const GetUser = (path) => {
    const[value,setValue]=useState({})
    const dispatch = useDispatch();
    const setUserData = useCallback(() => {
        dispatch(UserData(value))
    }, [dispatch,value]);
    useEffect(() => {
        setUserData()
    },[value])

    const { auth } = useSelector((state) => state);
    useEffect(() => {
            fetch(`http://127.0.0.1:8000/api/auth/${path}`,{
                method:'GET',
                headers:{'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization':`Bearer ${auth.token}`}
            })
                .then(response=>response.json())
                .then((body)=>{
                    setValue(body)
                })
                .catch(console.error);


    },[auth.token])


    return null
};

