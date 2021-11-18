import React, {useState} from 'react';
import {MainTitle} from "../MainTitle";
import {UserBlock} from "../UserBlock";
import './style.scss';
import {FormSettings} from "./FormSettings";
import {Avatar} from "./Avatar";



export const SettingsMain = () => {

    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(!open)
    }

    return (
        <>
            <MainTitle title={'Настройки'}/>
            <UserBlock/>
            <div className="setting_form">
                <button className="form_sbmOpen" onClick={handleOpen}>Изменить аватар</button>
                <Avatar open={open} maxHeight={150} maxWidth={150}/>
               <FormSettings/>
            </div>
        </>
    );
};

