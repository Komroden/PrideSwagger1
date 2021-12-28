import React, {useState} from 'react';

import {useFetchStringParametr} from "../../../../hooks/useFetchStringParametr";
import {SnackBar} from "../../../Home/Snackbar";


export const BlockUserId = ({id}) => {
    //id props
    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })
    const block=useFetchStringParametr(`http://lk.pride.kb-techno.ru/api/Chat/block-sender/${id}`,'PUT',setOpenSnack,'Пользователь заблокирован')
    //  const handleBlockById=(e)=>{
    //      e.preventDefault()
    //     fetch(`http://lk.pride.kb-techno.ru/api/Chat/block-sender/${id}`, {
    //         method:'PUT',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization':`Bearer ${auth.token}`}
    //     })
    //         .then(res=>res.json())
    //         .then(res=>console.log(res))
    //         .catch(e=>console.log(e))
    // }
    return (
        <>
        <a href={'/'} onClick={(e)=>{e.preventDefault()
        block.handleFetch()}} className="gost_item_blocked">
										<span className="gost_item_blocked_img">
											<img src="/images/blocked.png" alt=""/>
										</span>
            <span className="gost_item_blocked_text">Заблокировать пользователя</span>
        </a>
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
        </>
    );
};

