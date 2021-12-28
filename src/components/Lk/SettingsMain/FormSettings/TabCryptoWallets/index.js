import React, { useEffect, useState} from 'react';
import {CodeInput} from "../CodeInput";
import {useInputV} from "../../../../../hooks/useInputV";
import { useSelector} from "react-redux";
import Fade from "@mui/material/Fade";
import {Captcha} from "../../../../Home/ContReview/Captcha";
import {Wallets} from "./Wallets";
import {SnackBar} from "../../../../Home/Snackbar";
import {useFetchHandlePostWithBody} from "../../../../../hooks/useFetchHandlePostWithBody";



export const TabCryptoWalets = () => {
    const {allInfoUser} = useSelector((state) => state);
    const money = useInputV('')
    const [country,setCountry]=useState('TRC')
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);

    const [counter,setCounter]=useState(0);



    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })

    const openCaptcha = () => {
        setVisible(!visible);
    };
    const[codePhone,setCodePhone]=useState('')

    const payload={
        cryptoWallet:money.value,
        cryptoCurrency:'USDT',
        networkType:country,
        code:codePhone,
    }
    const handleReset=()=>{
        money.onReset()
    }

    const post=useFetchHandlePostWithBody('http://lk.pride.kb-techno.ru/api/Profile/requisites/add-crypto-wallet',payload,handleReset,setOpenSnack,'POST')

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
            <div className="setting_form_row ">
                {allInfoUser.wallets.map(item=><Wallets name={item.objectName} value={item.cryptoWallet} key={item.id} id={item.id} />)}


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

