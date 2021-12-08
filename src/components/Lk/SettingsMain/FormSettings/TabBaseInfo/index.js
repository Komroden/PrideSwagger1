import React, { useState} from 'react';

import {useSelector} from "react-redux";
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";
import Alert from "@mui/material/Alert";
import Fade from '@mui/material/Fade';
import {Captcha} from "../../../../Home/ContReview/Captcha";

export const TabBaseInfo = () => {
    const [code,setCode]=useState('')
    const { auth } = useSelector((state) => state);

    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const [text,setText]=useState('');
    const [counter,setCounter]=useState(0)
    const [openModal,setOpenModal]=useState(false)
    const password=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const passwordConfirm=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const handlePut=(e)=>{
        e.preventDefault()
        setCounter(counter+1)
        const payload={
            password:password.value,
            confirmPassword:passwordConfirm.value,
            code:code
        }
        if(success){
            fetch('http://lk.pride.kb-techno.ru/api/Profile/change-password', {
                method:'POST',
                body:JSON.stringify(payload),
                headers:{'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${auth.token}`}
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        handleSuccess('Успешно')
                    }
                    if (res.status===400){
                        let error = new Error(res.statusText);
                        error.response = res;
                        handleSuccess('Неверный код')
                        if(counter>=2){
                            setSuccess(false)
                            openCaptcha()
                        }
                        throw error
                    }
                })

                .catch((error) => {
                    console.log(error)});
        }

    }
    const handleReset=()=>{
        password.onReset();
        passwordConfirm.onReset();
        password.setDirty(false);
    }

    const handleSuccess=(status)=>{
        setText(status)
        setOpenModal(true)
        if(status==='Успешно'){
            setTimeout(()=>setText(''),5000)
        }
    }


    return (
        <form onSubmit={handlePut} onReset={handleReset}>
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
            <Fade in={openModal} unmountOnExit>
                <div>
             <Alert severity={text==='Успешно'?"success":'error'} sx={{marginBottom:'50px'}}>{text}</Alert>
                </div>
            </Fade>
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

