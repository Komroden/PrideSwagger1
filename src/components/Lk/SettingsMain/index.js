import React, {useState} from 'react';
import {MainTitle} from "../MainTitle";
import {UserBlock} from "../UserBlock";
import './style.scss';
import {FormSettings} from "./FormSettings";
import {Avatar} from "./Avatar";



export const SettingsMain = () => {

    const [open,setOpen]=useState(false);


    return (
        <>
            <MainTitle title={'Настройки'}/>
            <UserBlock isChangeImage={true} setOpen={setOpen} open={open}/>
            <div className="setting_form">

                <Avatar open={open} maxHeight={150} maxWidth={150}/>
               <FormSettings/>
            </div>
        </>
    );
};

