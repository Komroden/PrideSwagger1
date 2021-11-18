import React, {useCallback} from 'react';
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import {openMessageSms} from "../../../store/messageSms/actions";
import {useHistory} from "react-router";

export const MessageSms = () => {
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMessageSms())
    }, [dispatch]);

    const {push}=useHistory()

    const handlePushLk=() => {
        push('/lk')
        setName()
    }
    const { messageSms } = useSelector((state) => state);
    return (
        <CSSTransition in={messageSms.openMessage} classNames='alert' timeout={300} unmountOnExit>
            <div className="open_popup">
                <div className="open_popup_row">
                    <div className="close_popup">
                        <div onClick={setName} className="close_menu_btn">
                            <span className="before"/>
                            <span className="after"/>
                        </div>
                    </div>
                    <img src="/images/logo_dark.png" alt=""/>
                    <div className="pop_descr">
                        <p>Двуфакторная аутодентификация не завершена,<br/>Вы сможете завершить ее позже в личном кабинете</p>
                    </div>
                    <button onClick={handlePushLk} className='subm_form'>
                        Подтвердите действие
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
};

