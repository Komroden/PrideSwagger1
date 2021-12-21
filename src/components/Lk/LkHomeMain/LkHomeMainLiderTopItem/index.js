import React, {useState} from 'react';
import Slide from '@mui/material/Slide';
import {useImage} from "../../../../hooks/useImage";
import {useHistory} from "react-router";
import Fade from "@mui/material/Fade";

export const LkHomeMainLiderTopItem = ({url,number,isVisible,id}) => {
    const {push}=useHistory()
    const {pic}=useImage(url)
    const handlePush=(e)=>{
        e.preventDefault()
        push(`/user${id}`)
    }
    const [open,setOpen]=useState(false);

    return (
        <Slide direction="left" in={!isVisible}  unmountOnExit mountOnEnter>
        <div className="lider_top_item" >
            <Fade  in={open} timeout={1000} unmountOnExit>
                <div className='add_top_wrapper top_wrapper_message'>
                    <span  className='add_top' >{number}</span>
                </div>
            </Fade>
            <a href="/" onClick={(e)=>{e.preventDefault()}}  onDoubleClick={handlePush} className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src={pic} alt=""/>
									</span>
                <span className="green_lin"/>
                <span onMouseEnter={typeof number==='string'?()=>setOpen(true):()=>{}}
                      onMouseLeave={typeof number==='string'?()=>setOpen(false):()=>{}}

                      className="number_lin">{typeof number==='string'?number.substring(0,3)+'...':'#'+number}</span>
            </a>
        </div>
        </Slide>
    );
};

