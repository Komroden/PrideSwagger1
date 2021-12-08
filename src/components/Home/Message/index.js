import React, {useCallback} from 'react';
import './style.scss'
import {useDispatch, useSelector} from "react-redux";

import Grow from '@mui/material/Grow';
import {openTimer} from "../../../store/timer/actions";
export const Message = () => {
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openTimer())
    }, [dispatch]);
    const { showMessage } = useSelector((state) => state);
    return (
        <Grow in={showMessage.showMessage}  unmountOnExit>
        <div className="open_popup">
            <div className="open_popup_row">
                <div className="close_popup">
                    <div onClick={setName} className="close_menu_btn">
                        <span className="before"/>
                        <span className="after"/>
                    </div>
                </div>
                <img src="/images/logo_dark.png" alt=""/>
                    <div className="pop_title">Some title</div>
                    <div className="pop_descr">
                        <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Doloribus esse nesciunt magnam,
                            eius
                            delectus, officia omnis animi nihil tempore odio necessitatibus ducimus sunt architecto
                            fugiat
                            dolorum consequatur, vero voluptates earum possimus deleniti saepe vitae inventore eaque
                            nemo ea.
                            Reiciendis, voluptatem eos est cumque inventore culpa eum accusamus. Repudiandae, nesciunt,
                            voluptatum.</p>
                    </div>
            </div>
        </div>
        </Grow>
    );
};

