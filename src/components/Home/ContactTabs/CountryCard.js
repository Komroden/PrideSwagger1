import React from 'react';

export const CountryCard = ({setCountry,country,city,address}) => {
    return (
        <li    className= "wow bounceInLeft " data-wow-duration="3s">
                            <span className='countryTabs_link'  onClick={()=>setCountry(address)}>
                                <span  className="tab_name">{country}</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">{city}</span>
				      			<span className="tab_adres">{address}</span>
				      		</span>
				      	</span>
                            </span>
        </li>
    );
};

