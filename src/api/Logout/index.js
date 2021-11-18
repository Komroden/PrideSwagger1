import React, {useCallback, useState} from 'react';
import {UserLogout} from "../../store/auth/actions";
import {useDispatch, useSelector} from "react-redux";

export const Logout = ({status}) => {
    const logout = useState(status)
    const dispatch = useDispatch();
    const setLogout = useCallback(() => {
        dispatch(UserLogout())
    }, [dispatch]);
    const { auth } = useSelector((state) => state);
    if(logout) {
    fetch(`http://lk.pride.kb-techno.ru/api/Auth/logout?refreshToken=${auth.token}`,{
        method:'DELETE',
        headers:{'Accept': 'application/octet-stream',
        }
    })
        .then(()=>{
            setLogout()
            sessionStorage.clear()
        })
        .catch(console.error);
    }
    return null
};

