import  {useEffect, useState} from 'react';

export const useTimerDeal = (value,profitPerDay,speed) => {
    const [seconds, setSeconds] = useState(0);
    const [minute, setMinute] = useState(0);
    const [price, setPrice] = useState(0);
    const [hours, setHours] = useState(0);
    const [day, setDays] = useState(0);
// eslint-disable-next-line no-unused-vars
    let interval;
    const startTimer = () => {
        const countDate=new Date().getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance =  now-countDate;

            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);
            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const price = Math.floor(value+distance /1000*speed);
            setMinute(minutes);
            setSeconds(seconds);
            setPrice((price*profitPerDay/86400).toFixed(5))
            setDays(days);
            setHours(hours);


        });
    };
    useEffect(() => {
        startTimer();
        return ()=>{
            clearTimeout(interval)
        }
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        {seconds,minute,price,day,hours}
    );
};

