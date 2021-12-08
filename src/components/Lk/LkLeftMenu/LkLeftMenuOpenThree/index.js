import React, {useState} from 'react';

import {LkLeftMenuOpenSubmenu} from "../LkLeftMenuOpenSubmenu";
import Collapse from '@mui/material/Collapse';



export const LkLeftMenuOpenThree = ({icon, title,subtitle1,subtitle2,subtitle3,path1,path2,path3}) => {
    const[open,setOpen]=useState(false)

    const handleOpen=(e)=>{
        e.preventDefault()
        setOpen(!open)

    }
    return (
        <li onClick={handleOpen} className="us_menu_li has_child_li">
            <div  >
                <img src={icon} alt=""/>
                <span className="text_li">{title}</span>
            </div>
            <span  className="open_child">
                <img src="/images/chevr.png" alt=""/>
            </span>
            <Collapse  in={open}>
                <ul className="child_ul">
                    <LkLeftMenuOpenSubmenu title={subtitle1} path={path1}/>
                    <LkLeftMenuOpenSubmenu title={subtitle2} path={path2}/>
                    <LkLeftMenuOpenSubmenu title={subtitle3} path={path3}/>


                </ul>
            </Collapse>
        </li>
    );
};

