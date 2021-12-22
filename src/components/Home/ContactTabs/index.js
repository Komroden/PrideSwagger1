import React, { useState} from 'react';
import './style.scss';
import {CountryItem} from "./CountryItem";
import {CountryCard} from "./CountryCard";
import {useFetchWithoutTokenGet} from "../../../hooks/useFetchWithoutTokenGet";

export const ContactTabs = () => {
    const [country,setCountry]=useState('');
    // const [offices,setOfices]=useState([])
    const offices=useFetchWithoutTokenGet('http://lk.pride.kb-techno.ru/api/Main/offices-list',[])
    // useEffect(()=>{
    //     fetch('http://lk.pride.kb-techno.ru/api/Main/offices-list',{
    //         method:'GET',
    //         headers:{'Content-Type': 'application/json',
    //             'Accept': 'application/json'}
    //     })
    //         .then((res) => res.json())
    //         .then((body)=>setOfices(body)
    //         )
    //         .catch((e) => {
    //             console.log(e.message);
    //         });
    //
    // },[])


    return (
        <div className="contact_tabs">
            <div className="">
                <div className="tabs-container">
                    <ul  className="tabs containerP">
                        {offices.map((item,index)=><CountryCard key={index} city={item.city} address={item.address} country={item.country} setCountry={setCountry}/>)}
                    </ul>
                    <div className="tabs-content">
                        {offices.filter(item=>country===item.address).map((item,index)=><CountryItem key={index} city={item.city} address={item.address} country={item.country} email={item.email}
                                                                active={'active'} tel={item.phone} mapsUrl={item.latitude+', '+item.longitude} name={item.objectName}/>)}


                    </div>
                </div>
            </div>
        </div>
    );
};

