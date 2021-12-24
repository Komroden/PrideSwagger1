import React, { useState} from 'react';
import Fade from "@mui/material/Fade";
import {Captcha} from "../Captcha";
import {useInputV} from "../../../../hooks/useInputV";
import {SnackBar} from "../../Snackbar";
import {useFetchHandlePostWithBody} from "../../../../hooks/useFetchHandlePostWithBody";

export const ReviewForm = () => {
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(false);
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    const message=useInputV('');
    const openCaptcha = (e) => {
        e.preventDefault()
        setVisible(!visible);
    };
    const handleReset=()=>{
        message.onReset()
    }

    const post=useFetchHandlePostWithBody('http://lk.pride.kb-techno.ru/api/Main/review',message.value,handleReset,setOpenSnack,"POST")

    // const handlePost=(e)=>{
    //     e.preventDefault()
    //     if(auth.token&&success){
    //         fetch('http://lk.pride.kb-techno.ru/api/Main/review',{
    //             method:'POST',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization':`Bearer ${auth.token}`},
    //                 body:JSON.stringify(message.value)
    //         })
    //             .then((res) => res.text())
    //             .then(()=>{
    //                 setOpenSnack({
    //                     status:true,
    //                     text:'Отправлено',
    //                     color:'success'
    //                 })
    //                 setSuccess(false)})
    //             .catch((e) => {
    //                 setSuccess(false)
    //                 console.log(e.message);
    //             });
    //     }
    //     setOpenSnack({status:true,
    //         text:"Необходимо авторизоваться",
    //         color:'error'})
    // }

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

                        <SnackBar setOpen={setOpenSnack} open={openSnack}/>
                        <button disabled={!message.value}  onClick={success?e=> {
                            e.preventDefault()
                            post.handlePost()
                        }:openCaptcha} className="subm_form">
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

