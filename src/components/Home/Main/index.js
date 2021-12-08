import React from 'react';
import './style.scss';
import {useHistory} from "react-router";

export const Main = () => {
     const {push}=useHistory();
     const handlePush=(e)=>{
         e.preventDefault()
        push('/lk')

     }
    return (
        <div className="firstbl">
            <div className="first_containerP">
                <div className="text_bg wow " data-wow-duration="12s" data-wow-iteration="infinite">company
                    see <br/><span>Pride.</span></div>
                <div className="first_left wow slideInUp" data-wow-duration="3s">
                    <h1 className="first_title">Создай свой Доход <br/>и <span>Зарабатывай</span></h1>
                    <div className="first_sub_title">Зарабатывай на проверенных</div>
                    <div className="first_sub_sub_title">Проверенный МЛМ Агрегатор</div>
                    <a href={'/'} onClick={handlePush} className="invest_btn wow slideInUp bag" >Инвестировать</a>
                    <div className="first_left_bottom">
                        <div className="first_left_bottom_title">
                            инвестиционный <br/>фонд компании
                        </div>
                        <div className="first_left_bottom_numbers">
                            1 893 589.00 $
                        </div>
                    </div>
                </div>
                <div className="first_right">
                    <img className="booble_img wow pulse" data-wow-iteration="infinite" data-wow-duration="2.5s"
                          alt=""/>
                        <div className="bottom_text wow slideInRight" data-wow-duration="2s"><span>.</span>твой старт
                        </div>
                </div>
            </div>
            <div className="scroll_down_btn">
                <div className="scroll_text">SCROLL</div>
                <div className="div_circle wow pulse" data-wow-iteration="infinite" data-wow-duration="1s">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

