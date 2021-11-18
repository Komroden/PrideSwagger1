import React from 'react';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkBalanceItemsMini} from "../../../components/Lk/BalanceItemsMini";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {OfferMain} from "../../../components/Lk/OfferMain";

export const Offer = () => {
    return (
            <div className='bodyLk full_content bg_fullcontent'>
                <LkLeftMenu/>
                <div className='main_content'>
                    <LkHomeHeader title={'Оферта'}/>
                    <div className='main_content_row'>
                        <div className="main_content_central">
                            <LkBalanceItemsMini/>
                             <OfferMain/>
                        </div>
                        <LkHomeRightSlidebar/>
                    </div>
                </div>
            </div>

    );
};

