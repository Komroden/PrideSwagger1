import React, {useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";
import {useSelector} from "react-redux";
import Fade from "@mui/material/Fade";
import {Captcha} from "../../../../Home/ContReview/Captcha";
import {SnackBar} from "../../../../Home/Snackbar";

export const TabDopInfo = () => {
    const {auth} = useSelector((state) => state);

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
    const phoneNumber = useInputV('', {isEmpty: true, isPhone: true});
    const email = useInputV('', {isEmpty: true, isEmail: true});
    const[codePhone,setCodePhone]=useState('')
    const[codeEmail,setCodeEmail]=useState('')

    const handlePut = (e) => {
        e.preventDefault()
        setCounter(counter+1)
        if (phoneNumber.value&&success) {
            const payload={
                phone:phoneNumber.value,
                authorizationCode:codeEmail,
                confirmationCode:codePhone
            }
            fetch('http://lk.pride.kb-techno.ru/api/Profile/change-phone', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        setOpenSnack({
                            status:true,
                            text:'Отправлено',
                            color:'success'
                        })
                    }
                    if (res.status===400){
                        let error = new Error('Неверный код');
                        error.response = res;
                        if(counter>=2){
                            setSuccess(false)
                            openCaptcha()
                        }
                        throw error
                    }
                })

                .catch((error) => {
                    setOpenSnack({status:true,
                        text:error.message,
                        color:'error'})
                });
        }


        if (email.value&&success) {
            const payload={
                email:email.value,
                code:codePhone,
            }
            fetch('http://lk.pride.kb-techno.ru/api/Profile/change-email', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        setOpenSnack({
                            status:true,
                            text:'Отправлено',
                            color:'success'
                        })
                    }
                    if (res.status===400||422){
                        let error = new Error('Неверный код');
                        error.response = res;
                        if(counter>=2){
                            setSuccess(false)
                            openCaptcha()
                        }
                        throw error
                    }
                })

                .catch((error) => {
                    setOpenSnack({status:true,
                        text:error.message,
                        color:'error'})
                });
        }


    }


    const handleReset=()=>{

        phoneNumber.onReset()
        email.onReset()
        email.setDirty(false)
        phoneNumber.setDirty(false)
    }


    return (
        <form onSubmit={handlePut} onReset={handleReset}>
            <div className="setting_form_row">
            <div className="setting_form_item setting_form_item_for_two" >
                <span className="title_input">Телефон</span>
                <input disabled={!email.emailError}  type='text' className="dark_input" onBlur={e => phoneNumber.onBlur(e)} onChange={e=>phoneNumber.onChange(e)} value={phoneNumber.value}  />
                {(phoneNumber.isDirty && phoneNumber.phoneError) && <span className="error_message"> Неверный формат</span>}
                <CodeInput mode={!phoneNumber.phoneError} url={'http://lk.pride.kb-techno.ru/api/Confirm/send-email-authorization-code?action=email'} setCode={setCodeEmail} title={'из почты'} margin={true} />


            </div>
                <div className="setting_form_item setting_form_item_for_two" >
                    <span className="title_input">Почта</span>
                    <input disabled={!phoneNumber.phoneError}  type='text' className="dark_input" onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value}  />
                    {(email.isDirty && email.emailError) && <span className="error_message"> Неверный формат</span>}
                    <CodeInput mode={!phoneNumber.phoneError} url={`http://lk.pride.kb-techno.ru/api/Confirm/send-sms-confirmation-code?phoneNumber=${phoneNumber.value}&action=phone`} setCode={setCodePhone} title={'из смс нового телефона'} margin={true}  />
                    <CodeInput mode={!email.emailError} setCode={setCodePhone} url={'http://lk.pride.kb-techno.ru/api/Confirm/send-authorization-code?action=password'} title={'из смс'} margin={true} />
                </div>

            </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
            <Fade  in={visible}>
                <div>
                    <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                </div>
            </Fade>
            <div className="setting_form_bottom">
                <button  type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

