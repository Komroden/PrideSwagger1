import React from 'react';
import './style.scss';
import {RefillItem} from "./RefillItem";
import {Line} from "../MainTitle/GreyLine";
export const RefillMain = ({action,actionTitle}) => {
    return (
        <>
            <Line/>
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">{action}</span>
            </div>
            <div className="popoln_row">
                <RefillItem logo={'/images/pay1.png'} title={'PAYEER'} action={actionTitle}/>
                <RefillItem logo={'/images/pay2.png'} title={'Perfect money'} action={actionTitle}/>
                <RefillItem logo={'/images/pay3.png'} title={'Bitcoin'} action={actionTitle}/>
                <RefillItem logo={'/images/pay4.png'} title={'Etherium'} action={actionTitle}/>
                <RefillItem logo={'/images/pay7.png'} title={'USD-T'} action={actionTitle}/>
            </div>
        </>
    );
};

