import React, {useCallback, useEffect, useState} from 'react';
import Grow from '@mui/material/Grow';
import {useDispatch, useSelector} from "react-redux";
import {openMessageSms, openSnackBar} from "../../../store/messageSms/actions";
import {useHistory} from "react-router";
import {UserRegistration} from "../../../store/auth/actions";


export const MessageSms = () => {
    const { messageSms,userInfo } = useSelector((state) => state);
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    const[token,setToken]=useState({
        token:null,
        refresh_token:null
    });
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMessageSms())
    }, [dispatch]);
    const setSnack = useCallback(() => {
        dispatch(openSnackBar(openSnack))
    }, [dispatch,openSnack]);

    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);

    useEffect(() => {
        setTokens()
    },[token,setTokens])
    useEffect(() => {
        setSnack()
    },[openSnack,setSnack])

    const {push}=useHistory()


    const handlePushLk=(e) => {
        e.preventDefault()
        const payload= {
            firstName:userInfo.value.firstName,
            middleName:userInfo.value.middleName,
            lastName:userInfo.value.lastName,
            inviterId:userInfo.value.inviterId?userInfo.value.inviterId:0,
            email:userInfo.value.email,
            phoneNumber:userInfo.value.phoneNumber,
            login:userInfo.value.login,
            password:userInfo.value.password,
            confirmPassword:userInfo.value.confirmPassword,
            code: '',
            without2FA: true,
        }

        fetch('http://lk.pride.kb-techno.ru/api/Auth/register', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                }
                if (res.status === 422 ){
                    let error = new Error('Email уже зарегистрирован');
                    error.response = res;
                    throw error
                }else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then(function (body) {
                setToken({
                    token: body.access_token,
                    refresh_token: body.refresh_token
                });
            })
            .then(()=> push('/lk'))
            .catch((e) => {
                setOpenSnack({
                    status: true,
                    text: e.message,
                    color: 'error'
                })
            });
        setName()
    }

    return (
        <Grow in={messageSms.openMessage}  unmountOnExit>
            <div className="open_popup">
                <div className="open_popup_row">
                    <div className="close_popup">
                        <div onClick={setName} className="close_menu_btn">
                            <span className="before"/>
                            <span className="after"/>
                        </div>
                    </div>
                    <img src="/images/logo_dark.png" alt=""/>
                    <div className="pop_descr">
                        <p>Двуфакторная аутодентификация не завершена,<br/>Вы сможете завершить ее позже в личном кабинете</p>
                    </div>
                    <button onClick={handlePushLk} className='subm_form'>
                        Подтвердите действие
                    </button>
                </div>
            </div>
        </Grow>
    );
};

