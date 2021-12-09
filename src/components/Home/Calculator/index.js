import React, {useEffect, useState} from 'react';
import './style.scss';
import Collapse from '@mui/material/Collapse';
import {CalcItem} from "./CalcItem";
import {TypeValueItem} from "./TypeValueItem";
import {useHistory} from "react-router";

export const Calculator = () => {
    const {push}=useHistory();
    const handleInvest=()=>{
        push('/programMaxi')
    }
    const [showCurr,setShowCurr]=useState(false);
    const [showPlan,setShowPlan]=useState(false);
    const [valueType,setValueType]= useState('');
    const [value,setValue]= useState(0);
    const [plan,setPlan]=useState({
        name:'',
        percent:null
    });
    const [minValue,setMinValue]=useState(0)
    useEffect(()=>{
        if(valueType===''||'BTC')setMinValue(0.1)
        if(valueType==='ETH') setMinValue(1)
        if(valueType==='ADA') setMinValue(100)
    },[valueType])

    useEffect(()=>{
        if(value>minValue*10){
            setValue(minValue*10)
        }
    },[value,minValue])



    return (
        <div className="calcul">
            <div className="housebg">
                {/*<img src="images/houses_together.png" alt="">*/}
            </div>
            <div className="containerP">
                <div className="pride_title wow slideInUp" data-wow-duration="2s">Калькулятор Доходности</div>
                <div className="pride_subtitle wow slideInUp" data-wow-duration="2s">Мы подобрали для вас самы
                    актуальные по соотношению сроков\процентов <br/>оптимальные пакетные платы для ваших дипозитных
                        вкладов. Тут вобщем <br/>текст для сео можно вставить.</div>
                <div className="cripto_table wow bounceInUp" data-wow-duration="2s">
                    <div className="bottom_bg wow pulse" data-wow-duration="4s" data-wow-iteration="infinite"/>
                    <div className="table_cripto">

                        <form>
                            <div className="flex_row">
                                <div className="select3 sel_plan">
                                    <div className="select_title">Выберите план</div>
                                    <div className="select_item_calc">
                                        <div onClick={()=>setShowPlan(!showPlan)} className="select_item_calc_name ope1">
                                            {plan.name===''?'Выберете план':plan.name}
                                        </div>
                                        <Collapse in={showPlan}  unmountOnExit >
                                        <div
                                            className="open_select_categ select_item_calc_body select_item_calc_body1 inputp">
                                            <TypeValueItem openState={setShowPlan} type={'Тарифный план Старт'} id={'categ1'} setValueType={setPlan} percent={5}/>
                                            <TypeValueItem openState={setShowPlan} type={'Тарифный план Выгодный'} id={'categ2'} setValueType={setPlan} percent={10}/>
                                            <TypeValueItem openState={setShowPlan} type={'Тарифный план БИЗНЕС'} id={'categ3'} setValueType={setPlan} percent={15}/>
                                        </div>
                                        </Collapse>
                                    </div>
                                </div>
                                <div className="select3 sel_money">
                                    <div className="select_title ">Выберите валюту</div>
                                    <div className="select_item_calc">
                                        <div onClick={()=>setShowCurr(!showCurr)} className="select_item_calc_name ope2">
                                            {valueType===''?'Выберете валюту':valueType}
                                        </div>
                                        <Collapse in={showCurr}  unmountOnExit >
                                        <div
                                            className="open_select_categ select_item_calc_body select_item_calc_body2 inputp">
                                            <TypeValueItem openState={setShowCurr} type={'BTC'} id={'mon1'} setValueType={setValueType}/>
                                            <TypeValueItem openState={setShowCurr} type={'ETH'} id={'mon2'} setValueType={setValueType}/>
                                            <TypeValueItem openState={setShowCurr} type={'ADA'} id={'mon3'} setValueType={setValueType}/>
                                        </div>
                                        </Collapse>
                                    </div>
                                </div>
                                <div className="select3 sel_price">
                                    <div className="select_title">Введите сумму</div>
                                    <input disabled={valueType===''&&plan.name===''} onChange={e => setValue(e.target.value)} value={value} placeholder={"1 "+valueType} type="number" className="number_input" step={0.01}/>
                                </div>
                            </div>
                            <CalcItem type={valueType}  mountProfit={value*(plan.percent+100)/100}/>
                            <div className="flex_row range_btn">
                                <div className="range_calc">
                                    <div className="slider">

                                        <div className="range">
                                            <input disabled={valueType===''&&plan.name===''} onChange={e => setValue(e.target.value)} type="range" name="date" id="date1" min="0.1" max="10" step="0.01"
                                                    defaultValue={0} required/>
                                            <span className="setyear">{value +' '+ valueType}</span>
                                        </div>
                                        <div className="under">
                                            <span className="startyear">{minValue +' '+  valueType}</span>
                                            <span className="endyear">{minValue*10 +' '+  valueType}</span>
                                        </div>

                                    </div>
                                </div>
                                <button onClick={handleInvest} className="invest_btn">Инвестировать</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};
