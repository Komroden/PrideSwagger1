import React, {useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";
import {useSelector} from "react-redux";

export const TabDopInfo = () => {
    const {auth} = useSelector((state) => state);

    const [success,setSuccess]=useState('')
    const phoneNumber = useInputV('', {isEmpty: true, isPhone: true});
    const email = useInputV('', {isEmpty: true, isEmail: true});
    const money = useInputV('')
    const handlePut = (e) => {
        e.preventDefault()

        if (phoneNumber.value) {
            console.log(phoneNumber.value)
            fetch('http://lk.pride.kb-techno.ru/api/Profile/change-phone', {
                method: 'POST',
                body: JSON.stringify(phoneNumber.value),
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        setSuccess('Успешно')
                    }
                })

                .catch((error) => {
                    console.log(error)
                });
        }


        if (email.value) {
            console.log(email.value)
            fetch('http://lk.pride.kb-techno.ru/api/Profile/change-email', {
                method: 'POST',
                body: JSON.stringify(email.value),
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        setSuccess('Успешно')
                    }
                })

                .catch((error) => {
                    console.log(error)
                });
        }
    }


    const handleReset=()=>{

        phoneNumber.onReset()
        money.onReset()
        email.onReset()
        email.setDirty(false)
        phoneNumber.setDirty(false)
    }

    return (
        <form onSubmit={handlePut} onReset={handleReset}>
            <div className="setting_form_row">
            <div className="setting_form_item setting_form_item_for_two">
                <span className="title_input">Телефон</span>
                <input  type='text' className="dark_input" onBlur={e => phoneNumber.onBlur(e)} onChange={e=>phoneNumber.onChange(e)} value={phoneNumber.value} />
                {(phoneNumber.isDirty && phoneNumber.phoneError) && <span className="required_fail"> Неверный формат</span>}

            </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Почта</span>
                    <input  type='text' className="dark_input" onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value} />
                    {(email.isDirty && email.emailError) && <span className="required_fail"> Неверный формат</span>}

                </div>

                <div className="setting_form_item">
                    <span className="title_input">Кошелек Perfect Money USD</span>
                    <input onChange={e=>money.onChange(e)} value={money.value} type='text' className="dark_input" />
                </div>
            </div>
            <CodeInput mode={phoneNumber.phoneError&&email.emailError}/>
            <p>{success}</p>
            <div className="setting_form_bottom">
                <button disabled={phoneNumber.phoneError&&email.emailError} type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

