import React from 'react';
import './style.scss';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkMainHeaderTop} from "../../../components/Lk/LkHomeMain/LkMainHeaderTop";
import {LkHomeMain} from "../../../components/Lk/LkHomeMain";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";




export const LkHome = () => {





    return (
        <div className='bodyLk full_content bg_fullcontent'>
<LkLeftMenu/>
      <div className='main_content'>
<LkHomeHeader title={'Личный кабинет'}/>
      <div className='main_content_row'>
          <div className="main_content_central">
              <LkMainHeaderTop/>
              <LkHomeMain/>
          </div>
          <LkHomeRightSlidebar/>
      </div>
      </div>
        </div>
    );
};

