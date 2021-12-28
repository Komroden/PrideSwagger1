
import {useHistory} from "react-router";

export const useRegistration = (url,payload,setToken,setLoading,setError,if422) => {
    const {push}=useHistory();

    const handlePost=()=>{
        setLoading(true)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                }
                if (res.status === 422 ){
                    let error = new Error(if422);
                    error.response = res;

                    throw error
                }else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then(function (body) {
                setToken({
                    token: body.access_token,
                    refresh_token: body.refresh_token
                });
            })
            .then(() => setLoading(false))
            .then(()=> push('/lk'))
            .catch((e) => {
                setLoading(false)
                setError(e.message);

            });

    }
    return {handlePost}

};

