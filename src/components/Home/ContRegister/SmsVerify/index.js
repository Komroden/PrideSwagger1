import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";

import './style.scss';
import Fade from '@mui/material/Fade';
import {Loader} from "../../../../api/Loader";
import {openMessageSms} from "../../../../store/messageSms/actions";
import {UserRegistration} from "../../../../store/auth/actions";
import {Captcha} from "../../ContReview/Captcha";


export const SmsVerify = ({status}) => {
    const { userInfo } = useSelector((state) => state);
    const {push}=useHistory();

    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const[token,setToken]=useState({
        token:null,
        refresh_token:null
    });
    const[sec,setSec]=useState(59)
    const [counter,setCounter]=useState(0)
    const[loading,setLoading]=useState(false);
    const[code,setCode]=useState('');
    const[error,setError]=useState();
    const[open,setOpen]=useState(false)
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMessageSms())
    }, [dispatch]);
    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);

    useEffect(() => {
        setTokens()
    },[token,setTokens])



    useEffect(()=>{
        if(sec!==0){
            setTimeout(() => setSec(sec-1) , 1000);
        }
        if(sec===0){
            setOpen(true)
        }

    },[sec])


    const handleSend=(e)=>{
        e.preventDefault()

    }
    useEffect(()=>{

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
            code: userInfo.code===''?code:userInfo.code,
            without2FA: userInfo.code!=='',
        }
        if(payload.code.length<6) return
        if (payload.code.length>=6&&success) {
            setCounter(counter+1)
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
                        let error = new Error('Неправильный код');
                        error.response = res;
                        if(counter>=2){
                            setSuccess(false)
                            openCaptcha()
                        }
                        throw error
                    }else {
                        let error = new Error(res.statusText);
                        error.response = res;
                        throw error
                    }
                })
                .then(function (body) {
                    console.log(body)
                    setToken({
                        token: body.access_token,
                        refresh_token: body.refresh_token
                    });
                })
                .then(() => setLoading(false))
                .then(()=> push('/lk'))
                .catch((e) => {
                    setLoading(false)
                    setError(e.message);

                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userInfo.code,code])

    return (
        <Fade  in={status}  unmountOnExit>
            <div>
            <p className='resend_number'>{'Отправленный на номер: ' + userInfo.phoneNumber?userInfo.phoneNumber:'Номер не введен'}</p>
            <Loader loading={loading}/>
            <span className="inp">
                <input type="text" disabled={setLoading} placeholder="Code" className="inputp input_sms" value={code}
                       onChange={event =>setCode(event.target.value) }
                />
                <Fade  in={visible}>
                    <div>
                        <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                    </div>
                </Fade>
                <p className='error_message' >{error}</p>
                <Fade  in={!open}  timeout={300} unmountOnExit>
                    <div className='timer_resend'>
                        0:{sec}
                    </div>
                    </Fade>

                <Fade  in={open}  timeout={300} unmountOnExit>
                    <div className='resend_wrapper'>
                        <div>
                            <a href='/' className='no_code' onClick={handleSend}>Не приходит код</a>
                        </div>
                        <div>
                            <a href='/' className='no_code' onClick={handleSend}>Отправить еще раз</a>
                        </div>
                    </div>
                </Fade>
                        <div className='button_group'>
                            <button onClick={setName}  className="subm_form button_item">Подтвердить позже</button>
                            {/*<button disabled={!isVerify} style={{opacity:isVerify?'1':'0'}} onClick={handlePushLk}  className="subm_form button_item">Завершить</button>*/}
                        </div>

            </span>

            </div>
        </Fade>
    );
};