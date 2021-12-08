import React from 'react';
import Fade from '@mui/material/Fade';
import {useSelector} from "react-redux";
import {useInputV} from "../../../../../hooks/useInputV";
export const CodeInput = ({mode,setCode,url,title,margin}) => {
    const { auth } = useSelector((state) => state);
    const codeInput=useInputV('');
    const sendCode=(e)=>{
        e.preventDefault()
        fetch(url,{
            method:'POST',
            headers:{
                'accept': 'application/octet-stream',
                'Authorization':`Bearer ${auth.token}`
            },
            body:'',
        })
            .then(res=>console.log(res))
            .catch(error=>console.log(error))
    }
    return (
        <Fade in={mode} unmountOnExit>
            <div className="violet_box" style={{marginTop:margin?'50px':''}}>
                <div className="violet_box_title">{'Код подтверждения '+title}</div>
                <div className="violet_box_row">
                    <input type="text" className="dark_input" onBlur={e => codeInput.onBlur(e)} onChange={e=> {
                        codeInput.onChange(e)
                        setCode(e.target.value)
                    }} value={codeInput.value} />
                    <button onClick={sendCode} className="give_code">Получить код</button>
                </div>
            </div>
        </Fade>

    );
};

