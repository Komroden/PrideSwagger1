import React, {useEffect, useState} from 'react';

export const useTimerUp = () => {

    const [seconds, setSeconds] = useState(0);
    const [minute, setMinute] = useState(0);
    const [price, setPrice] = useState(0);

    let interval;
    const startTimer = () => {
        const countDate=new Date().getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance =  now-countDate;

            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);
            const price = Math.floor(distance /5000);
                setMinute(minutes);
                setSeconds(seconds);
                setPrice(price*25)


        });
    };
    useEffect(() => {
        startTimer();
    },[]);
    return (
        {seconds,minute,price}
    );
};