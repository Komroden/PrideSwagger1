import React from 'react';
import SliderCaptcha from '@slider-captcha/react';

export const ReviewForm = () => {
    const handlePost=(e)=>{
        e.preventDefault()

    }
    function verifiedCallback(token) {
        console.log('Captcha token: ' + token);
    }
    // только авторизованный
    return (
        <div className="contact_block wow bounceInUp contact_blockFormReview" data-wow-duration="3s">
            <div className="containerP">
                <div className="pride_title pride_titleFormReview">
                    Оставить отзыв
                </div>
                <div className="form_cont">
                    <form>
                        <input type="text" placeholder="Name" className="inputp"/>
                        {/*<input type="text" placeholder="Email Address" className="inputp"/>*/}
                        {/*<input type="text" placeholder="Phone" className="inputp"/>*/}
                        <input type="text" placeholder="Subject" className="inputp"/>
                        <textarea placeholder="Message" className="inputp"/>
                        <button onClick={handlePost} className="subm_form">
                            Отправить сообщение
                        </button>
                        <SliderCaptcha
                            create="https://example.com/captcha/create"
                            verify="https://example.com/captcha/verify"
                            callback={verifiedCallback}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

