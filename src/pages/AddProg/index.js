import React from 'react';
import {LkLeftMenu} from "../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../components/Lk/LkHomeMain/LkHomeHeader";

import {LkHomeRightSlidebar} from "../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {LkAddProgMain} from "../../components/Lk/LkAddProgMain";
import {LkBalanceItemsMini} from "../../components/Lk/BalanceItemsMini";

export const AddProg = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Добавление программы'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                    <LkBalanceItemsMini/>
                    <LkAddProgMain/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

