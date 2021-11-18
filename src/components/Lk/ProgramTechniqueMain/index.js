import React from 'react';
import {TechniqueBlock} from "./TechniqueBlock";
import {AutoDealItem} from "../ProgramAutoMain/AutoDealItem";
import {Line} from "../MainTitle/GreyLine";
export const ProgramTechniqueMain = () => {
    return (
        <>
            <Line/>

            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">программа <span className="red_big">техника</span></span>
            </div>
                <div className="program_img">
                    <img src="/images/img_blue2.png" alt=""/>
                </div>
            <TechniqueBlock toFromRange={'50000'} toBeforeRange={'500000'} totalPrice={100000} initialPercent={50} minPrice={50000} rangeProgram={40}/>
            <div className="deal_row deal_row_green deal_row_blue">
            <AutoDealItem number={135} value={27500} percent={25} url={'/images/img_blue.png'}/>
            <AutoDealItem number={135} value={55000} percent={50} url={'/images/img_blue.png'}/>
            </div>
        </>
    );
};

