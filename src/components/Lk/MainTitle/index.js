import React from 'react';
import {Line} from "./GreyLine";

export const MainTitle = ({title}) => {
    return (
        <>
            <Line/>
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">{title}</span>
            </div>
        </>
    );
};

