import React from 'react';
import {LkLeftMenu} from "../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../components/Lk/LkHomeMain/LkHomeHeader";

import {LkHomeRightSlidebar} from "../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {LkGuestMain} from "../../components/Lk/LkGuestMain";

export const Guest = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Гости'}/>
                <div className='main_content_row'>
                    <LkGuestMain/>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

