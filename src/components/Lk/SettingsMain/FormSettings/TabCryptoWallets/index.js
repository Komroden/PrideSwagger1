import React, {useEffect, useState} from 'react';
import {CodeInput} from "../CodeInput";
import {useInputV} from "../../../../../hooks/useInputV";
import {useSelector} from "react-redux";
import Fade from "@mui/material/Fade";
import Alert from "@mui/material/Alert";
import {Captcha} from "../../../../Home/ContReview/Captcha";
import {Wallets} from "./Wallets";


export const TabCryptoWalets = () => {
    const {auth} = useSelector((state) => state);
    const money = useInputV('')
    const [country,setCountry]=useState('')
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const [text,setText]=useState('');
    const [counter,setCounter]=useState(0)
    const [openModal,setOpenModal]=useState(false)
    const [wallets,setWallets]=useState({
        cryptoWallets:[]
    })
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const[codePhone,setCodePhone]=useState('')



    const handleSuccess=(status)=>{
        setText(status)
        setOpenModal(true)
        if(status==='Успешно'){
            setTimeout(()=>setText(''),5000)
        }
    }

    const handlePut=()=>{
        console.log(country)
        if (success) {
            setCounter(counter+1)
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
        money.onReset()
    }

    useEffect(()=>{
        if(auth.token) {
            fetch('http://lk.pride.kb-techno.ru/api/Profile/requisites', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => setWallets(body))
        }
    },[auth.token])

    return (
        <form onSubmit={handlePut} onReset={handleReset}>
            <div className="setting_form_row ">
                {wallets.cryptoWallets.map(item=><Wallets name={item.objectName} value={item.cryptoWallet} key={item.id} id={item.id} />)}


                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Кошелек Криптовалют USDT</span>
                    <input  onChange={e=>money.onChange(e)} value={money.value} type='text' className="dark_input" />
                    <CodeInput mode={money.value!==''} setCode={setCodePhone} url={'http://lk.pride.kb-techno.ru/api/Confirm/send-authorization-code?action=password'} title={'из смс'} margin={true} />
                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Тип кошелька</span>
                    <select  defaultValue={'TRC'}  onChange={e=>setCountry(e.target.value)}  className="dark_input" name="country">
                        <option value='TRC' >TRC</option>
                        <option value='ERC20'  >ERC20</option>

                    </select>
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

