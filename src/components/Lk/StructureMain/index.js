import React, { useState } from 'react';
import { OrgChartComponent } from './OrgChart';
import Fade from "@mui/material/Fade";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IconButton from "@mui/material/IconButton";
import {useSelector} from "react-redux";






export const StructureMain = props => {
    const { referals } = useSelector((state) => state);
    const [open,setOpen]=useState(false)
    window.onkeydown=(e)=>{
        if(e.keyCode===27){
            setOpen(false)
        }
    }







    const handlePush=()=>{

    }


    return (
        <>
            <Fade  in={open}>
                <div style={{background:'white'}} className='modal__wrapper'>
                    <OrgChartComponent
                        setClick={click => ( click)}
                        onNedeClick={handlePush}
                        data={referals.value}
                    />
                </div>
            </Fade>
            <IconButton onClick={()=>setOpen(true)}>
            <FullscreenIcon/>
            </IconButton>


        <OrgChartComponent
            setClick={click => ( click)}
            onNedeClick={handlePush}
            data={referals.value}
        />
        </>

    );
};

