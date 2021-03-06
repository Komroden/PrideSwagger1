import React from 'react';

export const TypeValueItem = ({type,id,setValueType,percent,openState,minValue,maxValue}) => {
const handleChange=(e)=>{
    e.stopPropagation()
    openState(false)
}
    return (
        <span  className="sel_r">
            <input onClick={handleChange} onChange={e => setValueType(percent?{name:type,percent:percent,minValue:minValue,maxValue:maxValue}:type)} type="radio" name="categ3" id={id}/>
            <label htmlFor={id}>{type==='CurrenyPriceInfoT'?'USDT':type}</label>
        </span>
    );
};

