import React, {useEffect, useState} from 'react';
import './style.scss';
import {HomeFaqItem} from "./HomeFaqItem";



export const ContFaq = () => {
    const [open,setOpen]=useState(null)
    const [itemsList,setItemsList]=useState({
        items:[]
    })

    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/Main/faq-list?pageNumber=1&pageSize=10',{
            method:'GET',
            headers:{'accept':'application/json'}
        })
            .then(res=>res.json())
            .then(body=>setItemsList(body))
    },[])

    return (

        <div className="main_cont">
            <div className="faq_tabs containerP">

                <div className="ins_row_faq">
                    {itemsList.items.filter((item,index)=>index<6).map((item,index)=><HomeFaqItem key={index} open={open} setOpen={setOpen} id={index} answer={item.answer} question={item.question} />)}
                </div>
                <div className="ins_row_faq">
                    {itemsList.items.filter((item,index)=>index>=6).map((item,index)=><HomeFaqItem key={index} open={open} setOpen={setOpen} id={index} answer={item.answer} question={item.question} />)}
                </div>
            </div>
            {/*<div className="pagination_p">*/}
            {/*    <div className="containerP">*/}
            {/*        <a href="#" className="prev_pag ">*/}
            {/*            <i className="fa fa-arrow-left" aria-hidden="true"/>*/}
            {/*        </a>*/}
            {/*        <a href="#" className="prev_pag ">*/}
            {/*            1*/}
            {/*        </a>*/}
            {/*        <a href="#" className="prev_pag ">*/}
            {/*            2*/}
            {/*        </a>*/}
            {/*        <a href="#" className="prev_pag ">*/}
            {/*            3*/}
            {/*        </a>*/}
            {/*        <a href="#" className="prev_pag ">*/}
            {/*            <i className="fa fa-arrow-right" aria-hidden="true"/>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
};

