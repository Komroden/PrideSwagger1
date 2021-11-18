import React, {useCallback, useState} from 'react';

import {LkLeftMenuOpenSubmenu} from "../LkLeftMenuOpenSubmenu";
import {CSSTransition} from "react-transition-group";



export const LkLeftMenuOpenThree = ({icon, title,subtitle1,subtitle2,subtitle3,path1,path2,path3}) => {
    const[open,setOpen]=useState(false)

    const handleOpen=()=>{
        setOpen(!open)

    }
    return (
        <li  className="us_menu_li has_child_li">
            <a>
                <img src={icon} alt=""/>
                <span className="text_li">{title}</span>
            </a>
            <span onClick={handleOpen} className="open_child">
                <img src="/images/chevr.png" alt=""/>
            </span>
            <CSSTransition  in={open} classNames='alert' timeout={500} unmountOnExit>
                <ul className="child_ul">
                    <LkLeftMenuOpenSubmenu title={subtitle1} path={path1}/>
                    <LkLeftMenuOpenSubmenu title={subtitle2} path={path2}/>
                    <LkLeftMenuOpenSubmenu title={subtitle3} path={path3}/>


                </ul>
            </CSSTransition>
        </li>
    );
};

