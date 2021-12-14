import React from 'react';
import './style.scss';
import {useSelector} from "react-redux";
import {CryptoItem} from "./CryptoItem";
import {TableHeaders} from "./TableHeaders";



export const CryptoShop = () => {

    const { cryptoData } = useSelector((state) => state);
    // cabd83e5-a297-496a-8e1b-086d97270fe6

    return (
        <div className="cripto_shop">
            <div className="text_bg"><span>Crypto</span></div>
            <div className="containerP">
                <div className="pride_title">онлайн рынок криптовалют</div>
                <div className="cripto_table wow bounceInUp"  data-wow-duration="2s">
                    <div className="bottom_bg wow pulse" data-wow-duration="4s" data-wow-iteration="infinite"/>
                    <h2 className={!cryptoData.value?'hidden_text':'hidden__none'}>Не доступно</h2>
                    <table className="table_cripto">
                        <tbody style={{opacity:cryptoData.value?'1':'0.3'}}>
                        <tr className="header_table">
                            <TableHeaders text={'Криптовалюта'} className={'name_t'}/>
                            <TableHeaders text={'Капитализация'} className={'market_t'}/>
                            <TableHeaders text={'Цена'} className={'price_t'}/>
                            <TableHeaders text={'Объем торгов (24hr)'} className={'volume_t'}/>
                            <TableHeaders text={'Количество'} className={'supply_t'}/>
                            <TableHeaders text={'Изменение'} className={'change_t'}/>
                        </tr>
                        {cryptoData.value.map(item=><CryptoItem key={item.rank} name={item.name} image={item.icon} market={item.marketCapUsd.toFixed(0)}
                        price={item.price.toFixed(1)} volume24={item.volume24hUsd.toFixed(0)} supply={item.circulatingSupply.toFixed(1)}
                        change={item.percentChange24h.toFixed(3)}/>)}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

