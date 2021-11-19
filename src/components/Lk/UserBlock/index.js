import React from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";

export const UserBlock = () => {
    const {push}=useHistory()
    const handlePushUser=() => {
        push('/user')
    }
    const { auth,userData,allInfoUser } = useSelector((state) => state);
    return (
        <div className="user_main_block">
            <div className="user_main_block_logo">
                <img src="/images/user.png" alt=""/>
            </div>
            <div className="user_main_block_info">
                <div className="user_main_block_info_top">
                    <div className="user_main_block_years">27 <span>лет</span></div>
                    <div className={allInfoUser.value.isVerified?"user_main_block_verif":"user_main_block_verif no_verif"}>
                        <img src={allInfoUser.value.isVerified?"/images/verif.png":"/images/noVerif.png"} alt=""/>
                        <span>Верефикация <br/>{allInfoUser.value.isVerified?'пройдена':'не пройдена'}</span>
                    </div>
                </div>
                <div className="user_main_block_name">{userData.value.userInfo?userData.value.userInfo.fullName:'User'}</div>
                <a href={allInfoUser.value.email?allInfoUser.value.email:'#'} className="user_main_block_info_mail">
                    <img src="/images/email.png" alt=""/>
                    <span>{allInfoUser.value.email?allInfoUser.value.email:'none'}</span>
                </a>
            </div>
            <div className="user_main_block_vip">
                <div className="user_main_block_vip_top">
                    <img src="/images/vip.png" alt=""/>
                </div>
                <div className="user_main_block_vip_star">
                    <img src="/images/star.png" alt=""/>
                    <img src="/images/star.png" alt=""/>
                    <img src="/images/star.png" alt=""/>
                </div>
                <div className="user_main_block_vip_text">VIP Пользователь</div>
            </div>
            <div className="user_main_block_percent">
                {/* <div class="user_main_block_percent_circle">*/}
                {/*    <span>75%</span>*/}
                {/*</div> */}
                <div className="user_main_block_percent_circle progress-pie-chart" data-percent="70">
                    <div className="ppc-progress">
                        <div className="ppc-progress-fill"/>
                    </div>
                    <div className="ppc-percents">
                        <div className="pcc-percents-wrapper">
                            <span>%</span>
                        </div>
                    </div>
                </div>
                <div className="user_main_block_percent_text">
                    <a onClick={handlePushUser}>Ваш <br/>Профиль</a>
                </div>
            </div>
            <div className="user_main_block_last">
                <div className="user_main_block_last_top">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="/images/soc1.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/soc2.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/soc3.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/soc4.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/soc5.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user_main_block_last_bottom">
                    <img src="/images/curator.png" alt=""/>
                    <div className="user_main_block_last_bottom_text">
                        <span>Куратор</span>
                        <a href="#">Волкова Анастасия</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

