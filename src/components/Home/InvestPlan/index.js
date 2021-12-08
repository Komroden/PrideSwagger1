import React from 'react';
import './style.scss';

import {InvestPlanItem} from "./investPlanItem";
export const InvestPlan = () => {


    return (
        <div className="invest_plan">
            <div className="containerP wow slideInUp" data-wow-duration="2s">
                <div className="pride_title">Инвестиционнные планы</div>
                <div className="pride_subtitle">Мы подобрали для вас самы актуальные по соотношению
                    сроков\процентов <br/>оптимальные пакетные платы для ваших дипозитных вкладов. Тут вобщем <br/>текст
                        для сео можно вставить.</div>
            </div>
            <div className="containerP">
                <div className="invest_plan_flex">
                    <InvestPlanItem title={'ДЕПОЗИТ СТАРТ'} percent={'1.2'} day={'90'}/>
                    <InvestPlanItem title={'ДЕПОЗИТ ВЫГОДНЫЙ'} percent={'2.5'} day={'180'}/>
                    <InvestPlanItem title={'ДЕПОЗИТ БИЗНЕС'} percent={'3.5'} day={'360'}/>

                    {/*<a href="#" className="invest_plan_item wow slideInRight" data-wow-duration="3s">*/}
                    {/*    <div className="invest_plan_item_ins">*/}
                    {/*        <span className="inv_name">VIP Депозит</span>*/}
                    {/*        <span className="orange_b">*/}
  					{/*			<span className="orange_day">получение от 5% в день</span>*/}
  					{/*			<span className="center_text">особые условия</span>*/}
  					{/*		</span>*/}
                    {/*        <ul>*/}
                    {/*            <li>Минимально: 500 руб.</li>*/}
                    {/*            <li>Максимально: 50 000 руб.</li>*/}
                    {/*            <li>ЕЖЕДНЕВНЫЙ ПРОЦЕНТ до 1%</li>*/}
                    {/*            <li className="red_t">Тех. поддержка 27/7</li>*/}
                    {/*            <li>Большой выбор пополнения</li>*/}
                    {/*            <li>Быстрый возврат вашего депозита</li>*/}
                    {/*            <li>Полная статистика Online</li>*/}
                    {/*            <li>Мгновенные выплаты</li>*/}
                    {/*            <li className="green_t">Подходит новичкам</li>*/}
                    {/*        </ul>*/}
                    {/*        <span className="register_btn">Регистрация</span>*/}
                    {/*    </div>*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>
    );
};

