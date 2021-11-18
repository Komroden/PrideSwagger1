import React, {useState} from 'react';

import {useSelector} from "react-redux";
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";

export const TabBaseInfo = () => {
    const { auth } = useSelector((state) => state);
    const [value,setValue]=useState({
        old_password:'',
        new_password:''
    })
    const login=useInputV('')
    const password=useInputV('',{minLength:6,maxLength:10});
    const passwordConfirm=useInputV('',{minLength:6,maxLength:10});
    const newPassword=useInputV('',{minLength:6,maxLength:10});
    const handlePut=(e)=>{
        e.preventDefault()
        setValue({
            old_password:password.value,
            new_password:newPassword.value
        })

        fetch('http://127.0.0.1:8000/api/auth/change-password', {
            method:'PUT',
            body:JSON.stringify(value),
            headers:{'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
            });
    }
    const handleReset=()=>{
        login.onReset();
        password.onReset();
        passwordConfirm.onReset();
        newPassword.onReset();
        newPassword.setDirty(false);
        password.setDirty(false);
    }


    return (
        <form onSubmit={handlePut} onReset={handleReset}>
            <div className="setting_form_row">
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Логин</span>
                    <input onBlur={e => login.onBlur(e)} onChange={e=>login.onChange(e)} value={login.value} type='text' className="dark_input" />
                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Новый пароль</span>
                    <input onBlur={e => newPassword.onBlur(e)} onChange={e=>newPassword.onChange(e)} value={newPassword.value} type='password' className="dark_input" />
                    {(newPassword.isDirty && newPassword.minLengthError) && <span className="required_fail">Минимальная длинна пароля 6 символов</span>}
                    {(newPassword.isDirty && newPassword.maxLengthError) && <span className="required_fail">Максимальная длинна пароля 10 символов</span>}

                </div>

                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Пароль</span>
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
            {(newPassword.value!==''||login.value!=='') && <CodeInput/>}
            <div className="setting_form_bottom">
                <button disabled={true} type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

