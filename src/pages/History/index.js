import React from 'react';
import {LkLeftMenu} from "../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkHomeRightSlidebar} from "../../components/Lk/LkHomeMain/LkHomeRightSlidebar";

import {LkBalanceItemsMini} from "../../components/Lk/BalanceItemsMini";
import {LkHistoryMain} from "../../components/Lk/LkHistoryMain";

export const History = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'История операций'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkBalanceItemsMini/>
                        <LkHistoryMain/>
                    </div>
                        <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

