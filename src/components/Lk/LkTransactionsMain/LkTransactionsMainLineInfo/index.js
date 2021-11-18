import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import './style.scss';

export const LkTransactionsMainLineInfo = ({status,userClass, statusClass}) => {
    const [open,setOpen]=useState(false)
    const handleActive =() => {
        setOpen(!open)
    }
    return (
        <div  className="lineinfo">
            <div  onClick={handleActive} className="lineinfo__top">
                <div className="lineinfo__day">
                    <img src="/images/calendar.png" alt=""/>
                    <span>23.09.2020</span>
                </div>
                <div className="lineinfo__time">
                    <img src="/images/clokck.png" alt=""/>
                    <span>13:45:58</span>
                </div>
                <div className="lineinfo__active">
                    <div className={"lineinfo__activeins "+statusClass}>{status}</div>
                </div>
                <div className={"lineinfo__user "+ userClass}><img src="/images/user_green.png" alt=""/> Natalia Familia</div>
                <div className="lineinfo__details">
                    <div className="lineinfo__detailsitem">
                        <img src="/images/im.png" alt=""/>
                    </div>
                    <div className="lineinfo__detailsitem">
                        <img src="/images/im2.png" alt=""/>
                    </div>
                    <div className="lineinfo__detailsitem">
                        <img src="/images/im3.png" alt=""/>
                    </div>
                </div>
                <div className="lineinfo__email">
                    <img src="/images/icon_ma.png" alt=""/>
                    <a href="#">superuser@gmail.com</a>
                </div>
                <div className="lineinfo__status">
                    <span></span>
                </div>
            </div>
            <CSSTransition  in={open} classNames='alert' timeout={300} unmountOnExit>
            <div className="lineinfo__body">
                <div className="lineinfo__top">
                    <div className="lineinfo__day">
                        <img src="/images/calendar.png" alt=""/>
                        <span>23.09.2020</span>
                    </div>
                    <div className="lineinfo__time">
                        <img src="/images/clokck.png" alt=""/>
                        <span>13:45:58</span>
                    </div>
                    <div className="lineinfo__active">
                        <div className="lineinfo__activeins">Active</div>
                    </div>
                    <div className="lineinfo__user "><img src="/images/user_green.png" alt=""/> Natalia Familia</div>
                    <div className="lineinfo__details">
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im.png" alt=""/>
                        </div>
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im2.png" alt=""/>
                        </div>
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im3.png" alt=""/>
                        </div>
                    </div>
                    <div className="lineinfo__email">
                        <img src="/images/icon_ma.png" alt=""/>
                        <a href="#">superuser@gmail.com</a>
                    </div>
                    <div className="lineinfo__status">
                        <span></span>
                    </div>
                </div>
                <div className="lineinfo__body">
                    <div className="lineinfo__top">
                        <div className="lineinfo__day">
                            <img src="/images/calendar.png" alt=""/>
                            <span>23.09.2020</span>
                        </div>
                        <div className="lineinfo__time">
                            <img src="/images/clokck.png" alt=""/>
                            <span>13:45:58</span>
                        </div>
                        <div className="lineinfo__active">
                            <div className="lineinfo__activeins">Active</div>
                        </div>
                        <div className="lineinfo__user "><img src="/images/user_green.png" alt=""/> Natalia Familia
                        </div>
                        <div className="lineinfo__details">
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im2.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im3.png" alt=""/>
                            </div>
                        </div>
                        <div className="lineinfo__email">
                            <img src="/images/icon_ma.png" alt=""/>
                            <a href="#">superuser@gmail.com</a>
                        </div>
                        <div className="lineinfo__status">
                            <span></span>
                        </div>
                    </div>
                    <div className="lineinfo__top">
                        <div className="lineinfo__day">
                            <img src="/images/calendar.png" alt=""/>
                            <span>23.09.2020</span>
                        </div>
                        <div className="lineinfo__time">
                            <img src="/images/clokck.png" alt=""/>
                            <span>13:45:58</span>
                        </div>
                        <div className="lineinfo__active">
                            <div className="lineinfo__activeins lineinfo__activeins_red">Inactive</div>
                        </div>
                        <div className="lineinfo__user lineinfo__user_red"><img src="/images/user_red.png"
                                                                                alt=""/> Natalia Familia</div>
                        <div className="lineinfo__details">
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im2.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im3.png" alt=""/>
                            </div>
                        </div>
                        <div className="lineinfo__email">
                            <img src="/images/icon_ma.png" alt=""/>
                            <a href="#">superuser@gmail.com</a>
                        </div>
                        <div className="lineinfo__status">
                            <span></span>
                        </div>
                    </div>
                    <div className="lineinfo__top">
                        <div className="lineinfo__day">
                            <img src="/images/calendar.png" alt=""/>
                            <span>23.09.2020</span>
                        </div>
                        <div className="lineinfo__time">
                            <img src="/images/clokck.png" alt=""/>
                            <span>13:45:58</span>
                        </div>
                        <div className="lineinfo__active">
                            <div className="lineinfo__activeins">Active</div>
                        </div>
                        <div className="lineinfo__user "><img src="/images/user_green.png" alt=""/> Natalia Familia
                        </div>
                        <div className="lineinfo__details">
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im2.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im3.png" alt=""/>
                            </div>
                        </div>
                        <div className="lineinfo__email">
                            <img src="/images/icon_ma.png" alt=""/>
                            <a href="#">superuser@gmail.com</a>
                        </div>
                        <div className="lineinfo__status">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="lineinfo__top">
                    <div className="lineinfo__day">
                        <img src="/images/calendar.png" alt=""/>
                        <span>23.09.2020</span>
                    </div>
                    <div className="lineinfo__time">
                        <img src="/images/clokck.png" alt=""/>
                        <span>13:45:58</span>
                    </div>
                    <div className="lineinfo__active">
                        <div className="lineinfo__activeins">Active</div>
                    </div>
                    <div className="lineinfo__user "><img src="/images/user_green.png" alt=""/> Natalia Familia</div>
                    <div className="lineinfo__details">
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im.png" alt=""/>
                        </div>
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im2.png" alt=""/>
                        </div>

                    </div>
                    <div className="lineinfo__email">
                        <img src="/images/icon_ma.png" alt=""/>
                        <a href="#">superuser@gmail.com</a>
                    </div>
                    <div className="lineinfo__status">
                        <span></span>
                    </div>
                </div>
                <div className="lineinfo__body">
                    <div className="lineinfo__top">
                        <div className="lineinfo__day">
                            <img src="/images/calendar.png" alt=""/>
                            <span>23.09.2020</span>
                        </div>
                        <div className="lineinfo__time">
                            <img src="/images/clokck.png" alt=""/>
                            <span>13:45:58</span>
                        </div>
                        <div className="lineinfo__active">
                            <div className="lineinfo__activeins lineinfo__activeins_red">Inactive</div>
                        </div>
                        <div className="lineinfo__user lineinfo__user_red"><img src="/images/user_red.png"
                                                                                alt=""/> Natalia Familia</div>
                        <div className="lineinfo__details">
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im2.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im3.png" alt=""/>
                            </div>
                        </div>
                        <div className="lineinfo__email">
                            <img src="/images/icon_ma.png" alt=""/>
                            <a href="#">superuser@gmail.com</a>
                        </div>
                        <div className="lineinfo__status">
                            <span></span>
                        </div>
                    </div>
                    <div className="lineinfo__top">
                        <div className="lineinfo__day">
                            <img src="/images/calendar.png" alt=""/>
                            <span>23.09.2020</span>
                        </div>
                        <div className="lineinfo__time">
                            <img src="/images/clokck.png" alt=""/>
                            <span>13:45:58</span>
                        </div>
                        <div className="lineinfo__active">
                            <div className="lineinfo__activeins">Active</div>
                        </div>
                        <div className="lineinfo__user "><img src="/images/user_green.png" alt=""/> Natalia Familia
                        </div>
                        <div className="lineinfo__details">
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im.png" alt=""/>
                            </div>
                            <div className="lineinfo__detailsitem">
                                <img src="/images/im2.png" alt=""/>
                            </div>

                        </div>
                        <div className="lineinfo__email">
                            <img src="/images/icon_ma.png" alt=""/>
                            <a href="#">superuser@gmail.com</a>
                        </div>
                        <div className="lineinfo__status">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="lineinfo__top">
                    <div className="lineinfo__day">
                        <img src="/images/calendar.png" alt=""/>
                        <span>23.09.2020</span>
                    </div>
                    <div className="lineinfo__time">
                        <img src="/images/clokck.png" alt=""/>
                        <span>13:45:58</span>
                    </div>
                    <div className="lineinfo__active">
                        <div className="lineinfo__activeins">Active</div>
                    </div>
                    <div className="lineinfo__user "><img src="/images/user_green.png" alt=""/> Natalia Familia</div>
                    <div className="lineinfo__details">
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im.png" alt=""/>
                        </div>
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im2.png" alt=""/>
                        </div>
                        <div className="lineinfo__detailsitem">
                            <img src="/images/im3.png" alt=""/>
                        </div>
                    </div>
                    <div className="lineinfo__email">
                        <img src="/images/icon_ma.png" alt=""/>
                        <a href="#">superuser@gmail.com</a>
                    </div>
                    <div className="lineinfo__status">
                        <span></span>
                    </div>
                </div>
            </div>
            </CSSTransition>
        </div>
    );
};

