import React, {useRef, useState} from 'react';
import {LkHomeMainLiderTopItem} from "../LkHomeMainLiderTopItem";
import Slide from '@mui/material/Slide';
import './style.scss';



export const LkMainHeaderTop = () => {
    const[open,setOpen]=useState(false);
    const[isvirify,setIsVerify]=useState(false)
    const items=[
        <LkHomeMainLiderTopItem  url='/images/user1.png' number='#1'  />,
        <LkHomeMainLiderTopItem url='/images/user2.png' number='#2'  />,
        <LkHomeMainLiderTopItem url='/images/user3.png' number='#3'  />,
        <LkHomeMainLiderTopItem url='/images/user4.png' number='#4'  />,
        <LkHomeMainLiderTopItem url='/images/user5.png' number='#5'  />,
        <LkHomeMainLiderTopItem url='/images/user6.png' number='#6'  />,
    ]

    const [itemsInTop,setItemsInTop]=useState(items.slice(0, 7))
    const handleClick = () => {
        if(isvirify===true) return
        setOpen(!open)

        setItemsInTop(items)

    };
    const containerRef =useRef(null)
    const handleVerify=()=>{
        setIsVerify(true)
    }


    return (
        <div className="lider_top" >
            <div className="lider_top_title">
                лидеры <br/>
                ваш топ
            </div>
            <div onClick={handleClick}  className="lider_top_add">
                <a ref={containerRef}>
                    <span  className="dark_plus">+</span>

                </a>
            </div>
            <Slide direction="right" in={open} container={containerRef.current} unmountOnExit>
                <div className="lider_top_item" >
                    <span  className={isvirify?'add_top hidden':'add_top visible'} onClick={handleVerify} >Добавить себя</span>
                    <a href="#" className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src='/images/user.png' alt=""/>
									</span>
                        <span className="green_lin"/>
                        <span className="number_lin">#1</span>
                    </a>
                </div>
            </Slide>
            {itemsInTop.map(item=>item)}
            <Slide direction="left" in={!open}  unmountOnExit>
                <div className="lider_top_item" >
                    <a href="#" className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src='/images/user7.png' alt=""/>
									</span>
                        <span className="green_lin"/>
                        <span className="number_lin">#7</span>
                    </a>
                </div>
            </Slide>
        </div>
    );
};

