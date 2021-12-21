import React, {useEffect, useState} from 'react';

export const LkHistoryMainItem = ({img,date,id,status,course,title,valueDeb,valueCre,valueType}) => {
    const d =new Date(date).toLocaleDateString()
    const time =new Date(date).toLocaleTimeString()
    const [value,setValue]=useState(0)
    const [text,setText]=useState('')
    useEffect(()=>{
        if(!valueDeb){
            setValue(valueCre)
        }
        if(!valueCre){
            setValue(valueDeb)
        }
    },[valueCre,valueDeb])
    const [color,setColor]=useState('')
    useEffect(()=>{
        if(status==='Отменен'){
            setColor('history_item_b_red')
            setText('Отменен')
            return
        }
        if(status==='На проверке'){
            setColor('history_item_b_yealow')
            setText('На проверке')
            return;
        }
        else {
            setColor('history_item_b_green')
            setText('Выполнен')
        }
    },[status])

    return (
        <div className="history_item">
            <div className="history_item_img">
                <img src={img} alt=""/>
            </div>
            <div className="history_item_descr">
                <div className="history_item_code">{'#'+id}</div>
                <div className="history_item_date"><img src="/images/calend.png" alt=""/>{d}</div>
                <div className="history_item_time">
                    <img src="/images/clock.png" alt=""/>{time}
                </div>
            </div>
            <div className="history_item_text">
                <div className={'history_item_green'}>{'С кошелька '+(valueType==='Default'?'Usdc':valueType)}</div>
                <div className="history_item_span">{title}</div>
            </div>
            <div className="history_item_coints">{value.toFixed(2)} <br/>{valueType==='Default'?'Usdc':valueType}</div>
            <div className="history_item_price">{(value*course).toFixed(2)}</div>
            <div className="history_item_btn">
                <a href="/" className={"history_item_b "+color}>{text}</a>
            </div>
            <div className="history_item_dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

