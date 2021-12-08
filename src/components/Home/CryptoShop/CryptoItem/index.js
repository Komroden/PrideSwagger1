import React from 'react';

export const CryptoItem = ({name,market,price,volume24,supply,change,image}) => {
    return (
        <tr>
            <td className="name_t">
								<span className="logo_t">
						    		<img src={image} alt=""/>
						    	</span>
                <span className="name_tt">{name}</span>
            </td>
            <td className="market_t">
                ${market}
            </td>
            <td className="price_t">${price}</td>
            <td className="volume_t">${volume24}</td>
            <td className="supply_t">{supply}</td>
            <td className={change<0?"change_t red_t":'change_t green_t'}>{change}%</td>
            <td className="actions_t">
                <a href="/" className="link_info">Coin Info</a>
            </td>
        </tr>
    );
};

