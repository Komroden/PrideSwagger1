
import {useSelector} from "react-redux";

export const usePopolnit = () => {
    const { auth } = useSelector((state) => state);
    const handlePopol =(e)=>{
        e.preventDefault()
        fetch('http://lk.pride.kb-techno.ru/api/CryptoFinance/coinbase-charge-create',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => res.json())
            .then((body)=> {
                    window.location.replace(body)
                }
            )
            .catch((e) => {
                console.log(e.message);
            });
    }
    return {handlePopol}


};

