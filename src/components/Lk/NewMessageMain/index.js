import React, {useEffect} from 'react';
import './style.scss';
import {NewMessage} from "./NewMessage";
import {useFetch} from "../../../hooks/useFetch";
import {useSelector} from "react-redux";
export const NewMessageMain = ({title,mode}) => {
    const { auth } = useSelector((state) => state);
    // 'http://lk.pride.kb-techno.ru/api/Chat/chatrooms?pageNumber=1&pageSize=10'
    // const {data}=useFetch('http://lk.pride.kb-techno.ru/api/Chat/chatrooms',{
    //     method:'GET',
    //     headers:{'accept':'application/json',
    //         'Authorization':`Bearer ${auth.token}`}
    // })
    // console.log(data)
    // useEffect(()=>{
    //     fetch('http://lk.pride.kb-techno.ru/api/Chat/chatrooms',{
    //         method:'GET',
    //             headers:{'accept':'application/json',
    //                 'Authorization':`Bearer ${auth.token}`}
    //     })
    //         .then(res=>console.log(res.json()))
    // })
    return (
        <>
            <div className="grey_line"/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="main_content_right_sidebar_title_bl_title">{title}</div>
                    <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про голосование
                    </div>
                </div>
                <div className="messages_row">
                    <NewMessage name={'Eunice Clarke'} text={'Привет как дела тут тема сообщения короч'} date={'19 мин'} mode={mode}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'} mode={mode}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'} mode={mode}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'} mode={mode}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'} mode={mode}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'} mode={mode}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'} mode={mode}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'} mode={mode}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'} mode={mode}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'} mode={mode}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'} mode={mode}/>

                </div>
            </div>
        </>
    );
};

