import React from 'react';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkBalanceItemsMini} from "../../../components/Lk/BalanceItemsMini";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {ProgramMaxiMain} from "../../../components/Lk/ProgramMaxiMain";

export const ProgramMaxiThree = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Программа Макси Трейд 3'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkBalanceItemsMini/>
                        <ProgramMaxiMain title={'Макси Трейд 3'} percent={1.15} minValue={10000} maxValue={50000}/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

