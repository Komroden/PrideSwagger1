import React, { useState} from 'react';

import Fade from "@mui/material/Fade";
import {Captcha} from "../Captcha";
import {useInputV} from "../../../../hooks/useInputV";
import {useSelector} from "react-redux";
import Alert from "@mui/material/Alert";

export const ReviewForm = () => {
    const { auth } = useSelector((state) => state);
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(false);
    const [text,setText]=useState('');
    const [openModal,setOpenModal]=useState(false)
    const message=useInputV('');
    const openCaptcha = (e) => {
        e.preventDefault()
        setVisible(!visible);
    };

    const handlePost=(e)=>{
        e.preventDefault()
        if(auth.token&&success){
            console.log(message.value)
            fetch('http://lk.pride.kb-techno.ru/api/Main/review',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${auth.token}`},
                    body:JSON.stringify(message.value)
            })
                .then((res) => res.text())
                .then(()=>{
                    setText('Отправлено')
                    setOpenModal(true)
                    setTimeout(()=>setOpenModal(false),5000)
                    setSuccess(false)})
                .catch((e) => {
                    setSuccess(false)
                    console.log(e.message);
                });
        }
        setText('Необходимо авторизоваться')
        setOpenModal(true)
        setTimeout(()=>setOpenModal(false),10000)
    }

    // только авторизованный
    return (
        <div className="contact_block wow bounceInUp contact_blockFormReview" data-wow-duration="3s">
            <div className="containerP">
                <div className="pride_title pride_titleFormReview">
                    Оставить отзыв
                </div>
                <div className="form_cont">
                    <form>
                        {/*<input type="text" placeholder="Email Address" className="inputp"/>*/}
                        {/*<input type="text" placeholder="Phone" className="inputp"/>*/}
                        {/*<input type="text" placeholder="Subject" className="inputp"/>*/}
                        <textarea placeholder="Message" className="inputp" onBlur={e => message.onBlur(e)} onChange={e=>message.onChange(e)} value={message.value}/>
                        <Fade in={openModal} unmountOnExit>
                            <div>
                                <Alert severity={text==='Отправлено'?"success":'error'} sx={{marginTop:'10px'}}>{text}</Alert>
                            </div>
                        </Fade>
                        <button disabled={!message.value}  onClick={success?handlePost:openCaptcha} className="subm_form">
                            Отправить сообщение
                        </button>
                        <Fade  in={visible}>
                            <div>
                            <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                            </div>
                        </Fade>

                    </form>
                </div>
            </div>
        </div>
    );
};

