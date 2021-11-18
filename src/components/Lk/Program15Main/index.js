import React from 'react';
import {ProgramItemNoActive} from "./ProgramItemNoActive";
import {ProgramItem} from "./ProgramItem";
import {BottomTextLine} from "./BottomTextLine";
import './style.scss';
import {Line} from "../MainTitle/GreyLine";

export const Program15Main = () => {
    return (
        <>

            <Line/>

            <div className="name_page">
                <img src="/images/black_arrow.png" alt=""/>
                    <span className="name_page_text">программа <span className="red_big">15</span></span>
            </div>
            <div className="prog_r">
                <div className="prog_r_first">
                    <div className="prog_r_items">
                        <ProgramItemNoActive img={'/images/man_green.png'} name={'ivanoff93'} status={'Оплачено'} price={'15 000 рублей'} line={true}/>

                    </div>
                </div>
                <div className="prog_r_second">
                    <div className="prog_r_second_left"/>
                    <div className="prog_r_items">
                        <ProgramItemNoActive img={'/images/man_green.png'} name={'ivanoff93'} status={'Оплачено'} price={'15 000 рублей'}/>
                        <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                        <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                    </div>
                    <div className="prog_r_second_right"/>
                </div>
                <div className="prog_r_third">
                    <div className="prog_r_third_left">
                        <div className="prog_r_items">
                            <ProgramItemNoActive img={'/images/man_green.png'} name={'ivanoff93'} status={'Оплачено'} price={'15 000 рублей'}/>
                            <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                            <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                        </div>
                        <div className="bonus">Бонус + 3000 руб.</div>
                    </div>
                    <div className="prog_r_third_center">
                        <div className="line_red"/>
                    </div>
                    <div className="prog_r_third_right">
                        <div className="prog_r_items">
                            <ProgramItemNoActive img={'/images/man_green.png'} name={'ivanoff93'} status={'Оплачено'} price={'15 000 рублей'}/>
                            <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                            <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                        </div>
                        <div className="bonus">Бонус + 3000 руб.</div>
                    </div>
                </div>
                <div className="prog_r_four">
                    <div className="prog_r_items">
                        <ProgramItemNoActive img={'/images/man_green.png'} name={'ivanoff93'} status={'Оплачено'} price={'15 000 рублей'}/>
                        <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                        <ProgramItem img={'/images/man_gray.png'} name={'ivanoff93'}  price={'15 000 рублей'}/>
                    </div>
                    <div className="bonus">Бонус + 3000 руб.</div>
                </div>
                <div className="right_absolute">
                    <div className="top_circle">
                        <div className="user_main_block_percent_circle progress-pie-chart" data-percent="75">
                            <div className="ppc-progress">
                                <div className="ppc-progress-fill"/>
                            </div>
                            <div className="ppc-percents">
                                <div className="pcc-percents-wrapper">
                                    <span>%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_text">
                        <BottomTextLine number={16} price={7000}/>
                        <BottomTextLine number={16} price={7000}/>
                        <BottomTextLine number={16} price={7000}/>
                        <BottomTextLine number={16} price={7000}/>
                        <BottomTextLine number={16} price={7000}/>
                        <BottomTextLine number={16} price={7000}/>
                        <BottomTextLine number={16} price={7000}/>
                        <BottomTextLine number={16} price={7000}/>

                    </div>
                </div>
            </div>
        </>
    );
};

