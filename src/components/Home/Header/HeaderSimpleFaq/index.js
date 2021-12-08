import React from 'react';
import './style.scss';
import {useHistory} from "react-router";


export const HeaderSimpleFaq = (prop) => {
    // const [showCategory,setShowCategory]=useState(false);
    const {push}=useHistory()
    const handlePushHome=(e) => {
        e.preventDefault()
        push('/')
    }
    return (
        <div className="header_simple">
            <div className="containerP">
                <div className="simple_left">
                    <div className="breadcrumbs">
                        <ul>
                            <li>
                                <a href={'/'} onClick={handlePushHome}>Главная</a>
                            </li>
                            <li>{prop.bread}</li>
                        </ul>
                    </div>
                    <h1 className="regg_title">{prop.title}</h1>
                    {/*<div className="simple_header_form">*/}
                    {/*    <form>*/}
                    {/*        <label htmlFor="iff" className="label_i">*/}
                    {/*            <input id="iff" type="text" placeholder="search" className="search_i inputp"/>*/}
                    {/*        </label>*/}
                    {/*        <div className="column_categ">*/}
                    {/*            <div onClick={()=>setShowCategory(!showCategory)} className="opencat inputp">*/}
                    {/*                Категории*/}
                    {/*            </div>*/}
                    {/*            <CSSTransition in={showCategory} classNames='alert' timeout={300} unmountOnExit >*/}
                    {/*            <div  className="open_select_categ inputp">*/}
					{/*				<span className="sel_r">*/}
					{/*					<input type="radio" name="categ" id="categ1"/>*/}
					{/*					<label htmlFor="categ1">Блокчейн</label>*/}
					{/*				</span>*/}
                    {/*                <span className="sel_r">*/}
					{/*					<input type="radio" name="categ" id="categ2"/>*/}
					{/*					<label htmlFor="categ2">Хайп проекты</label>*/}
					{/*				</span>*/}
                    {/*                <span className="sel_r">*/}
					{/*					<input type="radio" name="categ" id="categ3"/>*/}
					{/*					<label htmlFor="categ3">Блокчейн</label>*/}
					{/*				</span>*/}
                    {/*                <span className="sel_r">*/}
					{/*					<input type="radio" name="categ" id="categ4"/>*/}
					{/*					<label htmlFor="categ4">Криптовалюта</label>*/}
					{/*				</span>*/}
                    {/*                <span className="sel_r">*/}
					{/*					<input type="radio" name="categ" id="categ5"/>*/}
					{/*					<label htmlFor="categ5">Просто новости</label>*/}
					{/*				</span>*/}

                    {/*            </div>*/}
                    {/*            </CSSTransition>*/}
                    {/*        </div>*/}
                    {/*        <button className="subm_search inputp">Поиск</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>
                <div className="simple_right">
                    <img src="/images/simple_header.png" alt="headerFaq"/>
                </div>
            </div>
        </div>
    );
};

