import React from 'react';
import Slide from '@mui/material/Slide';
import {useImage} from "../../../../hooks/useImage";
import {useHistory} from "react-router";

export const LkHomeMainLiderTopItem = ({url,number,isVisible,id}) => {
    const {push}=useHistory()
    const {pic}=useImage(url)
    const handlePush=(e)=>{
        e.preventDefault()
        push(`/user${id}`)
    }

    return (
        <Slide direction="left" in={!isVisible}  unmountOnExit mountOnEnter>
        <div className="lider_top_item" >
            <a href="/" onClick={handlePush} className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src={pic} alt=""/>
									</span>
                <span className="green_lin"/>
                <span className="number_lin">{'#'+number}</span>
            </a>
        </div>
        </Slide>
    );
};

