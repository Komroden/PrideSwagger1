import React, {useEffect, useState} from 'react';


import Collapse from '@mui/material/Collapse';

export const HomeFaqItem = ({answer,question,open,setOpen,id}) => {
    const [showFaq,setShowFaq]=useState(false);
    const [isCurrent,setIsCurrent]=useState(false)
    const handlePush=()=>{
        setShowFaq(true)
        setOpen(id)

    }
    useEffect(()=>{
        console.log(open)
        if(id===open) setIsCurrent(true)
        if(id!==open) setIsCurrent(false)
    },[id,open])


    return (
        <div onClick={handlePush} className="faq_tabs_item wow slideInLeft" data-wow-duration="2s">
            <div  className="faq_tabs_title">{question}</div>
            <Collapse in={showFaq&&isCurrent}>
                <div className="faq_tabs_body">{answer}
                </div>
            </Collapse>
        </div>
    );
};

