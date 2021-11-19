import React, {useState} from 'react';

import {useSelector} from "react-redux";
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";

export const TabBaseInfo = () => {
    const { auth } = useSelector((state) => state);
    const [value,setValue]=useState({
        password:'',
        confirmPassword:''
    })
    const [success,setSuccess]=useState('')
    const password=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const passwordConfirm=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const handlePut=(e)=>{
        e.preventDefault()
        setValue({
            password:password.value,
            confirmPassword:passwordConfirm.value
        })
        const payload={
            password:value.password,
            confirmPassword:value.confirmPassword
        }

        fetch('http://lk.pride.kb-techno.ru/api/Profile/change-password', {
            method:'POST',
            body:JSON.stringify(payload),
            headers:{'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    setSuccess('Успешно')
                }
            })

            .catch((error) => {
                console.log(error)});
    }
    const handleReset=()=>{
        password.onReset();
        passwordConfirm.onReset();
        password.setDirty(false);
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
             <CodeInput mode={passwordConfirm.value!==password.value||!password.inputValid}/>
            <p>{success}</p>
            <div className="setting_form_bottom">
                <button disabled={passwordConfirm.value!==password.value||!password.inputValid} type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

