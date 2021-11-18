import React, {useEffect, useState} from 'react';
import {useTimer} from "../../../../hooks/useTimer";
import {EventLink} from "./EventLink";

export const Event = () => {
    const [show,setShow]=useState([])

    useEffect(()=>{

        fetch('http://lk.pride.kb-techno.ru/api/Contest/latest-contest',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then((body)=>{

                setShow(body)
            })
            .catch((e) => {
                console.log(e.message);
            });
    },[])

    const{day,seconds,hours,minute}=useTimer(show.finishDate)
    return (
        <>
            <div className="show_left wow slideInLeft" data-wow-duration="2s">
                <div className="show_title">{show.caption}</div>
                <div className="show_descr">{show.text}
                </div>
                <div className="show_links">
                    <EventLink path='/draw' classes='winners' title={'Победители'}/>
                    <EventLink path='/draw' classes='lasr_prize' title={'Призы'}/>
                </div>
            </div>
            <div className="show_right">
                <img src="/images/plize.png" alt="" className="prize_img wow pulse" data-wow-iteration="infinite"
                     data-wow-duration="2s"/>
                <div className="title_dark_show">Получи {show.prize}</div>
                <div className="clock_show">
                    <div className="day cl">
                        <div className="plate_clock" id="dayscount">{day}</div>
                        <div className="descr_clock">days</div>
                    </div>
                    <div className="hour cl">
                        <div className="plate_clock" id="hourscount">{hours}</div>
                        <div className="descr_clock">Hours</div>
                    </div>
                    <div className="minut cl">
                        <div className="plate_clock" id="minscount">{minute}</div>
                        <div className="descr_clock">minutes</div>
                    </div>
                    <div className="secu cl">
                        <div className="plate_clock" id="secscount">{seconds}</div>
                        <div className="descr_clock">seconds</div>
                    </div>
                </div>
                <div className="show_descr">
                </div>
                <a href="#" className="open_prize">принять участие в конкурсе</a>
                <div className="sow_foot">Количество участников: <span>{show.participantsCount}</span></div>
            </div>
        </>
    );
};

