import React from 'react';
import {useNumberSpaces} from "../../../../hooks/useNumberSpaces";

export const CryptoItem = ({name,market,price,volume24,supply,change,image}) => {
    const marketWithSpaces=useNumberSpaces(market)
    const priceWithSpaces=useNumberSpaces(price)
    const volume24WithSpaces=useNumberSpaces(volume24)
    const supplyWithSpaces=useNumberSpaces(supply)
    return (
        <tr>
            <td className="name_t">
								<span className="logo_t">
						    		<img src={image} alt=""/>
						    	</span>
                <span className="name_tt">{name}</span>
            </td>
            <td className="market_t">
                ${marketWithSpaces}
            </td>
            <td className="price_t">${priceWithSpaces}</td>
            <td className="volume_t">${volume24WithSpaces}</td>
            <td className="supply_t">{supplyWithSpaces}</td>
            <td className={change<0?"change_t red_t":'change_t green_t'}>{change>0?'+'+change:change}%</td>
        </tr>
    );
};

