import React, {useState} from 'react';

export const AutoCalculator = ({toFromRange,toBeforeRange,minimalPrice}) => {
    const[price,setPrice]=useState('300000');
    const[percent,setPercent]=useState(25);
    const handleChange25=()=>{
        setPercent(25)
    }
    const handleChange35=()=>{
        setPercent(35)
    }
    const handleChange50=()=>{
        setPercent(50)
    }


    return (
        <div className="blue_block blue_block_green">
            <form>
                <div className="form_entry_in_program">
                    <div className="form_entry_in_program_top">
                        <div className="form_entry_in_program_left">
                            <div className="form_entry_in_program_title">Выберите взнос:</div>
                            <div className="selectt">
                                <div className="selectt__title">Первый <br/> взнос
                                </div>
                                <label onClick={handleChange25}  className="selectt__label">
                                    <input type="radio" name="first" />
                                    <span  className="selectt__item">25%</span>
                                </label>
                                <label onClick={handleChange35} className="selectt__label">
                                    <input type="radio" name="first"/>
                                    <span  className="selectt__item">35%</span>
                                </label>
                                <label onClick={handleChange50} className="selectt__label">
                                    <input type="radio" name="first"/>
                                    <span  className="selectt__item">50%</span>
                                </label>
                            </div>
                        </div>
                        <div className="form_entry_in_program_right">
                            <div className="form_entry_in_program_title">
                                Стоимость автомобиля <span>минимальная стоимость {minimalPrice} рублей</span>
                            </div>
                            <div className="form_entry_in_program_right_range">
                                <div className="form_entry_in_program_right_top_range">
                                    <input type="text" name="amountInput" min={toFromRange} max={toBeforeRange} value={price}
                                           />
                                    <span>Руб.</span>
                                </div>
                                <div className="form_entry_in_program_right_range_input">
                                    <input type="range" name="amountRange" min={toFromRange} max={toBeforeRange}
                                           onChange={event =>setPrice(event.target.value) }/>
                                </div>
                                <div className="form_entry_in_program_right_range_bottom">
                                    <div className="form_entry_in_program_right_range_bottom_left">{toFromRange} Руб.
                                    </div>
                                    <div className="form_entry_in_program_right_range_bottom_right">{toBeforeRange}
                                        Руб.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="totalprice">
                        <input type="text" value=" 500 000" className="totalprice_input"/>
                        <span>Рублей</span>
                    </div>
                    <div className="form_entry_in_program_center">
                        <div className="form_entry_in_program_center_price">
                            <div className="form_entry_in_program_center_titl">Первый взнос</div>
                            <div className="form_entry_in_program_center_green">{percent}%</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Срок программы</div>
                            <div className="form_entry_in_program_center_green">140 дней</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Общая сумма к оплате</div>
                            <div className="form_entry_in_program_center_green" style={{ color: '#e73351'}}>{price*percent/100}
                                Руб.
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

