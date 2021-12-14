import React from 'react';
import Fade from "@mui/material/Fade";

export const ModalConfirm = ({open,setOpen,setSuccess,isDate}) => {
    const date= new Date().toLocaleDateString()
    return (
        <Fade  in={open}>
            <div style={{position:'absolute'}} className='modal__wrapper'>
                <div className='modal__text priceModal_noPadding'>
                    <div onClick={()=>setOpen(false)}  className="close_menu_btn close_window">
                        <span style={{height:'20px',right:'10px'}} className="before arrow_color"/>
                        <span style={{height:'20px',right:'10px'}} className="after arrow_color"/>
                    </div>
                    <div className='text__wrapper'>
                        <div className="balance_sidebar_title texp_price_modal ">Вы уверены?</div>
                        {isDate&&<p>{'Возобновление программы  будет от: '}<span style={{color: '#36a83d'}}>{date}</span></p>}
                        <div className="deal_item_buttonGroup">
                            <button onClick={()=>setOpen(false)} className="form_sbmOpen texp_button_modal deal_button_notConfirm" >Нет</button>
                            <button onClick={()=> {
                                setOpen(false)
                                setSuccess(true)
                            }} className="form_sbmOpen texp_button_modal deal_button_Confirm" >Да</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

