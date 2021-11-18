import React from 'react';
import './style.scss';
import {MatrixCard} from "./MatrixCard";
import {MatrixBlockCard} from "./MatrixBlockCard";
import {MatrixSectionItem} from "./MatrixSectionItem";
import {Line} from "../MainTitle/GreyLine";

export const ProgramMatrixMain = () => {
    return (
        <>
            <Line/>
            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">программа матрица</span>
            </div>
            <div className="program_roww">
                <div className="left_mans">
                    <div className="first_level">
                        <div className="first_level_dots">
                            <img src="/images/black_arrow.png" alt=""/>
                                ...
                        </div>
                        <MatrixCard number={125984} name={'Dmitriy Ivanov'} img={'/images/prog.png'} date={'21.09.2020'}/>

                        <img src="/images/first.png" alt=""/>
                    </div>
                    <div className="second_level">
                        <div className="second_level_item">
                            <div className="second_level_item_numb">0</div>
                            <MatrixCard number={125984} name={'Dmitriy Ivanov'} img={'/images/u1.png'} date={'21.09.2020'}/>
                            <div className="second_level_item_dots">...</div>
                            <img src="/images/small_line.png" alt=""/>
                        </div>
                        <div className="second_level_item">
                            <div className="second_level_item_numb">0</div>
                            <MatrixCard number={125984} name={'Dmitriy Ivanov'} img={'/images/u1.png'} date={'21.09.2020'}/>
                            <div className="second_level_item_dots">...</div>
                            <img src="/images/small_line.png" alt=""/>
                        </div>
                    </div>
                    <div className="third_level">
                        <div className="third_level_item">
                            <MatrixBlockCard price={8000}/>

                            <MatrixBlockCard price={8000}/>
                        </div>
                        <div className="third_level_item">
                            <MatrixBlockCard price={8000}/>
                            <MatrixBlockCard price={8000}/>
                        </div>
                    </div>
                </div>
                <div className="right_form">
                    <form>
                        <div className="program_form">
                            <div className="inp_title">Структура</div>
                            <select name="1">
                                <MatrixSectionItem name={'Silver #1'} value={'1'}/>
                                <MatrixSectionItem name={'Silver #2'} value={'2'}/>
                                <MatrixSectionItem name={'Silver #3'} value={'3'}/>
                                <MatrixSectionItem name={'Silver #4'} value={'4'}/>
                                <MatrixSectionItem name={'Silver #5'} value={'5'}/>
                                <MatrixSectionItem name={'Silver #6'} value={'6'}/>
                            </select>
                            <div className="inp_title">Поиск по логину</div>
                            <select name="1">
                                <MatrixSectionItem name={'Silver #1'} value={'1'}/>
                                <MatrixSectionItem name={'Silver #2'} value={'2'}/>
                                <MatrixSectionItem name={'Silver #3'} value={'3'}/>
                                <MatrixSectionItem name={'Silver #4'} value={'4'}/>
                                <MatrixSectionItem name={'Silver #5'} value={'5'}/>
                                <MatrixSectionItem name={'Silver #6'} value={'6'}/>
                            </select>
                            <div className="inp_title">Список клонов</div>
                            <select name="1">
                                <MatrixSectionItem name={'#123456 12.11.2020'} value={'1'}/>
                                <MatrixSectionItem name={'#123456 12.11.2020'} value={'2'}/>
                                <MatrixSectionItem name={'#123456 12.11.2020'} value={'3'}/>
                                <MatrixSectionItem name={'#123456 12.11.2020'} value={'4'}/>
                                <MatrixSectionItem name={'#123456 12.11.2020'} value={'5'}/>
                                <MatrixSectionItem name={'#123456 12.11.2020'} value={'6'}/>
                            </select>
                            <div className="program_form_btns">
                                <button className="buy_place">Купить место</button>
                                <a href="#" className="next_place">Следущее место</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

