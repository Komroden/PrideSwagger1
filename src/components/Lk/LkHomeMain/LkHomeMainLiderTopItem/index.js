import React from 'react';
import Slide from '@mui/material/Slide';

export const LkHomeMainLiderTopItem = ({url,number,isVisible}) => {

    return (
        <Slide direction="left" in={!isVisible} unmountOnExit>
        <div className="lider_top_item" >
            <a href="#" className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src={url} alt=""/>
									</span>
                <span className="green_lin"></span>
                <span className="number_lin">{number}</span>
            </a>
        </div>
        </Slide>
    );
};

