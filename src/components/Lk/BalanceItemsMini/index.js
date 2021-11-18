import React from 'react';
import {LkAddProgMainBalanceItem} from "../LkAddProgMain/LkAddProgMainBalanceItem";

export const LkBalanceItemsMini = () => {
    return (
        <div className="balance_cost balance_for_every_page">
            <div className="balance_cost_row">
                <LkAddProgMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={'0.356 BTC'} allValue={'2 658 USD'}/>
                <LkAddProgMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={'0.25 ETH'} allValue={'248 USD'}/>
                <LkAddProgMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={'25 LTC'} allValue={'5 361 USD'}/>
                <LkAddProgMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={'1 356 USDT'} allValue={'1 356 USD'}/>
                <LkAddProgMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={'125 TRX'} allValue={'248 USD'}/>
                <div className="balance_cost_item balance_cost_item_plus ">
                    <a href="#">
                        <span className="dark_plus">+</span>
                        <span className="balance_cost_item_plus_text">Добавить кошелек</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

