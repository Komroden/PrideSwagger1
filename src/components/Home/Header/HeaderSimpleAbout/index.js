import React from 'react';
import {useHistory} from "react-router";
export const HeaderSimpleAbout = (prop) => {

    const {push}=useHistory()
    const handlePushHome=(e) => {
        e.preventDefault()
        push('/')
    }
    return (
        <div className="header_simple">
            <div className="containerP">
                <div className="simple_left">
                    <div className="breadcrumbs">
                        <ul>
                            <li>
                                <a href={'/'} onClick={handlePushHome}>Главная</a>
                            </li>
                            <li>{prop.bread}</li>
                        </ul>
                    </div>
                    <h1 className="regg_title">{prop.title}</h1>
                    <div className="pride_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </div>
                </div>
                <div className="simple_right">
                    <img src="/images/simple_header.png" alt="header"/>
                </div>
            </div>
        </div>
    );
};

