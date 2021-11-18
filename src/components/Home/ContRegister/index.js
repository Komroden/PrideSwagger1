import React, {useCallback, useState,useEffect} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {UserRegistration} from "../../../store/auth/actions";
import {FormRegist} from "./FormRegist";
import {SmsVerify} from "./SmsVerify";
import {CSSTransition} from "react-transition-group";
import {Loader} from "../../../api/Loader";
import './style.scss';

// const saveJSON = (key,data)=>
//     sessionStorage.setItem(key,JSON.stringify(data));
export const ContRegister = () => {
    const {push}=useHistory()
    const handlePushLogin=() => {
        push('/login')
    }
    const { userInfo } = useSelector((state) => state);
    const[token,setToken]=useState({
        token:null,
        refresh_token:null
    });
    const dispatch = useDispatch();

    const[error,setError]=useState();
    const[loading,setLoading]=useState(false);
    const[status,setStatus]=useState(false)
    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);



    useEffect(() => {
        setTokens()
        // saveJSON('keySwagger',token)
    },[token])
    useEffect(() => {
        setStatus(false)
    },[])

    const handleOpen=()=>{
        setStatus(!status)
    }
const handlePost=(e)=> {
e.preventDefault()
    const payload= {
        firstName:userInfo.value.firstName,
        middleName:userInfo.value.middleName,
        lastName:userInfo.value.lastName,
        inviterId:0,
        inviterName: "John",
        email:userInfo.value.email,
        phoneNumber:userInfo.value.phoneNumber,
        login:userInfo.value.login,
        password:userInfo.value.password,
        confirmPassword:userInfo.value.confirmPassword,
        code: "test",
        without2FA: true
    }
    setLoading(true)

    fetch('http://lk.pride.kb-techno.ru/api/Auth/register',{
        method:'POST',
        body:JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        })
        .then(function(body) {
            console.log(body)
        setToken({
            token:body.access_token,
            refresh_token:body.refresh_token});
    })
        .then(()=> setLoading(false))
        .then(()=> setStatus(true))
        .catch((e) => {
            setLoading(false)
            setError(e.message);

        });

}


    return (
        <div className="firstbl first_login">
            <div className="first_containerP">
                <div className="text_bg wow slideInLeft" data-wow-duration="3s">company see <br/><span>Pride.</span>
                </div>
                <div className="first_left wow slideInUp" data-wow-duration="3s">
                    <div className="log_block">
                        <img onClick={handleOpen} src="/images/logo_dark.png" alt="" className="img"/>
                            <div className="log_title">{status?'Введите код':'Регистрация в Pride'}</div>
                            <div className="log_form">
                                <form onSubmit={handlePost}>
                                    <Loader loading={loading}/>
                                    <FormRegist status={!status}/>
                                    <CSSTransition  in={status} classNames='alert' timeout={300} unmountOnExit>
                                        <SmsVerify />
                                    </CSSTransition>
                                </form>
                            </div>
                            <div className="registr reemb_pasw" style={{display:status?'none':'block'}}>У меня есть аккаунт! <a onClick={handlePushLogin}>Вход в кабинет</a>
                            </div>
                        <pre>{JSON.stringify(error, null, 2)}</pre>
                    </div>
                </div>
                <div className="first_right">
                    <img className="booble_img wow pulse" data-wow-iteration="infinite" data-wow-duration="2.5s"
                         src="/images/first_img.png" alt=""/>
                        <div className="reg_bottext bottom_text wow slideInRight" data-wow-duration="2s"><span>.</span>твой
                            старт
                        </div>
                </div>
            </div>

        </div>
    );
};

