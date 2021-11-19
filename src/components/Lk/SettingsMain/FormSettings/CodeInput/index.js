import React from 'react';
import Fade from '@mui/material/Fade';
export const CodeInput = ({mode}) => {
    const sendCode=(e)=>{
        e.preventDefault()
        // sendCode method
    }
    return (
        <Fade in={!mode} unmountOnExit>
            <div className="violet_box">
                <div className="violet_box_title">Код подтверждения</div>
                <div className="violet_box_row">
                    <input type="text" className="dark_input" />
                    <button onClick={sendCode} className="give_code">Получить код</button>
                </div>
            </div>
        </Fade>

    );
};

