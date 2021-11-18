import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";

import './style.scss';
import {CSSTransition} from "react-transition-group";
import {Loader} from "../../../../api/Loader";
import {openMessageSms} from "../../../../store/messageSms/actions";


export const SmsVerify = () => {
    const { auth } = useSelector((state) => state);
    const {push}=useHistory();
    const[isVerify,setVerify]=useState(false)
    const[sec,setSec]=useState(59)
    const[loading,setLoading]=useState(false);
    const[code,setCode]=useState('');
    const[error,setError]=useState();
    const[open,setOpen]=useState(false)
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMessageSms())
    }, [dispatch]);

    const handlePushLk=() => {
        push('/lk')
    }

    useEffect(()=>{
        if(sec!==0){
            setTimeout(() => setSec(sec-1) , 1000);
        }
        if(sec===0){
            setOpen(true)
        }

    })


    const handleSend=()=>{

    }
    const payload={
        code:code
    };

    useEffect(()=>{
        if(code.length<6) return
        if (code.length>=6){
            setLoading(true)
            fetch(`http://127.0.0.1:8000/api/auth/sms-verify`,{
                method:'POST',
                body:JSON.stringify(payload),
                headers:{'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization':`Bearer ${auth.token}`}
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        return res.json();
                    }
                    if (res.status === 403 ){
                        let error = new Error('Неправильный код');
                        error.response = res;
                        throw error
                    }else {
                        let error = new Error(res.statusText);
                        error.response = res;
                        throw error
                    }
                })
                .then((body)=>{
                    console.log(body);
                })
                .then(()=> setLoading(false))
                .catch((e) => {
                    setLoading(false)
                    setError(e.message);

                });
        }

    },[code])

    return (
        <>
            <p className='resend_number'>Отправленный на номер: Номер не введен</p>
            <Loader loading={loading}/>
            <span className="inp">
                <input type="text" disabled={setLoading} placeholder="Code" className="inputp input_sms" value={code}
                       onChange={event =>setCode(event.target.value) }
                />
                <p className='error_message' >{error}</p>
                <CSSTransition  in={!open} classNames='alert' timeout={300} unmountOnExit>
                    <div className='timer_resend'>
                        0:{sec}
                    </div>
                    </CSSTransition>

                <CSSTransition  in={open} classNames='alert' timeout={300} unmountOnExit>
                    <div className='resend_wrapper'>
                        <div>
                            <a className='no_code' onClick={handleSend}>Не приходит код</a>
                        </div>
                        <div>
                            <a className='no_code' onClick={handleSend}>Отправить еще раз</a>
                        </div>
                    </div>
                </CSSTransition>
                        <div className='button_group'>
                            <button onClick={setName}  className="subm_form button_item">Подтвердить позже</button>
                            <button disabled={!isVerify} style={{opacity:isVerify?'1':'0'}} onClick={handlePushLk}  className="subm_form button_item">Завершить</button>
                        </div>

            </span>


        </>
    );
};