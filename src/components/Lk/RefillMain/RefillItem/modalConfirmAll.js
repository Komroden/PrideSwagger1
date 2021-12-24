import React from 'react';
import Fade from "@mui/material/Fade";

export const ModalConfirmAll = ({open,setOpen,comission,wallets,value,setSuccess}) => {
    return (
        <Fade  in={open}>
            <div className='modal__wrapper'>
                <div  className='modal__text withdraw__modalWrapper'>
                    <div >Подтверждаете операцию?</div>
                    <div style={{marginTop:'10px'}} >{'Вывод '+value+' на кошелек '+wallets}</div>
                    <div style={{marginTop:'10px'}}>{'Комиссия '+comission}</div>
                    <div className="deal_item_buttonGroup">
                        <button onClick={()=>setOpen(false)} className="form_sbmOpen texp_button_modal deal_button_notConfirm" >Нет</button>
                        <button onClick={()=> {
                            setOpen(false)
                            setSuccess(true)
                        }} className="form_sbmOpen texp_button_modal deal_button_Confirm" >Да</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

