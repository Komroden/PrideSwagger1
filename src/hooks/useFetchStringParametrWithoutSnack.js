import {useSelector} from "react-redux";

export const useFetchStringParametrWithoutSnack = (url,method) => {
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
                    return
                } else {
                    let error = new Error('Ошибка');
                    error.response = res;
                    throw error
                }

            })
            .catch(error=>console.log(error))
    }
    return {handleFetch}
};