import React from 'react';


export const VoteItem = ({title,variants,votesBars,all}) => {

    return (
        <div className="voice_row">
            <div className="voice_left">
                <div className="voice_title">{title}</div>
                <ul>
                    {variants.map((item,index)=> <li key={index}   >
                        <div className="voice_numb_li">{index+1}</div>
                        <div className="voice_text_li">{item}
                        </div>
                    </li>)}

                </ul>
            </div>
            <div className="voice_right">
                {votesBars.map((item,index)=>
                    <div key={index} className="voice_right_item">
                        <div className="voice_right_top">
                            <div className="voice_right_title">{item.name}</div>
                            <div className="voice_right_percent">{(item.value)*100}%</div>
                        </div>
                        <div className="voice_right_line">
                            <div className={"progressbar progressbar" +index.toString()} style={{width: `${(item.value)*100}%`}}/>
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
        </div>
    );
};

