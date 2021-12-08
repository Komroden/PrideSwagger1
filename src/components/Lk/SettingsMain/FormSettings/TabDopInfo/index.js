import React, {useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";
import {useSelector} from "react-redux";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import {Captcha} from "../../../../Home/ContReview/Captcha";

export const TabDopInfo = () => {
    const {auth} = useSelector((state) => state);

    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const [text,setText]=useState('');
    const [counter,setCounter]=useState(0)
    const [openModal,setOpenModal]=useState(false)
    const phoneNumber = useInputV('', {isEmpty: true, isPhone: true});
    const email = useInputV('', {isEmpty: true, isEmail: true});
    const[codePhone,setCodePhone]=useState('')
    const[codeEmail,setCodeEmail]=useState('')
    const money = useInputV('')
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
                    console.log(error)
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
                    console.log(error)
                });
        }
        if (money.value&&success) {
            const payload={
                id:'0',
                objectName:'CryptoWallet',
                cryptoWallet:money.value,
                cryptoCurrency:'10',
                networkType:'string',
                code:codePhone,
            }
            fetch('http://lk.pride.kb-techno.ru/api/Profile/requisites/add-crypto-wallet', {
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
            <div className="setting_form_item setting_form_item_for_two" >
                <span className="title_input">Телефон</span>
                <input disabled={!email.emailError||money.value!==''}  type='text' className="dark_input" onBlur={e => phoneNumber.onBlur(e)} onChange={e=>phoneNumber.onChange(e)} value={phoneNumber.value}  />
                {(phoneNumber.isDirty && phoneNumber.phoneError) && <span className="error_message"> Неверный формат</span>}
                <CodeInput mode={!phoneNumber.phoneError} url={'http://lk.pride.kb-techno.ru/api/Confirm/send-email-authorization-code?action=email'} setCode={setCodeEmail} title={'из почты'} margin={true} />


            </div>
                <div className="setting_form_item setting_form_item_for_two" >
                    <span className="title_input">Почта</span>
                    <input disabled={!phoneNumber.phoneError||money.value!==''}  type='text' className="dark_input" onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value}  />
                    {(email.isDirty && email.emailError) && <span className="error_message"> Неверный формат</span>}
                    <CodeInput mode={!phoneNumber.phoneError} url={`http://lk.pride.kb-techno.ru/api/Confirm/send-sms-confirmation-code?phoneNumber=${phoneNumber.value}&action=phone`} setCode={setCodePhone} title={'из смс нового телефона'} margin={true}  />
                    <CodeInput mode={!email.emailError} setCode={setCodePhone} url={'http://lk.pride.kb-techno.ru/api/Confirm/send-authorization-code?action=password'} title={'из смс'} margin={true} />
                </div>

                <div className="setting_form_item">
                    <span className="title_input">Кошелек Криптовалют</span>
                    <input disabled={!email.emailError||!phoneNumber.phoneError} onChange={e=>money.onChange(e)} value={money.value} type='text' className="dark_input" />
                    <CodeInput mode={money.value!==''} setCode={setCodePhone} url={'http://lk.pride.kb-techno.ru/api/Confirm/send-authorization-code?action=password'} title={'из смс'} margin={true} />
                </div>
            </div>
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
                <button  type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

