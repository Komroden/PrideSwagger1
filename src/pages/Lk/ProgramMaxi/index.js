import React from 'react';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkBalanceItemsMini} from "../../../components/Lk/BalanceItemsMini";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {ProgramMaxiMain} from "../../../components/Lk/ProgramMaxiMain";

export const ProgramMaxi = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Программа Макси Трейд 1'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkBalanceItemsMini/>
                        <ProgramMaxiMain title={'Макси Трейд 1'} percent={1.05} minValue={100} maxValue={999}/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

