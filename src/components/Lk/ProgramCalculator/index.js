import React, {useState} from 'react';
import {ProgramCalculatorValue} from "./ProgramCalculatorValue";

export const ProgramCalculator = ({toFromRange,toBeforeRange,totalPrice,speedPrice}) => {
    const[price,setPrice]=useState(toFromRange);
    const[speed,setSpeed]=useState(1);
    return (
        <div className="blue_block">
            <form>
                <div className="form_entry_in_program">
                    <div className="form_entry_in_program_top">
                        <div className="form_entry_in_program_left">
                            <div className="form_entry_in_program_title">Выберите валюту</div>
                            <select id="" className="form_entry_in_program_select">
                                <option value="">Выберите валюту</option>
                                <ProgramCalculatorValue name={'валюта 1'}/>
                                <ProgramCalculatorValue name={'валюта 2'}/>
                                <ProgramCalculatorValue name={'валюта 3'}/>
                                <ProgramCalculatorValue name={'валюта 4'}/>
                            </select>
                        </div>
                        <div className="form_entry_in_program_right">
                            <div className="form_entry_in_program_title">
                                Вход в программу <span>от {toFromRange}  рублей до {toBeforeRange} рублей</span>
                            </div>
                            <div className="form_entry_in_program_right_range">
                                <div className="form_entry_in_program_right_top_range">
                                    <input type="text" name="amountInput" min={toFromRange} max={toBeforeRange} value={price}

                                           />
                                    <span>Руб.</span>
                                </div>
                                <div className="form_entry_in_program_right_range_input">
                                    <input type="range" name="amountRange" min={toFromRange} max={toBeforeRange}
                                          onChange={event => setPrice(event.target.value)}/>
                                </div>
                                <div className="form_entry_in_program_right_range_bottom">
                                    <div className="form_entry_in_program_right_range_bottom_left">{toFromRange} Руб.</div>
                                    <div className="form_entry_in_program_right_range_bottom_right">{toBeforeRange} Руб.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="totalprice">
                        <input type="text" value={totalPrice} className="totalprice_input"/>
                        <span>Рублей</span>
                    </div>
                    <div className="form_entry_in_program_center">
                        <div className="form_entry_in_program_center_price">
                            <div className="form_entry_in_program_center_titl">Цена скорости</div>
                            <div className="form_entry_in_program_center_purple">{speedPrice} Руб.</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Общая цена</div>
                            <div className="form_entry_in_program_center_green">{speed*speedPrice} Руб.</div>
                        </div>
                        <div className="form_entry_in_program_center_last">
                            <div className="form_entry_in_program_center_last_title">Ваш заработок в день</div>
                            <div className="form_entry_in_program_center_last_pr">700.00 Руб.</div>
                        </div>
                    </div>
                    <div className="form_entry_in_program_bottom">
                        <div className="form_entry_in_program_bottom_range">
                            <div className="form_entry_in_program_bottom_range_top">
                                <input type="text" name="amountInput1" min="1" max="10" value={speed}
                                       />
                                <span>х Скорость</span>
                            </div>
                            <div className="form_entry_in_program_bottom_range_center">
                                <input type="range" name="amountRange1" min="1" max="10"
                                       onChange={event => setSpeed(event.target.value)}/>
                            </div>
                            <div className="form_entry_in_program_bottom_range_bottom">
                                <div className="form_entry_in_program_bottom_range_bottom_left">Обычная скорость
                                </div>
                                <div className="form_entry_in_program_bottom_range_bottom_right">10х скорость</div>
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

