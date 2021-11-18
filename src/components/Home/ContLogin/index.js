import React, {useCallback, useEffect, useState} from 'react';
import './style.scss';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {UserRegistration} from "../../../store/auth/actions";
import {useInput} from "../../../hooks/useInput";
import {Loader} from "../../../api/Loader";
import {useInputV} from "../../../hooks/useInputV";
import Collapse from '@mui/material/Collapse';






export const ContLogin = () => {
    const { auth } = useSelector((state) => state);
    const[token,setToken]=useState({
        token:null,
        refresh_token:null
});
    const [open,setOpen]=useState(false);
    const loginRecover=useInputV('',{isEmpty:true});
    const login=useInputV('');
    const[password]=useInput('');
    const[error,setError]=useState();
    const[loading,setLoading]=useState(false);
    const dispatch = useDispatch();
    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);



    useEffect(() => {
        if(token.token===null) return
            setTokens()
    },[token])
    // useEffect(() => {
    //     if(token.token!=null){
    //         push('/lk')
    //     }else return
    // },[])

    const {push}=useHistory()
    const handlePushRegister=() => {
        push('/register')
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        const payload= {
            loginOrEmail:login.value,
            password:password.value,
        }
        setLoading(true)
        fetch('http://lk.pride.kb-techno.ru/api/Auth/login',{
            method:'POST',
            body:JSON.stringify(payload),
            headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                }
                if (res.status === 400 ){
                    let error = new Error('Неверный логин или пароль');
                    error.response = res;
                    throw error
                }else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then(function(body) {
                setToken({
                    token:body.access_token,
                    refresh_token:body.refresh_token});
            })
            .then(()=> setLoading(false))
            .then(()=> push('/lk'))
            .catch((e) => {
                setLoading(false)
                setError(e.message);

            });
    }
    const handleOpen=(e)=>{
        e.preventDefault()
        setOpen(!open)
    }
    const handleDrop=(e)=>{
        e.preventDefault()
        fetch(`http://lk.pride.kb-techno.ru/api/Auth/recover-password?login=${loginRecover.value}`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                }
                if (res.status === 400 ){
                    let error = new Error('Аккаунта не существует');
                    error.response = res;
                    throw error
                }else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then(function(body) {
                console.log(body)
            })
            .catch((e) => {
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
                        <img src="/images/logo_dark.png" alt="" className="img"/>
                            <div className="log_title">Войти в личный аккаунт</div>
                            <div className="log_form">
                                <form>
                                    <Loader loading={loading}/>
                                        <input type="text" placeholder="Login" className=" inputp" onBlur={e => login.onBlur(e)} onChange={e=>login.onChange(e)} value={login.value}
                                        />

                                        <input type="password" placeholder="Password" className=" inputp" {...password}
                                        />
                                    <p className='error_message'>{error}</p>
                                            <div className="reemb_pasw">
                                                Я не помню свой пароль: <a onClick={handleOpen}>Сбросить пароль</a>
                                            </div>
                                    <Collapse in={open}>
                                        <div>
                                            <span className="title_input">Введите Логин</span>
                                            <div className='email__wrapper'>
                                                <input  onBlur={e => loginRecover.onBlur(e)} onChange={e=>loginRecover.onChange(e)} value={loginRecover.value} name='email' type='email' placeholder='Login' className=" inputp email_drop"
                                                />
                                                <button onClick={handleDrop} className="subm_form button_drop">Отправить</button>
                                            </div>
                                            {(loginRecover.isDirty && loginRecover.isEmpty) && <span className="required_fail"> Обязательное поле</span>}
                                        </div>
                                    </Collapse>
                                            <button onClick={handleLogin} className="subm_form">войти</button>
                                </form>

                            </div>
                            <div className="or">
                                OR
                            </div>
                            <a href="#" className="login_vk">
                                <span><img src="/images/vk.png" alt=""/></span>login WITH Vkontakte</a>
                            <div className="registr reemb_pasw">У меня нет аккаунта? <a onClick={handlePushRegister}>Регистрация</a></div>
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

