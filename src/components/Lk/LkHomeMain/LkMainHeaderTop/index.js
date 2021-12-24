import React, { useRef, useState} from 'react';
import {LkHomeMainLiderTopItem} from "../LkHomeMainLiderTopItem";
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import './style.scss';
import {useSelector} from "react-redux";
import {SnackBar} from "../../../Home/Snackbar";
import {useFetchWithTokenGet} from "../../../../hooks/useFetchWithTokenGet";
import {Loader} from "../../../../api/Loader";




export const LkMainHeaderTop = () => {
    const { auth,allInfoUser } = useSelector((state) => state);
    const[open,setOpen]=useState(false);
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    // const[items,setItems]=useState({
    //     topListUsers:[
    //         {id: 0}
    //     ]
    // })
    const items=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Main/top-list',{
        topListUsers:[
            {id: 0}
        ]
    })

    const [message,setMessage]=useState('')
    const [valueType,setValueType]=useState('USDC')

    const handleClick = (e) => {
        // console.log(1)
        // if(items.topListUsers[0].id===allInfoUser.value.id) return;

        setOpen(!open)
        if(items.length>=6){
            items.topListUsers.pop()
        }

    };
    const containerRef =useRef(null)
    const handleVerify=()=>{

        fetch(`http://lk.pride.kb-techno.ru/api/Main/pay-for-top?message=${message}&accountName=${valueType}`,{
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

            })
            .then(body=> {
                setOpenSnack({
                    status:true,
                    text:'Вы добавлены в топ!',
                    color:'success'
                })
            })
            .catch(error=> {
                setOpenSnack({status:true,
                    text:error.message,
                    color:'error'})
            })
        setOpen(false)

    }
    const handlePush=(e)=>{
        e.preventDefault()

    }
    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Main/top-list', {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then((res) => res.json())
    //             .then((body) => {
    //                 setItems(body)
    //             })
    //             .catch((e) => {
    //                 console.log(e.message);
    //             });
    //     }
    // },[auth.token])

    return (
        <>
        <div  className="lider_top" >
            <div ref={containerRef} className="lider_top_title">
                лидеры <br/>
                ваш топ
            </div>

            {/*//style={{display:items.topListUsers[0].id===allInfoUser.value.id?'none':'block'}}*/}
            <div   className="lider_top_add">
                <Fade direction="right" in={open} timeout={1000} unmountOnExit>
                    <div className='add_top_wrapper'>
                <span  className='add_top'  >{'Войти в топ? цена: '+items.data.price+' руб.'}</span><br/>
                        <input value={message} onChange={e=>setMessage(e.target.value)} style={{width:'100%',marginTop:'10px'}} placeholder={'Сообщение'} type='text'/>
                        <span style={{marginTop:'10px'}} className="add_top">Выберете  кошелек:</span><br/>
                        <select style={{width:'100%'}}  defaultValue={'USDC'}  onChange={e=>setValueType(e.target.value)}   name="valueType">
                            <option value='Usdc' >USDC</option>
                            <option value='Bitcoin' >BTC</option>
                            <option value='Ethereum' >ETH</option>
                            <option value='Litecoin' >LITE</option>
                        </select>

                    <button onClick={handleVerify} className='add_top_button'>Да</button>
                    </div>
                </Fade>
                <span  onClick={handleClick} >
                    <span   className="dark_plus">+</span>
                </span>
            </div>

            <Slide direction="left" in={open} container={containerRef.current} timeout={1000} unmountOnExit mountOnEnter>
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
            <Loader loading={items.loading}/>
            {items.data.topListUsers.filter((ite,index)=>index<=6).map((item,index)=><LkHomeMainLiderTopItem key={item.id} id={item.id} url={item.image}  number={item.message?item.message:index+1} />)}


        </div>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
            </>

    );
};

