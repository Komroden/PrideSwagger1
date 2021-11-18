import React, { useState} from 'react';
import './style.scss';
import {CountryItem} from "./CountryItem";

export const ContactTabs = () => {
    const [country,setCountry]=useState('Greece');

    return (
        <div className="contact_tabs">
            <div className="">
                <div className="tabs-container">
                    <ul  className="tabs containerP">

                        <li    className= "wow bounceInLeft " data-wow-duration="3s">
                            <a  onClick={()=>setCountry('Greece')}>
                                <span  className="tab_name">Greece.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('Turkey')}>
                                <span  className="tab_name">Turkey.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('Germany')}>
                                <span  className="tab_name">Germany.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('England')}>
                                <span  className="tab_name">England.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('Russia')}>
                                <span  className="tab_name">Russia.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tabs-content">
                        <CountryItem active={country==='Greece'?'active':''}
                                     address={'Athens'}
                                     city={'Greece'}
                                     email={'test@test.ru'}
                                     fullAddress={'test'}
                                     mapsUrl={'Greece+Athens'}
                                     tel={'89556785674'}/>
                        <CountryItem active={country==='Turkey'?'active':''}
                                     address={'Antalya'}
                                     city={'Turkey'}
                                     email={'test@test.ru'}
                                     fullAddress={'test'}
                                     mapsUrl={'Turkey+Antalya'}
                                     tel={'89556785674'}/>
                        <CountryItem active={country==='Germany'?'active':''}
                                     address={'Berlin'}
                                     city={'Germany'}
                                     email={'test@test.ru'}
                                     fullAddress={'test'}
                                     mapsUrl={'Germany+Berlin'}
                                     tel={'89556785674'}/>
                        <CountryItem active={country==='England'?'active':''}
                                     address={'London'}
                                     city={'England'}
                                     email={'test@test.ru'}
                                     fullAddress={'test'}
                                     mapsUrl={'England+London'}
                                     tel={'89556785674'}/>
                        <CountryItem active={country==='Russia'?'active':''}
                                     address={'Moscow'}
                                     city={'Russia'}
                                     email={'test@test.ru'}
                                     fullAddress={'test'}
                                     mapsUrl={'Russia+Moscow'}
                                     tel={'89556785674'}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

