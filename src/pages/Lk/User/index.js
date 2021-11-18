import React from 'react';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";

import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {LkUserMain} from "../../../components/Lk/LkUserMain";
import {LkMainHeaderTop} from "../../../components/Lk/LkHomeMain/LkMainHeaderTop";

export const LkUser = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Личный кабинет'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkMainHeaderTop/>
                        <LkUserMain/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

