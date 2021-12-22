import React, {useEffect, useState} from 'react';
import './style.scss';
import Collapse from '@mui/material/Collapse';
import {CalcItem} from "./CalcItem";
import {TypeValueItem} from "./TypeValueItem";
import {useHistory} from "react-router";
import {useCourse} from "../../../hooks/useCourse";

export const Calculator = () => {
    const {push}=useHistory();
    const handleInvest=()=>{
        push('/programMaxi')
    }
    const [showCurr,setShowCurr]=useState(false);
    const [showPlan,setShowPlan]=useState(false);
    const [valueType,setValueType]= useState('BTC');
    const [value,setValue]= useState(0);
    const [plan,setPlan]=useState({
        name:'',
        percent:null,
        minValue:0,
        maxValue:0
    });
    const course =useCourse(valueType)
    useEffect(()=>{
        if(Math.ceil(value)>Math.ceil(plan.maxValue/course))setValue(plan.maxValue/course)
        if(Math.ceil(value)<Math.ceil(plan.minValue/course))setValue(plan.minValue/course)
    },[course,value,plan])





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
                                            <TypeValueItem openState={setShowPlan} type={'Тарифный план Старт'} id={'categ1'} setValueType={setPlan} percent={5} maxValue={999} minValue={100}/>
                                            <TypeValueItem openState={setShowPlan} type={'Тарифный план Выгодный'} id={'categ2'} setValueType={setPlan} percent={10} minValue={1000} maxValue={9999}/>
                                            <TypeValueItem openState={setShowPlan} type={'Тарифный план БИЗНЕС'} id={'categ3'} setValueType={setPlan} percent={15} minValue={10000} maxValue={50000}/>
                                        </div>
                                        </Collapse>
                                    </div>
                                </div>
                                <div className="select3 sel_money">
                                    <div className="select_title ">Выберите валюту</div>
                                    <div className="select_item_calc">
                                        <div onClick={()=>setShowCurr(!showCurr)} className="select_item_calc_name ope2">
                                            {valueType===''?'Выберете валюту':(valueType==='CurrenyPriceInfoT'?'USDT':valueType)}
                                        </div>
                                        <Collapse in={showCurr}  unmountOnExit >
                                        <div
                                            className="open_select_categ select_item_calc_body select_item_calc_body2 inputp">
                                            <TypeValueItem openState={setShowCurr} type={'BTC'} id={'mon1'} setValueType={setValueType}/>
                                            <TypeValueItem openState={setShowCurr} type={'ETH'} id={'mon2'} setValueType={setValueType}/>
                                            <TypeValueItem openState={setShowCurr} type={'Usdc'} id={'mon3'} setValueType={setValueType}/>
                                            <TypeValueItem openState={setShowCurr} type={'LITE'} id={'mon4'} setValueType={setValueType}/>
                                        </div>
                                        </Collapse>
                                    </div>
                                </div>
                                <div className="select3 sel_price">
                                    <div className="select_title">Введите сумму</div>
                                    <input disabled={valueType===''&&plan.name===''} onChange={e => setValue(e.target.value)} value={Number(value).toFixed(value>10?0:3)} placeholder={(plan.minValue/course).toFixed(3)+valueType} type="number" className="number_input" step={0.01} min={plan.minValue/course?plan.minValue/course:0} max={plan.maxValue/course?plan.maxValue/course:0} />
                                </div>
                            </div>
                            <CalcItem type={valueType}  mountProfit={value*(plan.percent+100)/100}/>
                            <div className="flex_row range_btn">
                                <div className="range_calc">
                                    <div className="slider">

                                        <div className="range">
                                            <input disabled={valueType===''&&plan.name===''} onChange={e => setValue(e.target.value)} type="range" name="date" id="date1"  step="0.0001" min={plan.minValue/course?plan.minValue/course:0} max={plan.maxValue/course?plan.maxValue/course:0}
                                                    defaultValue={plan.minValue/course?plan.minValue/course:0} required/>
                                            <span className="setyear">{Number(value).toFixed(value>10?0:3) +' '+ (valueType==='CurrenyPriceInfoT'?'USDT':valueType)}</span>
                                        </div>
                                        <div className="under">
                                            <span className="startyear">{plan.minValue/course?(plan.minValue/course).toFixed(plan.minValue/course>10?0:3)+' '+  (valueType==='CurrenyPriceInfoT'?'USDT':valueType):0 }</span>
                                            <span className="endyear">{plan.maxValue/course?(plan.maxValue/course).toFixed(plan.maxValue/course>10?0:3)+' '+  (valueType==='CurrenyPriceInfoT'?'USDT':valueType):0 }</span>
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
