import React, {useState} from 'react';

import Collapse from '@mui/material/Collapse';

export const HomeFaqItem = ({answer,question}) => {
    const [showFaq,setShowFaq]=useState(false);
    return (
        <div onClick={()=>setShowFaq(!showFaq)} className="faq_tabs_item wow slideInLeft" data-wow-duration="2s">
            <div  className="faq_tabs_title">{question}</div>
            <Collapse in={showFaq}>
                <div className="faq_tabs_body">{answer}
                </div>
            </Collapse>
        </div>
    );
};

