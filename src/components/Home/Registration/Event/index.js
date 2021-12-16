import React from 'react';
import {useTimer} from "../../../../hooks/useTimer";
import {EventLink} from "./EventLink";

export const Event = ({caption,text,count,date,prize}) => {

    const{day,seconds,hours,minute}=useTimer(date)
    return (
        <>
            <div className="show_left wow slideInLeft" data-wow-duration="2s">
                <div className="show_title">{caption}</div>
                <div className="show_descr">{text}
                </div>
                <div className="show_links">
                    <EventLink path='/draw' classes='winners' title={'Победители'}/>
                    <EventLink path='/draw' classes='lasr_prize' title={'Призы'}/>
                </div>
            </div>
            <div className="show_right">
                <img src="/images/plize.png" alt="" className="prize_img wow pulse" data-wow-iteration="infinite"
                     data-wow-duration="2s"/>
                <div className="title_dark_show">Получи {prize}</div>
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
                <a href="/" className="open_prize">принять участие в конкурсе</a>
                <div className="sow_foot">Количество участников: <span>{count}</span></div>
            </div>
        </>
    );
};

