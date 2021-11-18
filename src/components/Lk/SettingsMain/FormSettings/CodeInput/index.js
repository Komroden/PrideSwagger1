import React from 'react';

export const CodeInput = () => {
    const sendCode=(e)=>{
        e.preventDefault()
        // sendCode method
    }
    return (
            <div className="violet_box">
                <div className="violet_box_title">Код подтверждения</div>
                <div className="violet_box_row">
                    <input type="text" className="dark_input" />
                    <button onClick={sendCode} className="give_code">Получить код</button>
                </div>
            </div>

    );
};

