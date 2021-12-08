import React from 'react';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";

import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {StructureMain} from "../../../components/Lk/StructureMain";

export const Structure = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Структура рефералов'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <StructureMain/>
                    </div>

                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

