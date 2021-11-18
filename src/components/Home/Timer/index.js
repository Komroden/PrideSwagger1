import React, {useCallback} from 'react';
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {openTimer} from "../../../store/timer/actions";



export const Timer = () => {
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openTimer())
    }, [dispatch]);
    const { showMessage } = useSelector((state) => state);

    return (
        <div  className="timer_r" >
            <div className="pres">
                <span onClick={setName} className="toform">жми</span>
            </div>
            <div className="timer_right">
                <div className="timer_date">
                    <span className="timer_hours" id="time"><span id="minutes">{showMessage.minute}</span>:<span
                        id="seconds">{showMessage.seconds}</span></span>
                </div>
                <div className="timer_price">
                    <span id="price_r">{showMessage.price}</span> р.
                </div>
            </div>
        </div>
    );
};

