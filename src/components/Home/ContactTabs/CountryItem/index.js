import React from 'react';
import Grow from '@mui/material/Grow';

export const CountryItem = ({country,city,address,tel,email,mapsUrl,name,isActive}) => {


    return (
        <Grow in={isActive} timeout={1000} unmountOnExit   >
        <div className={"tabs-panel active"}  data-index="0">
            <iframe height="710"
                    src={`https://maps.google.com/maps?q=${mapsUrl}&z=15&output=embed`} title={city}/>
            <div className="box_upper">
                <div className="box_title">Contact Us</div>
                <div className="box_city">{country}</div>
                <div className="box_adress">{city} <br/>{address}</div>
                <div className="box_tel"><span><a href="tel:880056789011">{tel}</a> <br/>{name}</span>
                </div>
                <div className="box_meil"><a href="mailto:support@pride.io">{email}</a></div>
            </div>
        </div>
        </Grow>
    );
};

