
import {useSelector} from "react-redux";

export const useFetchPayStringParametrs = (url,method,setOpenSnack,textSuccess) => {
    const { auth } = useSelector((state) => state);

    const handleFetch=()=>{
        fetch(url, {
            method: method,
            headers: {
                'accept': 'application/octet-stream',
                'Authorization': `Bearer ${auth.token}`
            }
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setOpenSnack({
                        status:true,
                        text:textSuccess,
                        color:'success'
                    })
                    return
                }
                if (res.status === 422) {
                    let error = new Error('Недостаточно средств');
                    error.response = res;
                    throw error
                }else {
                    let error = new Error('Ошибка');
                    error.response = res;
                    throw error
                }

            })
            .catch(error=>setOpenSnack({
                status: true,
                text: error.message,
                color: 'error'
            }))
    }
    return {handleFetch}
};

