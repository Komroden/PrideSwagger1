import React, {useCallback, useState,useEffect} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {FormRegist} from "./FormRegist";
import {SmsVerify} from "./SmsVerify";
import {Loader} from "../../../api/Loader";
import './style.scss';
import { UserInfoCode} from "../../../store/user/actions";


export const ContRegister = () => {
    const {push}=useHistory()
    const handlePushLogin=(e) => {
        e.preventDefault()
        push('/login')
    }
    const { userInfo } = useSelector((state) => state);

    const dispatch = useDispatch();
    const[value,setValue]=useState('')
    const[error,setError]=useState();
    const[loading,setLoading]=useState(false);
    const[status,setStatus]=useState(false)
    const setUser = useCallback(() => {
        dispatch(UserInfoCode(value))
    }, [dispatch,value]);
    useEffect(() => {
        setUser()
    },[value,setUser])

    useEffect(() => {
        setStatus(false)
    },[])

    // const handleOpen=()=>{
    //     setStatus(!status)
    // }
const handlePost=(e)=> {
e.preventDefault()
    setLoading(true)
    fetch(`http://lk.pride.kb-techno.ru/api/Confirm/send-sms-confirmation-code?phoneNumber=${userInfo.value.phoneNumber}&action=register`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'}
    })
        .then((res) => {
            if (res.status === 204 ) {
                return '';
            }
            if(res.status === 200){
                return res.json()
            }
                else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        })
        .then(function(body) {
            setValue(body);
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
                        <img  src="/images/logo_dark.png" alt="" className="img"/>
                            <div className="log_title">{status?'Введите код':'Регистрация в Pride'}</div>
                            <div className="log_form">
                                <form onSubmit={handlePost}>
                                    <Loader loading={loading}/>
                                    <FormRegist status={!status}/>
                                    <SmsVerify status={status} />
                                </form>
                            </div>
                            <div className="registr reemb_pasw" style={{display:status?'none':'block'}}>У меня есть аккаунт! <a href='/' onClick={handlePushLogin}>Вход в кабинет</a>
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

