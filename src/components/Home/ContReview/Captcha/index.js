import React, {useState} from 'react';
import {Vertify} from "@alex_xu/react-slider-vertify";
import './style.scss';

export const Captcha = ({setVisible,visible,setSuccess}) => {
    const [fail,setFail]=useState(false);
    const onSuccess=()=>{
        setInterval(()=>{
            setVisible(false)
            setSuccess(true)
        },1000)

    }
    const onFail=()=>{
        setFail(true)
        setInterval(()=>{
            setFail(false)
        },1000)

    }
    return (
        <div className='modal__wrapper'>
            <div className={fail?'modal__text captcha_wrapper captcha_fail':'modal__text captcha_wrapper'}>

                <Vertify
                    width={320}
                    height={160}
                    visible={visible}
                    onSuccess={() => onSuccess()}
                    onFail={() => onFail()}
                />
            </div>
            </div>
    );
};

