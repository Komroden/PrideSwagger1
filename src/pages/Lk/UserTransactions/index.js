import React from 'react';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {LkTransactionsMain} from "../../../components/Lk/LkTransactionsMain";
import {LkMainHeaderTop} from "../../../components/Lk/LkHomeMain/LkMainHeaderTop";


export const LkUserTransactions = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Личный кабинет'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkMainHeaderTop/>
                        <LkTransactionsMain/>
                    </div>

                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

