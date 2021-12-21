import React from 'react';
import {LkAddProgMainBalanceItem} from "../LkAddProgMain/LkAddProgMainBalanceItem";
import {useSelector} from "react-redux";

export const LkBalanceItemsMini = () => {
    const {allInfoUser} = useSelector((state) => state);
    return (
        <div className="balance_cost balance_for_every_page">
            <div className="balance_cost_row">
                <LkAddProgMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={allInfoUser.value.balanceBitcoin.toFixed(0)} />
                <LkAddProgMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={allInfoUser.value.balanceEthereum.toFixed(0)} />
                <LkAddProgMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LITE'} value={allInfoUser.value.balanceLitecoin.toFixed(0)} />
                <LkAddProgMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'USDC'} text={'USDC'} value={allInfoUser.value.balanceUsdc.toFixed(0)} />
                {/*<div className="balance_cost_item balance_cost_item_plus ">*/}
                {/*    <a href="#">*/}
                {/*        <span className="dark_plus">+</span>*/}
                {/*        <span className="balance_cost_item_plus_text">Добавить кошелек</span>*/}
                {/*    </a>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

