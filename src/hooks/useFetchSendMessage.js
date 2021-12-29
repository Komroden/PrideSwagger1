import {useSelector} from "react-redux";

export const useFetchSendMessage = (url,message,setMessage,setSend,send) => {
    const { auth } = useSelector((state) => state);

    const handleFetch=()=>{
        fetch(url,{
            method:'POST',
            body:JSON.stringify(message),
            headers:{
                'Authorization':`Bearer ${auth.token}`,
                'accept': 'application/octet-stream',
                'Content-Type': 'application/json'}
        })
            .then(()=> {
                setMessage('')
                setSend(!send)
            })
    }
    return {handleFetch}
};