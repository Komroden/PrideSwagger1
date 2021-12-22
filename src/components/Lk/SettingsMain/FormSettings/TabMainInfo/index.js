import React, {useEffect, useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import Fade from "@mui/material/Fade";
import {Captcha} from "../../../../Home/ContReview/Captcha";
import {SnackBar} from "../../../../Home/Snackbar";
import {useFetchHandlePostWithBody} from "../../../../../hooks/useFetchHandlePostWithBody";




export const TabMainInfo = () => {
    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const openCaptcha = () => {
        setVisible(!visible);
    };

    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    const [counter,setCounter]=useState(0)

    const firstName=useInputV('')
    const lastName=useInputV('')
    const middleName=useInputV('')
    const birthDate=useInputV('')
    const [country,setCountry]=useState('')
    const city=useInputV('')
    const telegram=useInputV('')
    const vkontakte=useInputV('')
    const payload={
        firstName:firstName.value,
        lastName:lastName.value,
        middleName:middleName.value,
        birthDate:birthDate.value,
        country:country,
        city:city.value,
        telegram:telegram.value,
        vkontakte:vkontakte.value,

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
    const post=useFetchHandlePostWithBody('http://lk.pride.kb-techno.ru/api/Profile/change-password',payload,handleReset,setOpenSnack)

    useEffect(()=>{
        if(counter===2){
            setSuccess(false)
            openCaptcha()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[counter])

    // const handlePut=(e)=>{
    //     e.preventDefault()
    //     setCounter(counter+1)
    //
    //     if(success) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Profile/update', {
    //             method: 'PUT',
    //             body: JSON.stringify(payload),
    //             headers: {
    //                 'Accept': 'application/octet-stream',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then((res) => {
    //                 if (res.status >= 200 && res.status < 300) {
    //                     setOpenSnack({
    //                         status:true,
    //                         text:'Отправлено',
    //                         color:'success'
    //                     })
    //                 }
    //                 if (res.status===400||422){
    //                     let error = new Error('Некорректные данные');
    //                     error.response = res;
    //                     if(counter>=2){
    //                         setSuccess(false)
    //                         openCaptcha()
    //                     }
    //                     throw error
    //                 }
    //                 else {
    //                     let error = new Error(res.statusText);
    //                     error.response = res;
    //                     throw error
    //                 }
    //             })
    //             .catch(error => setOpenSnack({status:true,
    //                 text:error.message,
    //                 color:'error'}))
    //     }
    //
    // }

    return (
        <form onSubmit={success?e=>{
            e.preventDefault()
            setCounter(counter+1)
            post.handlePost(e)}:()=>{}} onReset={handleReset}>
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
                        <option value='Англия'  >Англия</option>
                        <option value='Франция'  >Франция</option>
                        <option value='Германия'  >Германия</option>
                        <option value='Польша'  >Польша</option>
                        <option value='Турция'  >Турция</option>
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
            <Fade  in={visible}>
                <div>
                    <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                </div>
            </Fade>
            <div className="setting_form_bottom">
                <button type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
        </form>
    );
};

