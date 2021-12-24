
import {useSelector} from "react-redux";

export const useFetchHandlePostWithBody = (url,payload,resetFunc,setOpenSnack,method) => {
    const { auth } = useSelector((state) => state);

    const handlePost=()=>{
        setOpenSnack({
            status:false,
            text:'',
            color:'error'
        })

        fetch(url,{
            method: method,
            body:JSON.stringify(payload),
            headers: {'Content-Type': 'application/json',
                "Accept": "application/json",
                'Authorization':`Bearer ${auth.token}`}
        })


            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    setOpenSnack({
                        status:true,
                        text:'Отправлено',
                        color:'success'
                    })
                    resetFunc()
                    return
                }
                if (res.status === 400 ){
                    let error = new Error('Некорректные данные');
                    error.response = res;
                    throw error
                }else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .catch(error=> {
                resetFunc()
                setOpenSnack({
                    status: true,
                    text: error.message,
                    color: 'error'
                })
            });

    }
    return {handlePost}

};

