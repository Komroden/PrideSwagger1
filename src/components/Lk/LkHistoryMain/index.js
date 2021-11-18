import React from 'react';
import './style.scss';

import {Line} from "../MainTitle/GreyLine";
import {LkHistoryMainItem} from "./LkHistoryMainItem";

export const LkHistoryMain = () => {
    return (
        <>
            <Line/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">ИСТОРИЯ ОПЕРАЦИЙ</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">отображение истории транзакций
                        </div>
                    </div>
                    <div className="sidebar_title_bl_right filter_history">
                        <form className="filter_history_form">
                            <select className="select_filter " name="filter">
                                <option selected>Все</option>
                                <option value="Первый">Первый</option>
                                <option value="Второй">Второй</option>
                                <option value="Третий">Третий</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="history_row">
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_yeallow'} colorStatus={'history_item_b_green'} date={'23.09.2020'} from={'С кошелька Bitcoin'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Завершен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_blue'} colorStatus={'history_item_b_yealow'} date={'23.09.2020'} from={'С кошелька Ethereum'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'В ожидании'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_green'} colorStatus={'history_item_b_red'} date={'23.09.2020'} from={'С кошелька Tether'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Отменен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_yeallow'} colorStatus={'history_item_b_green'} date={'23.09.2020'} from={'С кошелька Bitcoin'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Завершен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_blue'} colorStatus={'history_item_b_yealow'} date={'23.09.2020'} from={'С кошелька Ethereum'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'В ожидании'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_green'} colorStatus={'history_item_b_red'} date={'23.09.2020'} from={'С кошелька Tether'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Отменен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_yeallow'} colorStatus={'history_item_b_green'} date={'23.09.2020'} from={'С кошелька Bitcoin'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Завершен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_blue'} colorStatus={'history_item_b_yealow'} date={'23.09.2020'} from={'С кошелька Ethereum'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'В ожидании'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_green'} colorStatus={'history_item_b_red'} date={'23.09.2020'} from={'С кошелька Tether'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Отменен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_yeallow'} colorStatus={'history_item_b_green'} date={'23.09.2020'} from={'С кошелька Bitcoin'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Завершен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_blue'} colorStatus={'history_item_b_yealow'} date={'23.09.2020'} from={'С кошелька Ethereum'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'В ожидании'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                    <LkHistoryMainItem img={'/images/history_img.png'} color={'history_item_green'} colorStatus={'history_item_b_red'} date={'23.09.2020'} from={'С кошелька Tether'} id={'# 0010235'}
                                       price={'$ 22 4154.92'} status={'Отменен'} time={'13:45:58'} to={'Деньги выведены на платежныую систему PAYEER'} value={'0.01404'} />
                </div>


                <div className="history_pagin_row">
                    <div className="voice_pagination">
                        <ul>
                            <li className="arrow_li li_start">
                                <a href="#">
                                    <img src="/images/pag_arr.png" alt=""/>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li className="arrow_li li_eng">
                                <a href="#">
                                    <img src="/images/pag_arr.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

