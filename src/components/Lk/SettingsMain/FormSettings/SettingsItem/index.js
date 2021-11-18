import React from 'react';
import {useInputV} from "../../../../../hooks/useInputV";

export const SettingsItem = ({title}) => {
    const value=useInputV('')
    return (
        <div className="setting_form_item setting_form_item_for_two">
            <span className="title_input">{title}</span>
            <input  onChange={e=>value.onChange(e)} value={value.value} type='text' className="dark_input" />


        </div>
    );
};

