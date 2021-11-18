import React, {useState} from 'react';

export const TechniqueBlock = ({toFromRange,toBeforeRange,totalPrice,minPrice,initialPercent,rangeProgram}) => {
    const[price,setPrice]=useState(toFromRange);
    return (
        <div className="blue_block blue_block_green blue_block_blue">
            <form>
                <div className="form_entry_in_program">
                    <div className="form_entry_in_program_top">
                        <div className="form_entry_in_program_left">
                            <div className="form_entry_in_program_title">Начальный взнос:</div>
                            <div className="selectt">
                                <div className="selectt__item active">
                                    {initialPercent} %
                                </div>
                            </div>
                        </div>
                        <div className="form_entry_in_program_right">
                            <div className="form_entry_in_program_title">
                                Стоимость техники <span>минимальная стоимость {minPrice} рублей</span>
                            </div>
                            <div className="form_entry_in_program_right_range">
                                <div className="form_entry_in_program_right_top_range">
                                    <input type="text" name="amountInput" min={toFromRange} max={toBeforeRange} value={price}
                                           />
                                    <span>Руб.</span>
                                </div>
                                <div className="form_entry_in_program_right_range_input">
                                    <input type="range" name="amountRange" min={toFromRange} max={toBeforeRange} value={price}
                                           onChange={event => setPrice(event.target.value)}/>
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
                        <input type="text" value={totalPrice} className="totalprice_input"/>
                        <span>Рублей</span>
                    </div>
                    <div className="form_entry_in_program_center">
                        <div className="form_entry_in_program_center_price">
                            <div className="form_entry_in_program_center_titl">Первый взнос</div>
                            <div className="form_entry_in_program_center_green">{initialPercent}%</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Срок программы</div>
                            <div className="form_entry_in_program_center_green">{rangeProgram} дней</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Общая сумма к оплате</div>
                            <div className="form_entry_in_program_center_green" style={{color: '#e73351'}}>{price} Руб.
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

