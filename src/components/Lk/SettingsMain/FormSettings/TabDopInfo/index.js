import React, {useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import {CodeInput} from "../CodeInput";

export const TabDopInfo = () => {

    const[value,setValue]=useState({
        phoneNumber:'',
        telegram:'',
        vkontakte:'',

    });
    const telegram=useInputV('')
    const vkontakte=useInputV('')
    const phoneNumber=useInputV('',{isPhone:true});
    const money=useInputV('')
    const handlePut=(e)=>{
        e.preventDefault()
        setValue({
            phoneNumber:phoneNumber.value,
            telegram:telegram.value,
            vkontakte:vkontakte.value,
        })
    }
    const handleReset=()=>{
        telegram.onReset()
        vkontakte.onReset()
        phoneNumber.onReset()
        money.onReset()
        phoneNumber.setDirty(false)
    }

    return (
        <form onSubmit={handlePut} onReset={handleReset}>
            <div className="setting_form_row">
            <div className="setting_form_item setting_form_item_for_three">
                <span className="title_input">Телефон</span>
                <input  type='text' className="dark_input" onBlur={e => phoneNumber.onBlur(e)} onChange={e=>phoneNumber.onChange(e)} value={phoneNumber.value} />
                {(phoneNumber.isDirty && phoneNumber.phoneError) && <span className="required_fail"> Неверный формат</span>}

            </div>
            <div className="setting_form_item setting_form_item_for_three">
                <span className="title_input">Skype\Telegram</span>
                <input  onChange={e=>telegram.onChange(e)} value={telegram.value} type='text' className="dark_input" />


            </div>
            <div className="setting_form_item setting_form_item_for_three">
                <span className="title_input">Страница VK.com</span>
                <input  onChange={e=>vkontakte.onChange(e)} value={vkontakte.value} type='text' className="dark_input" />
            </div>
                <div className="setting_form_item">
                    <span className="title_input">Кошелек Perfect Money USD</span>
                    <input onChange={e=>money.onChange(e)} value={money.value} type='text' className="dark_input" />
                </div>
            </div>
            {(money.value!==''||phoneNumber.value!=='') && <CodeInput/>}
            <div className="setting_form_bottom">
                <button disabled={true} type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

