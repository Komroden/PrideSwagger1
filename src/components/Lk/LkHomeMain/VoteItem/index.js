import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {SnackBar} from "../../../Home/Snackbar";


export const VoteItem = ({title,votesBars,all,isVotesUser}) => {
    const {auth} = useSelector((state) => state);

    const [openSnack,setOpenSnack]=useState({
        status:false,
        text:'',
        color:'error'
    })

    const handleSubmit=(id)=>{
        if(auth.token) {
            fetch(`http://lk.pride.kb-techno.ru/api/Poll/vote/${id}`, {
                method: 'POST',
                headers: {
                    'accept': 'application/octet-stream',
                    'Authorization': `Bearer ${auth.token}`
                },
                body:''
            })
                .then(res => {
                    setOpenSnack({
                        status:true,
                        text:'Вы проголосовали!',
                        color:'success'
                    })
                    res.text()
                })
                .catch(error=>console.log(error))

        }
    }

    return (
        <div className="voice_row">
            <div className="voice_left">
                <div className="voice_title">{title}</div>
                <ul>
                    {votesBars.map((item,index)=> <li style={{pointerEvents:isVotesUser?'none':''}} className={item.selectedByUser&&isVotesUser?'active_votes_li':''}  onClick={()=>!isVotesUser?handleSubmit(item.id):()=>{}} key={item.id}   >
                        <div style={{pointerEvents:isVotesUser?'none':''}} className={item.selectedByUser&&isVotesUser?"voice_numb_li active_votes_number":'voice_numb_li'}>{index+1}</div>
                        <div style={{pointerEvents:isVotesUser?'none':''}} className={item.selectedByUser&&isVotesUser?"voice_text_li active_votes_text":'voice_text_li'}>{item.answer}
                        </div>
                    </li>)}

                </ul>
            </div>
            <div className="voice_right">
                {votesBars.map((item,index)=>
                    <div key={item.id} className="voice_right_item">
                        <div className="voice_right_top">
                            <div className="voice_right_title">{item.answer}</div>
                            <div className="voice_right_percent">{Math.floor((item.votesCount/all)*100)}%</div>
                        </div>
                        <div className="voice_right_line">
                            <div className={"progressbar progressbar" +index.toString()} style={{width: `${(item.votesCount/all)*100}%`}}/>
                        </div>
                    </div>

                )}
            </div>
            {/*<div className="voice_pagination">*/}
            {/*    <ul>*/}
            {/*        <li className="active">*/}
            {/*            <a href="#">1</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href="#">2</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href="#">3</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href="#">4</a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <SnackBar open={openSnack} setOpen={setOpenSnack}/>
        </div>
    );
};

