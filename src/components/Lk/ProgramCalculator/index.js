import React, {useEffect, useState} from 'react';
import {ProgramCalculatorValue} from "./ProgramCalculatorValue";
import Checkbox from '@mui/material/Checkbox';
import {useDaysOnMounth} from "../../../hooks/useDaysOnMounth";
import {useCourse} from "../../../hooks/useCourse";

export const ProgramCalculator = ({percent,minValue,toBeforeRange}) => {

    const[price,setPrice]=useState(0);
    const[speed,setSpeed]=useState(1);
    const[value,setValue]=useState('BTC')
    const[totalPrice,setTotalPrice]=useState(price);
    const course=useCourse(value)
    const days=useDaysOnMounth()

    const before=((toBeforeRange/course)*0.995).toFixed(toBeforeRange/course<10?4:0)
    const from =((minValue/course)*0.995).toFixed(minValue/course<10?4:0)

    useEffect(()=>{
        if(Math.ceil(totalPrice)>Math.ceil(before))setTotalPrice(before)
        if(Math.ceil(totalPrice)<Math.ceil(from))setTotalPrice(from)
    },[totalPrice,before,from])

    return (
        <div className="blue_block">
            <form>
                <div className="form_entry_in_program">
                    <div className="form_entry_in_program_top">
                        <div className="form_entry_in_program_left">
                            <div className="form_entry_in_program_title">Выберите валюту</div>
                            <select defaultValue={'BTC'}  className="form_entry_in_program_select" placeholder={'Выберите валюту'} onChange={e=> {
                                setPrice(0)
                                setTotalPrice(0)
                                setValue(e.target.value)
                            }}>
                                <ProgramCalculatorValue name={'BTC'}/>
                                <ProgramCalculatorValue name={'ETH'}/>
                                <ProgramCalculatorValue name={'USDC'}/>
                                <ProgramCalculatorValue name={'LTC'}/>
                            </select>
                        </div>
                        <div className="form_entry_in_program_right">
                            <div className="form_entry_in_program_title">
                                Вход в программу <span>от {from} {value==='CurrenyPriceInfoT'?'USDT':value} до {before} {value==='CurrenyPriceInfoT'?'USDT':value}</span>
                            </div>
                            <div className="form_entry_in_program_right_range">
                                <div className="form_entry_in_program_right_top_range">
                                    <input type="text" name="amountInput" min={from} max={before} value={price>10?Math.ceil(price):price} readOnly
                                           />
                                    <span>{value}</span>
                                </div>
                                <div className="form_entry_in_program_right_range_input">
                                    <input type="range" name="amountRange" min={from} max={before} step={0.00001}
                                          onChange={event => {
                                              setTotalPrice(event.target.value)
                                              setPrice(event.target.value)
                                          }} defaultValue={0}/>
                                </div>
                                <div className="form_entry_in_program_right_range_bottom">
                                    <div className="form_entry_in_program_right_range_bottom_left">{from} {value==='CurrenyPriceInfoT'?'USDT':value}</div>
                                    <div className="form_entry_in_program_right_range_bottom_right">{before} {value==='CurrenyPriceInfoT'?'USDT':value}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="totalprice">
                        <input type="text"  autoFocus={true} value={totalPrice>10?Math.ceil(totalPrice):totalPrice} onChange={event => setTotalPrice(event.target.value)}  className="totalprice_input"/>
                        <span>{value==='CurrenyPriceInfoT'?'USDT':value}</span>
                    </div>
                    <div className="form_entry_in_program_center">
                        <div className="form_entry_in_program_center_price">
                            <div className="form_entry_in_program_center_titl">Цена скорости</div>
                            <div className="form_entry_in_program_center_purple">{((speed-1)*course*totalPrice*0.5/100).toFixed(3)} USD</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Общая цена</div>
                            <div className="form_entry_in_program_center_green">{((course*totalPrice*0.5/100*(speed))+(totalPrice*course)).toFixed(3)} USD</div>
                        </div>
                        <div className="form_entry_in_program_center_last">
                            <div className="form_entry_in_program_center_last_title">Ваш заработок в день</div>
                            <div className="form_entry_in_program_center_last_pr">{((course*totalPrice*percent*(1+(speed)/100)/days)-(course*totalPrice*(1+(speed)/100)/days)).toFixed(3)} USD</div>
                        </div>
                    </div>
                    <div className="form_entry_in_program_bottom">
                        <div className="form_entry_in_program_bottom_range">
                            <div className="form_entry_in_program_bottom_range_top">
                                <input type="text" name="amountInput1" min="1" max="5"  value={speed} readOnly
                                       />
                                <span>х Скорость</span>
                            </div>
                            <div className="form_entry_in_program_bottom_range_center">
                                <input type="range" name="amountRange1" min="1" max="5" defaultValue={'1'}
                                       onChange={event => setSpeed(event.target.value)}/>
                            </div>
                            <div className="form_entry_in_program_bottom_range_bottom">
                                <div className="form_entry_in_program_bottom_range_bottom_left">Обычная скорость
                                </div>
                                <div className="form_entry_in_program_bottom_range_bottom_right">5х скорость</div>
                            </div>
                            <div className="input_strax">
                            <Checkbox  defaultChecked color="success" />
                                <label >Страхование вклада</label>
                            </div>
                        </div>

                        <div className="form_entry_in_program_bottom_btn">
                            <button>Вход в программу</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

