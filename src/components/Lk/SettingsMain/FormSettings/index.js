import React, {useState} from 'react';
import {Tabs,Tab} from '@mui/material';
import {TabContext,TabPanel} from '@mui/lab';
import {TabMainInfo} from "./TabMainInfo";
import {TabDopInfo} from "./TabDopInfo";
import {TabBaseInfo} from "./TabBaseInfo";


export const FormSettings = () => {


    const[valueTab,setValueTab]=useState('one');
    const handleChange = (event, newValue) => {
        setValueTab(newValue);

    };

    return (
        <TabContext value={valueTab}>

            <Tabs
                value={valueTab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Основная информация" />
                <Tab value="two" label="Дополнительная информация" />
                <Tab value="three" label="Важная информация" />
            </Tabs>
            <TabPanel value={'one'}><TabMainInfo/></TabPanel>
            <TabPanel value={'two'}><TabDopInfo/></TabPanel>
            <TabPanel value={'three'}><TabBaseInfo/></TabPanel>





        </TabContext>
    );
};

