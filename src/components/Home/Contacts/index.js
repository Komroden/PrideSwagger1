import React, {useState} from 'react';
import './style.scss'

import 'react-slide-captcha/dist/styles.css';
import {useInputV} from "../../../hooks/useInputV";
import {Captcha} from "../ContReview/Captcha";
import Fade from "@mui/material/Fade";
import {SnackBar} from "../Snackbar";
import {useFetchHandlePostWithBody} from "../../../hooks/useFetchHandlePostWithBody";

export const Contacts = ({title,isSocial}) => {
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(false);
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    const email=useInputV('',{isEmpty:true});
    const name=useInputV('',{isEmpty:true});
    const subject=useInputV('',{isEmpty:true});
    const phone_number=useInputV('',{isEmpty:true});
    const message=useInputV('');
    const openCaptcha = (e) => {
        e.preventDefault()
        setVisible(!visible);
    };
    const payload= {
        contactName:name.value,
        email:email.value,
        phone:phone_number.value,
        subject:subject.value,
        text:message.value,
    }
    const handleReset=()=>{
        name.onReset()
        email.onReset()
        subject.onReset()
        phone_number.onReset()
        message.onReset()
    }

    const post=useFetchHandlePostWithBody('http://lk.pride.kb-techno.ru/api/Main/feedback',payload,handleReset,setOpenSnack,'POST')


    // const handlePost=(e)=>{
    //     setOpenSnack({
    //         status:false,
    //         text:'',
    //         color:'error'
    //     })
    //     e.preventDefault()
    //
    //     fetch('http://lk.pride.kb-techno.ru/api/Main/feedback',{
    //         method:'POST',
    //         body:JSON.stringify(payload),
    //         headers: {'Content-Type': 'application/json',
    //                   "Accept": "application/json"}
    //     })
    //
    //
    // .then((res) => {
    //         if (res.status >= 200 && res.status < 300) {
    //             setOpenSnack({
    //                 status:true,
    //                 text:'Отправлено',
    //                 color:'success'
    //             })
    //             name.onReset()
    //             email.onReset()
    //             subject.onReset()
    //             phone_number.onReset()
    //             message.onReset()
    //             return
    //         }
    //         if (res.status === 400 ){
    //             let error = new Error('Некорректные данные');
    //             error.response = res;
    //             throw error
    //         }else {
    //             let error = new Error(res.statusText);
    //             error.response = res;
    //             throw error
    //         }
    //     })
    //         .catch(error=>setOpenSnack({status:true,
    //             text:error.message,
    //             color:'error'}));
    // }

    return (
        <div className="contact_block wow bounceInUp" data-wow-duration="3s">
            <div className="containerP">
                <div className="pride_title">
                    {title}
                </div>
                {isSocial&&
                <div className="contact_block_sub_title">Have any question? Write to us and we’ll get back to you
                    shortly.
                </div>}
                {isSocial&&<div className="contact_soc">
                    <a href="tel:+61383766284" className="tel">
                    <img src="/images/tel.png" alt=""/>
                    <span>+61 3 8376 6284</span>
                    </a>
                    <a href="mailto:info@pride.com" className="email">
                    <img src="/images/email.png" alt=""/>
                    <span>info@pride.com</span>
                    </a>
                    </div>}
                <div className="form_cont ">
                    <form className={'form_cont_wrap'}>
                        <input type="text" placeholder="Name" className="inputp" onBlur={e => name.onBlur(e)} onChange={e=>name.onChange(e)} value={name.value}/>
                        {/*{(name.isDirty && name.isEmpty) && <span className='inp'><span className="required_fail required_fail_contact"> Обязательное поле</span></span>}*/}
                            <input type="text" placeholder="Email Address" className="inputp" onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value}/>
                        {/*{(email.isDirty && email.isEmpty) && <span className='inp'><span className="required_fail"> Обязательное поле</span></span>}*/}
                        {/*{(email.isDirty && email.emailError &&!email.isEmpty) && <span className='inp'><span className="required_fail"> Неверный формат</span></span>}*/}
                                <input type="text" placeholder="Phone" className="inputp" onBlur={e => phone_number.onBlur(e)} onChange={e=>phone_number.onChange(e)} value={phone_number.value}/>
                        {/*{(phone_number.isDirty && phone_number.isEmpty) && <span className='inp'><span className="required_fail"> Обязательное поле</span></span>}*/}
                        {/*{(phone_number.isDirty && phone_number.phoneError &&!phone_number.isEmpty) && <span className='inp'><span className="required_fail"> Неверный формат</span></span>}*/}
                                    <input type="text" placeholder="Subject" className="inputp" onBlur={e => subject.onBlur(e)} onChange={e=>subject.onChange(e)} value={subject.value}/>
                        {/*{(subject.isDirty && subject.isEmpty) && <span className='inp'><span className="required_fail"> Обязательное поле</span></span>}*/}
                                        <textarea placeholder="Message" className="inputp" onBlur={e => message.onBlur(e)} onChange={e=>message.onChange(e)} value={message.value}/>
                        {/*{(message.isDirty && message.isEmpty) && <span className='inp'><span className="required_fail"> Обязательное поле</span></span>}*/}
                                        <button disabled={!email.inputValid||!name.inputValid||!phone_number.inputValid||!subject.inputValid} onClick={success?e=> {
                                            e.preventDefault()
                                            post.handlePost(e)
                                            setSuccess(false)
                                        }:openCaptcha}  className="subm_form" type='submit'>Отправить сообщение</button>
                        <Fade  in={visible}>
                            <div>
                                <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                            </div>
                        </Fade>
                    </form>
                </div>
            </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
        </div>
    );
};

