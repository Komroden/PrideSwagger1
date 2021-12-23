import React, {useEffect, useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";
import Fade from '@mui/material/Fade';
import {Captcha} from "../../../../Home/ContReview/Captcha";
import {SnackBar} from "../../../../Home/Snackbar";
import {useFetchHandlePostWithBody} from "../../../../../hooks/useFetchHandlePostWithBody";

export const TabBaseInfo = () => {
    const [code,setCode]=useState('')
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })

    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const [counter,setCounter]=useState(0)
    const password=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const passwordConfirm=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const payload={
        password:password.value,
        confirmPassword:passwordConfirm.value,
        code:code
    }
    const handleReset=()=>{
        password.onReset();
        passwordConfirm.onReset();
        password.setDirty(false);
        setCode('')
    }


    const post=useFetchHandlePostWithBody('http://lk.pride.kb-techno.ru/api/Profile/change-password',payload,handleReset,setOpenSnack,'POST')
    // const handlePut=(e)=>{
    //     e.preventDefault()
    //     setCounter(counter+1)
    //
    //     if(success){
    //         fetch('http://lk.pride.kb-techno.ru/api/Profile/change-password', {
    //             method:'POST',
    //             body:JSON.stringify(payload),
    //             headers:{'accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization':`Bearer ${auth.token}`}
    //         })
    //             .then((res) => {
    //                 if (res.status >= 200 && res.status < 300) {
    //                     setOpenSnack({
    //                         status:true,
    //                         text:'Отправлено',
    //                         color:'success'
    //                     })
    //                 }
    //                 if (res.status===400){
    //                     let error = new Error('Некорректные данные');
    //                     error.response = res;
    //                     if(counter>=2){
    //                         setSuccess(false)
    //                         openCaptcha()
    //                     }
    //                     throw error
    //                 }
    //             })
    //
    //             .catch((error) => {
    //                 setOpenSnack({status:true,
    //                     text:error.message,
    //                     color:'error'})
    //             });
    //     }
    //
    // }
    useEffect(()=>{
        if(counter===2){
            setSuccess(false)
            openCaptcha()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[counter])





    return (
        <form onSubmit={success?e=>{
            e.preventDefault()
            setCounter(counter+1)
            post.handlePost(e)}:()=>{}} onReset={handleReset}>
            <div className="setting_form_row">
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Новый пароль</span>
                    <input onBlur={e => password.onBlur(e)} onChange={e=>password.onChange(e)} value={password.value} type='password' className="dark_input" />
                    {(password.isDirty && password.minLengthError) && <span className="required_fail">Минимальная длинна пароля 6 символов</span>}
                    {(password.isDirty && password.maxLengthError) && <span className="required_fail">Максимальная длинна пароля 10 символов</span>}

                </div>

                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Подтвердить пароль</span>
                    <input onBlur={e => passwordConfirm.onBlur(e)} onChange={e=>passwordConfirm.onChange(e)} value={passwordConfirm.value} type='password' className="dark_input" />
                    {(passwordConfirm.value!==password.value) && <span className="required_fail">Пароли не совпадают</span>}
                </div>

            </div>
             <CodeInput mode={passwordConfirm.value===password.value&&password.inputValid} setCode={setCode} url={'http://lk.pride.kb-techno.ru/api/Confirm/send-authorization-code?action=password'} title={'из смс'}/>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
            <Fade  in={visible}>
                <div>
                    <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                </div>
            </Fade>
            <div className="setting_form_bottom">
                <button disabled={passwordConfirm.value!==password.value&&password.inputValid} type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

