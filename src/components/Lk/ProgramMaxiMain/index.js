import React, {useEffect, useState} from 'react';
import './style.scss';
import {ProgramCalculator} from "../ProgramCalculator";
import {DealItem} from "../DealItem";
import {Line} from "../MainTitle/GreyLine";
import {DealItemCancel} from "../DealItem/DealItemCancel";
export const ProgramMaxiMain = ({title,percent,minValue,maxValue}) => {
    const [filter,setFilter]=useState('all');
    const [maxWidth,setMaxWidth]=useState('130px')
    useEffect(()=>{
        if(filter==='timeout'){
            setMaxWidth('160px')
            return
        }
        setMaxWidth('130px')
    },[filter])

    return (
        <>
            <Line/>

            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">программа <span className="red_big">{title}</span></span>
            </div>
            <div className="program_img">
                <img src="/images/program_img.jpg" alt=""/>
            </div>
            <ProgramCalculator percent={percent} minValue={minValue} toBeforeRange={maxValue}/>
            <div className={'deal_filter'}>
            <select style={{minWidth:maxWidth}} defaultValue={'all'} className="select_filter " name="filter" onChange={e=>setFilter(e.target.value)} >
                <option value={'all'}>Все</option>
                <option value="active">Активные</option>
                <option value="timeout">Завершенные</option>
                <option value="timer">В ожидании</option>
            </select>
            </div>
            <div className={"deal_row"}>
            <DealItem numberDeal={'135'} minValue={minValue} percent={percent}/>
            <DealItemCancel numberDeal={'135'} value={500}/>
            <DealItemCancel numberDeal={'135'} value={500} isTimeout={true}/>
            </div>
        </>
    );
};

