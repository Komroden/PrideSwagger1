import React from 'react';
import {useHistory} from "react-router";

export const InvestPlanItem = ({title, percent,day}) => {
    const{push}=useHistory()
    const handlePush=(e) => {
        e.preventDefault()
        push('/register')
    }
    return (
        <a href={'/'} onClick={handlePush} className="invest_plan_item wow slideInLeft" data-wow-duration="3s">
            <div className="invest_plan_item_ins">
                <span className="inv_name">{title}</span>
                <span className="orange_b">
  								<span className="orange_day">{percent} % в день</span>
  								<span className="orange_nubmer">{day}</span>
  								<span className="orange_white">Дней</span>
  							</span>
                <ul>
                    <li>Минимально: 500 руб.</li>
                    <li>Максимально: 50 000 руб.</li>
                    <li>ЕЖЕДНЕВНЫЙ ПРОЦЕНТ до 1%</li>
                    <li className="red_t">Тех. поддержка 27/7</li>
                    <li>Большой выбор пополнения</li>
                    <li>Быстрый возврат вашего депозита</li>
                    <li>Полная статистика Online</li>
                    <li>Мгновенные выплаты</li>
                    <li className="green_t">Подходит новичкам</li>
                </ul>
                <span className="register_btn">Регистрация</span>
            </div>
        </a>
    );
};

