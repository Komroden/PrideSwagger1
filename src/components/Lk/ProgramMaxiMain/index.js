import React from 'react';
import './style.scss';
import {ProgramCalculator} from "../ProgramCalculator";
import {DealItem} from "../DealItem";
import {Line} from "../MainTitle/GreyLine";
export const ProgramMaxiMain = ({title,percent,minValue,maxValue}) => {
    return (
        <>
            <Line/>

            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">программа <span className="red_big">{title}</span></span>
            </div>
            <div className="program_img">
                <img src="/images/program_img.jpg" alt=""/>
            </div>
            <ProgramCalculator percent={percent} minValue={minValue} toBeforeRange={maxValue}/>
            <div className={"deal_row"}>
            <DealItem numberDeal={'135'} minValue={minValue} percent={percent}/>
            </div>
        </>
    );
};

