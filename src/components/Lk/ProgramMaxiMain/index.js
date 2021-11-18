import React from 'react';
import './style.scss';
import {ProgramCalculator} from "../ProgramCalculator";
import {DealItem} from "../DealItem";
import {Line} from "../MainTitle/GreyLine";
export const ProgramMaxiMain = () => {
    return (
        <>
            <Line/>

            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">программа <span className="red_big">Макси Трейд</span></span>
            </div>
            <div className="program_img">
                <img src="/images/program_img.jpg" alt=""/>
            </div>
            <ProgramCalculator toFromRange={'500'} toBeforeRange={'15000'} totalPrice={'500000'} speedPrice={'2200'}/>
            <div className={"deal_row"}>
            <DealItem numberDeal={'135'} priceSpeed={2200}/>
            <DealItem numberDeal={'135'} priceSpeed={2200}/>
            </div>
        </>
    );
};

