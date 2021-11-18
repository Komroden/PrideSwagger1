import React from 'react';
import './style.scss';
import {useSelector} from "react-redux";



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
                    <h2 className={cryptoData.value[1].name===''?'hidden_text':'hidden__none'}>Не доступно</h2>
                    <table className="table_cripto">
                        <tbody style={{opacity:cryptoData.value[1].name!==''?'1':'0.3'}}>
                        <tr className="header_table">
                            <th className="name_t">Coin Name</th>
                            <th className="market_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"/>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"/>
						    	</span>
                                <span>Market Cap</span>
                            </th>
                            <th className="price_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"/>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"/>
						    	</span>
                                <span>Price</span>
                            </th>

                            <th className="volume_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"/>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"/>
						    	</span>
                                <span>Volume (24hr)</span>
                            </th>

                            <th className="supply_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"/>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"/>
						    	</span>
                                <span>Supply</span>
                            </th>

                            <th className="change_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"/>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"/>
						    	</span>
                                <span>Change</span>
                            </th>

                            <th className="actions_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"/>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"/>
						    	</span>
                                <span>Actions</span>
                            </th>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/btc.png" alt=""/>
						    	</span>
                                <span className="name_tt">{cryptoData.value[1].name}</span>
                            </td>
                            <td className="market_t">
                                ${cryptoData.value[1].quote.USD.market_cap.toFixed(2)}
                            </td>
                            <td className="price_t">${cryptoData.value[1].quote.USD.price.toFixed(2)}</td>
                            <td className="volume_t">${cryptoData.value[1].quote.USD.volume_24h.toFixed(2)}</td>
                            <td className="supply_t">{cryptoData.value[1].total_supply.toFixed(2)}</td>
                            <td className={cryptoData.value[1].quote.USD.percent_change_1h<0?"change_t red_t":"change_t green_t"}>{cryptoData.value[1].quote.USD.percent_change_1h.toFixed(2)}%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/c3.png" alt=""/>
						    	</span>
                                <span className="name_tt">{cryptoData.value[2].name}</span>
                            </td>
                            <td className="market_t">
                                ${cryptoData.value[2].quote.USD.market_cap.toFixed(2)}
                            </td>
                            <td className="price_t">${cryptoData.value[2].quote.USD.price.toFixed(2)}</td>
                            <td className="volume_t">${cryptoData.value[2].quote.USD.volume_24h.toFixed(2)}</td>
                            <td className="supply_t">{cryptoData.value[2].total_supply.toFixed(2)}</td>
                            <td className={cryptoData.value[2].quote.USD.percent_change_1h<0?"change_t red_t":"change_t green_t"}>{cryptoData.value[2].quote.USD.percent_change_1h.toFixed(2)}%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/c4.png" alt=""/>
						    	</span>
                                <span className="name_tt">{cryptoData.value[825].name}</span>
                            </td>
                            <td className="market_t">
                                ${cryptoData.value[825].quote.USD.market_cap.toFixed(2)}
                            </td>
                            <td className="price_t">${cryptoData.value[825].quote.USD.price.toFixed(2)}</td>
                            <td className="volume_t">${cryptoData.value[825].quote.USD.volume_24h.toFixed(2)}</td>
                            <td className="supply_t">{cryptoData.value[825].total_supply.toFixed(2)}</td>
                            <td className={cryptoData.value[825].quote.USD.percent_change_1h<0?"change_t red_t":"change_t green_t"}>{cryptoData.value[825].quote.USD.percent_change_1h.toFixed(2)}%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/c2.png" alt=""/>
						    	</span>
                                <span className="name_tt">{cryptoData.value[1027].name}</span>
                            </td>
                            <td className="market_t">
                                ${cryptoData.value[1027].quote.USD.market_cap.toFixed(2)}
                            </td>
                            <td className="price_t">${cryptoData.value[1027].quote.USD.price.toFixed(2)}</td>
                            <td className="volume_t">${cryptoData.value[1027].quote.USD.volume_24h.toFixed(2)}</td>
                            <td className="supply_t">{cryptoData.value[1027].total_supply.toFixed(2)}</td>
                            <td className={cryptoData.value[1027].quote.USD.percent_change_1h<0?"change_t red_t":"change_t green_t"}>{cryptoData.value[1027].quote.USD.percent_change_1h.toFixed(2)}%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/btc.png" alt=""/>
						    	</span>
                                <span className="name_tt">{cryptoData.value[1831].name}</span>
                            </td>
                            <td className="market_t">
                                ${cryptoData.value[1831].quote.USD.market_cap.toFixed(2)}
                            </td>
                            <td className="price_t">${cryptoData.value[1831].quote.USD.price.toFixed(2)}</td>
                            <td className="volume_t">${cryptoData.value[1831].quote.USD.volume_24h.toFixed(2)}</td>
                            <td className="supply_t">{cryptoData.value[1831].total_supply.toFixed(2)}</td>
                            <td className={cryptoData.value[1831].quote.USD.percent_change_1h<0?"change_t red_t":"change_t green_t"}>{cryptoData.value[1831].quote.USD.percent_change_1h.toFixed(2)}%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/c5.png" alt=""/>
						    	</span>
                                <span className="name_tt">{cryptoData.value[1958].name}</span>
                            </td>
                            <td className="market_t">
                                ${cryptoData.value[1958].quote.USD.market_cap.toFixed(2)}
                            </td>
                            <td className="price_t">${cryptoData.value[1958].quote.USD.price.toFixed(2)}</td>
                            <td className="volume_t">${cryptoData.value[1958].quote.USD.volume_24h.toFixed(2)}</td>
                            <td className="supply_t">{cryptoData.value[1958].total_supply.toFixed(2)}</td>
                            <td className={cryptoData.value[1958].quote.USD.percent_change_1h<0?"change_t red_t":"change_t green_t"}>{cryptoData.value[1958].quote.USD.percent_change_1h.toFixed(2)}%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

