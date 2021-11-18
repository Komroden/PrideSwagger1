import React from 'react';
import {AutoCalculator} from "./AutoCalculator";
import './style.scss';
import {AutoDealItem} from "./AutoDealItem";
import {Line} from "../MainTitle/GreyLine";
export const ProgramAutoMain = () => {
    return (
        <>
            <Line/>

            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">программа <span className="red_big">Автомобильная</span></span>

            </div>
            <div className="program_img">
                <img src="/images/program3.png" alt=""/>
            </div>
          <AutoCalculator toBeforeRange={15000000} toFromRange={300000} minimalPrice={300000} />
            <div className="deal_row deal_row_green">
                <AutoDealItem number={135} value={215679} percent={25} url={"/images/imgb.png"}/>
                <AutoDealItem number={135} value={900000} percent={50} url={"/images/imgb.png"}/>
            </div>
        </>
    );
};

