import React, { useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import { useSelector} from "react-redux";




export const TabMainInfo = () => {
    const {auth} = useSelector((state) => state);
    const[value,setValue]=useState({
        firstName:'',
        lastName:'',
        middleName:'',
        birthDate:'',
        country:'',
        city:'',
        telegram:'',
        vkontakte:''
    })
    const [success,setSuccess]=useState('')
    const firstName=useInputV('')
    const lastName=useInputV('')
    const middleName=useInputV('')
    const birthDate=useInputV('')
    const [country,setCountry]=useState('')
    const city=useInputV('')
    const telegram=useInputV('')
    const vkontakte=useInputV('')
    const handlePut=(e)=>{
        e.preventDefault()
        setValue({
            firstName:firstName.value,
            lastName:lastName.value,
            middleName:middleName.value,
            birthDate:birthDate.value,
            country:country,
            city:city.value,
            telegram:telegram.value,
            vkontakte:vkontakte.value,
        })
        const payload={
            firstName:value.firstName,
            lastName:value.lastName,
            middleName:value.middleName,
            birthDate:value.birthDate,
            country:value.country,
            city:value.city,
            telegram:value.telegram,
            vkontakte:value.vkontakte,

        }

        fetch('http://lk.pride.kb-techno.ru/api/Profile/update',{
            method:'PUT',
            body:JSON.stringify(payload),
            headers:{'Accept': 'application/octet-stream',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    setSuccess('Успешно')
                } else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .catch(error=>console.log(error))

    }
    const handleReset=()=>{
        firstName.onReset()
        lastName.onReset()
        middleName.onReset()
        birthDate.onReset()
        setCountry('')
        city.onReset()
        telegram.onReset()
        vkontakte.onReset()
    }
    return (
        <form onSubmit={handlePut} onReset={handleReset}>
            <div className="setting_form_row">
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Ваше Имя</span>
                    <input  onChange={e=>firstName.onChange(e)} value={firstName.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Фамилия</span>
                    <input  onChange={e=>lastName.onChange(e)} value={lastName.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Отчество</span>
                    <input  onChange={e=>middleName.onChange(e)} value={middleName.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Дата рождения</span>
                    <input  onChange={e=>birthDate.onChange(e)}  type='date' className="dark_input" />
                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Страна</span>
                    <select  defaultValue={'Россия'}  onChange={e=>setCountry(e.target.value)}  className="dark_input" name="country">
                        <option value='Россия' >Россия</option>
                        <option value='Пункт 2'  >Пункт 2</option>
                        <option value='Пункт 3'  >Пункт 3</option>
                        <option value='Пункт 4'  >Пункт 4</option>
                        <option value='Пункт 5'  >Пункт 5</option>
                        <option value='Пункт 6'  >Пункт 6</option>
                    </select>
                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Регион</span>
                    <input  onChange={e=>city.onChange(e)} value={city.value} type='text' className="dark_input" />
                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Skype\Telegram</span>
                    <input  onChange={e=>telegram.onChange(e)} value={telegram.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Страница VK.com</span>
                    <input  onChange={e=>vkontakte.onChange(e)} value={vkontakte.value} type='text' className="dark_input" />
                </div>
            </div>
            <p>{success}</p>

            <div className="setting_form_bottom">
                <button type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

