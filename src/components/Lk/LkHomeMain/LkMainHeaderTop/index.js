import React, {useEffect, useRef, useState} from 'react';
import {LkHomeMainLiderTopItem} from "../LkHomeMainLiderTopItem";
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import './style.scss';
import {useSelector} from "react-redux";
import Alert from "@mui/material/Alert";




export const LkMainHeaderTop = () => {
    const { auth,allInfoUser } = useSelector((state) => state);
    const[open,setOpen]=useState(false);
    const[error,setError]=useState('');
    const[items,setItems]=useState({
        topListUsers:[
            {id: 0}
        ]
    })
    const[openError,setOpenError]=useState(false);
    const [message,setMessage]=useState('')

    const handleClick = (e) => {
        console.log(1)
        if(items.topListUsers[0].id===allInfoUser.value.id) return;

        setOpen(!open)
        if(items.length>=6){
            items.topListUsers.pop()
        }

    };
    const containerRef =useRef(null)
    const handleVerify=()=>{
        if(items.topListUsers[0].id===allInfoUser.value.id) return
        setError('')
        fetch(`http://lk.pride.kb-techno.ru/api/Main/pay-for-top?message=${message}`,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`},

        })
            .then(res=> {
                if (res.status === 422) {
                    let error = new Error('Недостаточно средств');
                    error.response = res;
                    throw error
                }
                res.json()
                setError('')
            })
            .then(body=> {
                if(items.topListUsers[0].id!==allInfoUser.value.id){
                    items.topListUsers.unshift({id:allInfoUser.value.id,image:allInfoUser.value.image})
                }
            })
            .catch(error=> {
                console.log(error)
                setError('Недостаточно средств')
                setOpenError(true)
            })
        setOpen(false)

    }
    const handlePush=(e)=>{
        e.preventDefault()

    }
    useEffect(()=>{
        if(auth.token) {
            fetch('http://lk.pride.kb-techno.ru/api/Main/top-list', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then((res) => res.json())
                .then((body) => {
                    setItems(body)
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    },[auth.token])

    return (
        <>
        <div className="lider_top" >
            <div className="lider_top_title">
                лидеры <br/>
                ваш топ
            </div>
            <div style={{display:items.topListUsers[0].id===allInfoUser.value.id?'none':'block'}}   className="lider_top_add">
                <Fade direction="right" in={open} timeout={1000} unmountOnExit>
                    <div className='add_top_wrapper'>
                <span  className='add_top'  >{'Войти в топ? цена: '+items.price+' руб.'}</span><br/>
                        <input value={message} onChange={e=>setMessage(e.target.value)} style={{width:'100%',marginTop:'10px'}} placeholder={'Сообщение'} type='text'/>
                    <button onClick={handleVerify} className='add_top_button'>Да</button>
                    </div>
                </Fade>
                <span onClick={handleClick} ref={containerRef}>
                    <span  className="dark_plus">+</span>
                </span>
            </div>

            <Slide direction="right" in={open} container={containerRef.current} timeout={1000} unmountOnExit mountOnEnter>
                <div className="lider_top_item" >

                    <a href="/" onClick={handlePush} className="lider_top_item_link">
									<span className="lider_top_item_img overlay">
										<img className='overlay_wrapper' src={allInfoUser.avatar} alt=""/>
									</span>
                        <span className="green_lin "/>
                        <span className="number_lin ">#1</span>
                    </a>
                </div>
            </Slide>
            {items.topListUsers.filter((ite,index)=>index<=6).map((item,index)=><LkHomeMainLiderTopItem key={item.id} id={item.id} url={item.image}  number={index+1} />)}
            {items.topListUsers.filter((ite,index)=>index<=6).map((item,index)=><LkHomeMainLiderTopItem key={item.id} id={item.id} url={item.image}  number={'Привет'} />)}

        </div>
            <Fade in={openError} unmountOnExit>
                <div>
                    <Alert severity='error' sx={{marginBottom:'30px'}}>{error}</Alert>
                </div>
            </Fade>
            </>

    );
};

