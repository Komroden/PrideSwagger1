import React, {useState} from 'react';
import {Tabs,Tab} from '@mui/material';
import {TabContext,TabPanel} from '@mui/lab';
import {TabMainInfo} from "./TabMainInfo";
import {TabDopInfo} from "./TabDopInfo";
import {TabBaseInfo} from "./TabBaseInfo";
import {TabCryptoWalets} from "./TabCryptoWallets";


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
                variant="scrollable"
                scrollButtons="auto"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Основные" />
                <Tab value="two" label="Дополнительные" />
                <Tab value="three" label="Смена пароля" />
                <Tab value="four" label="Платежная информация" />
            </Tabs>
            <TabPanel value={'one'}><TabMainInfo/></TabPanel>
            <TabPanel value={'two'}><TabDopInfo/></TabPanel>
            <TabPanel value={'three'}><TabBaseInfo/></TabPanel>
            <TabPanel value={'four'}><TabCryptoWalets/></TabPanel>





        </TabContext>
    );
};

