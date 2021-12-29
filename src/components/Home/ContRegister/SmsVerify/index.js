import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './style.scss';
import Fade from '@mui/material/Fade';
import {Loader} from "../../../../api/Loader";
import {openMessageSms} from "../../../../store/messageSms/actions";
import {UserRegistration} from "../../../../store/auth/actions";
import {Captcha} from "../../ContReview/Captcha";
import {SnackBar} from "../../Snackbar";
import {useRegistration} from "../../../../hooks/useRegistration";


export const SmsVerify = ({status}) => {
    const { userInfo,messageSms } = useSelector((state) => state);

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

    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
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
        setOpenSnack(messageSms.openSnack)
    },[messageSms])



    useEffect(()=>{
        let timer =null
        if(status){
        if(sec!==0){
             timer=setTimeout(() => setSec(sec-1) , 1000);
        }
        if(sec===0){
            setOpen(true)
        }
        }
        return ()=>{
            clearTimeout(timer)
        }

    },[sec,status])
    useEffect(()=>{
        if(counter===2){
            setSuccess(false)
            setCounter(0)
            openCaptcha()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[counter])



    const handleSend=(e)=>{
        e.preventDefault()
        fetch(`http://lk.pride.kb-techno.ru/api/Confirm/send-sms-confirmation-code?phoneNumber=${userInfo.value.phoneNumber}&action=register`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'}
        })
            .then((res) => {
                if (res.status === 204||200 ) {
                    return res.text();
                }
                else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .catch(error=>console.log(error))

    }

    const noCode=useRegistration('http://lk.pride.kb-techno.ru/api/Auth/register',
        {
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
            },setToken,setLoading,setError,"Email уже зарегистрирован")

    // const noCode=(e)=>{
    //     e.preventDefault()
    //     const payload= {
    //         firstName:userInfo.value.firstName,
    //         middleName:userInfo.value.middleName,
    //         lastName:userInfo.value.lastName,
    //         inviterId:userInfo.value.inviterId?userInfo.value.inviterId:0,
    //         email:userInfo.value.email,
    //         phoneNumber:userInfo.value.phoneNumber,
    //         login:userInfo.value.login,
    //         password:userInfo.value.password,
    //         confirmPassword:userInfo.value.confirmPassword,
    //         code: '',
    //         without2FA: true,
    //     }
    //
    //     fetch('http://lk.pride.kb-techno.ru/api/Auth/register', {
    //         method: 'POST',
    //         body: JSON.stringify(payload),
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //         .then((res) => {
    //             if (res.status >= 200 && res.status < 300) {
    //                 return res.json();
    //             }
    //             if (res.status === 422 ){
    //                 let error = new Error('Неправильный код');
    //                 error.response = res;
    //                 if(counter>=2){
    //                     setSuccess(false)
    //                     openCaptcha()
    //                 }
    //                 throw error
    //             }else {
    //                 let error = new Error(res.statusText);
    //                 error.response = res;
    //                 throw error
    //             }
    //         })
    //         .then(function (body) {
    //             setToken({
    //                 token: body.access_token,
    //                 refresh_token: body.refresh_token
    //             });
    //         })
    //         .then(() => setLoading(false))
    //         .then(()=> push('/lk'))
    //         .catch((e) => {
    //             setLoading(false)
    //             setError(e.message);
    //
    //         });
    //
    // }
    const send=useRegistration('http://lk.pride.kb-techno.ru/api/Auth/register',
        {
            firstName:userInfo.value.firstName,
            middleName:userInfo.value.middleName,
            lastName:userInfo.value.lastName,
            inviterId:userInfo.value.inviterId?userInfo.value.inviterId:0,
            email:userInfo.value.email,
            phoneNumber:userInfo.value.phoneNumber,
            login:userInfo.value.login,
            password:userInfo.value.password,
            confirmPassword:userInfo.value.confirmPassword,
            code: userInfo.code===''?code:userInfo.code,
            without2FA: userInfo.code!=='',
        },setToken,setLoading,setError,"Неправильный код или Email же зарегистрирован")
    useEffect(()=>{

        // const payload= {
        //     firstName:userInfo.value.firstName,
        //     middleName:userInfo.value.middleName,
        //     lastName:userInfo.value.lastName,
        //     inviterId:userInfo.value.inviterId?userInfo.value.inviterId:0,
        //     email:userInfo.value.email,
        //     phoneNumber:userInfo.value.phoneNumber,
        //     login:userInfo.value.login,
        //     password:userInfo.value.password,
        //     confirmPassword:userInfo.value.confirmPassword,
        //     code: userInfo.code===''?code:userInfo.code,
        //     without2FA: userInfo.code!=='',
        // }
        if(code.length<6) return
        if (code.length>=6&&success) {
            setCounter(counter+1)
            send.handlePost()
            // fetch('http://lk.pride.kb-techno.ru/api/Auth/register', {
            //     method: 'POST',
            //     body: JSON.stringify(payload),
            //     headers: {'Content-Type': 'application/json','accept': 'application/json'}
            // })
            //     .then((res) => {
            //         if (res.status >= 200 && res.status < 300) {
            //             return res.json();
            //         }
            //         if (res.status === 422 ){
            //             let error = new Error('Неправильный код');
            //             error.response = res;
            //             if(counter>=2){
            //                 setSuccess(false)
            //                 setCounter(0)
            //                 openCaptcha()
            //             }
            //             throw error
            //         }else {
            //             let error = new Error(res.statusText);
            //             error.response = res;
            //             throw error
            //         }
            //     })
            //     .then(function (body) {
            //         setToken({
            //             token: body.access_token,
            //             refresh_token: body.refresh_token
            //         });
            //     })
            //     .then(() => setLoading(false))
            //     .then(()=> push('/lk'))
            //     .catch((e) => {
            //         setLoading(false)
            //         setError(e.message);
            //
            //     });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userInfo.code,code])

    return (
        <Fade  in={status}  unmountOnExit>
            <div>
            <p className='resend_number'>{userInfo.value.phoneNumber?'Отправленный на номер: ' + userInfo.value.phoneNumber:'Номер не введен'}</p>
            <Loader loading={loading}/>
            <span className="inp">
                <input type="text"  placeholder="Code" className="inputp input_sms" value={code}
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
                            <a href='/' className='no_code' onClick={success?e=>{
                                e.preventDefault()
                                setCounter(counter+1)
                            noCode.handlePost()}:()=>{}}>Не приходит код</a>
                        </div>
                        <div>
                            <a href='/' className='no_code' onClick={handleSend}>Отправить еще раз</a>
                        </div>
                    </div>
                </Fade>
                        <div className='button_group'>
                            <button onClick={(e)=>{e.preventDefault()
                                setName()}}  className="subm_form button_item">Подтвердить позже</button>
                            {/*<button disabled={!isVerify} style={{opacity:isVerify?'1':'0'}} onClick={handlePushLk}  className="subm_form button_item">Завершить</button>*/}
                        </div>
            </span>
                <SnackBar open={openSnack} setOpen={setOpenSnack}/>
            </div>
        </Fade>
    );
};