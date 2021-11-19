import React from 'react';
import './style.scss';


import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {LkHomeMainBalanceItem} from "./LkHomeMainBalanceItem";
import {LkHomeMainDetailItem} from "./LkHomeMainDetailItem";
import {UserBlock} from "../UserBlock";


export const LkHomeMain = () => {
    const {push}=useHistory()

    const handlePushTransactions=() => {
        push('/transactions')
    }
    const { userData } = useSelector((state) => state);
    return (
        <>
            <div className="balance_cost">
                <div className="balance_cost_title">Балансы счетов:</div>
                <div className="balance_cost_row">
                    <LkHomeMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={'0.356 BTC'} allValue={'2 658 USD'} dayValue={'1 BTC - 8,837.88 USD'} allDayValue={'+ 236$'}/>
                    <LkHomeMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={'0.25 ETH'} allValue={'248 USD'} dayValue={'1 ETH - 987 USD'} allDayValue={'- 31$'}/>
                    <LkHomeMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={'25 LTC'} allValue={'5 361 USD'} dayValue={'1 LTC - 265 USD'} allDayValue={'+ 0,6$'}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={'1 356 USDT'} allValue={'1 356 USD'} dayValue={'1 USDT - 1 USD'} allDayValue={'+ 0.001$'}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={'1 356 USDT'} allValue={'1 356 USD'} dayValue={'1 USDT - 1 USD'} allDayValue={'+ 0.001$'}/>
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={'125 TRX'} allValue={'248 USD'} dayValue={'1 TRX - 87 USD'} allDayValue={'- 31$'}/>
                    {/*<div className="balance_cost_item balance_cost_item_plus ">*/}
                    {/*    <a href="#">*/}
                    {/*        <span className="dark_plus">+</span>*/}
                    {/*        <span className="balance_cost_item_plus_text">Добавить кошелек</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
            <UserBlock/>
            <div className="home2link">
                <div className="home2link__logo">
                    <img src="/images/homelogo.png" alt=""/>
                </div>
                <div className="home2link__text">ваша реферальная ссылка:</div>
                <div className="home2link__form">
                    <input type="text" value="http://www.pride.io/ref_000001123"/>
                    <button>
                        <img src="/images/copyimg.png" alt=""/>
                    </button>
                </div>
            </div>
            <div className="detail_cost">
                <div className="earned">
                    <div className="detail_cost_title">
                        <img src="/images/earned.png" alt=""/>
                            <span>Заработано</span>
                    </div>
                    <div className="detail_cost_row">
                        <LkHomeMainDetailItem logo='/images/e1.png' img='/images/i1.png' currency='Bitcoin' allValue='$4,604.00 USD' value='0.1234 BTC' />
                        <LkHomeMainDetailItem logo='/images/e2.png' img='/images/i1.png' currency='Etherium' allValue='$1,294.89 USD' value='2.1234 ETH'/>
                        <LkHomeMainDetailItem logo='/images/e3.png' img='/images/i1.png' currency='Tether' allValue='$2,604.00 USD' value='2.1234 ETH'/>
                        <LkHomeMainDetailItem logo='/images/e4.png' img='/images/i1.png' currency='Tron' allValue='$1,294.89 USD' value='0.1234 TRX'/>
                        <LkHomeMainDetailItem logo='/images/e5.png' img='/images/i1.png' currency='Litecoin' allValue='$1,294.89 USD' value='2.1234 LTC'/>
                    </div>
                </div>
                <div className="withdrawn">
                    <div className="detail_cost_title">
                        <img src="/images/withdraft.png" alt=""/>
                            <span>Выведено</span>
                    </div>
                    <div className="detail_cost_row">
                        <LkHomeMainDetailItem logo='/images/e1.png' img='/images/i2.png' currency='Bitcoin' allValue='$4,604.00 USD' value='0.1234 BTC' />
                        <LkHomeMainDetailItem logo='/images/e2.png' img='/images/i2.png' currency='Etherium' allValue='$1,294.89 USD' value='2.1234 ETH'/>
                        <LkHomeMainDetailItem logo='/images/e3.png' img='/images/i2.png' currency='Tether' allValue='$2,604.00 USD' value='2.1234 ETH'/>
                        <LkHomeMainDetailItem logo='/images/e4.png' img='/images/i2.png' currency='Tron' allValue='$1,294.89 USD' value='0.1234 TRX'/>
                        <LkHomeMainDetailItem logo='/images/e5.png' img='/images/i2.png' currency='Litecoin' allValue='$1,294.89 USD' value='2.1234 LTC'/>
                    </div>
                </div>
            </div>
            <div className="voice">
                <div className="detail_cost_title">
                    <img src="/images/voice.png" alt=""/>
                        <span>Голосование</span>
                </div>
                <div className="voice_row">
                    <div className="voice_left">
                        <div className="voice_title">В какую криптовалюту <br/>стоит вложиться?</div>
                        <ul>
                            <li className="active">
                                <div className="voice_numb_li">1</div>
                                <div className="voice_text_li">
                                    Bitcoin
                                </div>
                            </li>
                            <li>
                                <div className="voice_numb_li">2</div>
                                <div className="voice_text_li">
                                    Etherium
                                </div>
                            </li>
                            <li>
                                <div className="voice_numb_li">3</div>
                                <div className="voice_text_li">
                                    Tether
                                </div>
                            </li>
                            <li>
                                <div className="voice_numb_li">4</div>
                                <div className="voice_text_li">
                                    litecoin
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="voice_right">
                        <div className="voice_right_item">
                            <div className="voice_right_top">
                                <div className="voice_right_title">BITCOIN</div>
                                <div className="voice_right_percent">70%</div>
                            </div>
                            <div className="voice_right_line">
                                <div className="progressbar" style={{width: '70%'}}></div>
                            </div>
                        </div>
                        <div className="voice_right_item">
                            <div className="voice_right_top">
                                <div className="voice_right_title">ETHERIUM</div>
                                <div className="voice_right_percent">90%</div>
                            </div>
                            <div className="voice_right_line">
                                <div className="progressbar pink_color" style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div className="voice_right_item">
                            <div className="voice_right_top">
                                <div className="voice_right_title">Tether</div>
                                <div className="voice_right_percent">60%</div>
                            </div>
                            <div className="voice_right_line">
                                <div className="progressbar fiolet_color" style={{width: '60%'}}></div>
                            </div>
                        </div>
                        <div className="voice_right_item">
                            <div className="voice_right_top">
                                <div className="voice_right_title">Litecoin</div>
                                <div className="voice_right_percent">50%</div>
                            </div>
                            <div className="voice_right_line">
                                <div className="progressbar blue_color" style={{width: '50%'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="voice_pagination">
                        <ul>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

