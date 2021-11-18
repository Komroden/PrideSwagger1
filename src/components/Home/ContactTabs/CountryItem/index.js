import React, {useEffect, useState} from 'react';
import Grow from '@mui/material/Grow';

export const CountryItem = ({city,address,fullAddress,tel,email,mapsUrl,active}) => {
    const[isActive,setActive]=useState(false);
    useEffect(()=>{
        if(active){
            setActive(true)
        }
        else {
            setActive(false)
        }
    },[active])
    return (
        <Grow in={isActive}  >
        <div className={"tabs-panel "+active}  data-index="0">
            <iframe height="710"
                    src={`https://maps.google.com/maps?q=${mapsUrl}&t=&z=5&ie=UTF8&iwloc=&output=embed`}/>
            <div className="box_upper">
                <div className="box_title">Contact Us</div>
                <div className="box_city">{city}</div>
                <div className="box_adress">{address} <br/>{fullAddress}</div>
                <div className="box_tel"><span><a href="tel:880056789011">{tel}</a> <br/>Central Office</span>
                </div>
                <div className="box_meil"><a href="mailto:support@pride.io">{email}</a></div>
            </div>
        </div>
        </Grow>
    );
};

