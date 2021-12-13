import React from 'react';
import {Line} from "../MainTitle/GreyLine";
import {LineTitle} from "../LineTitle";
import {useImage} from "../../../hooks/useImage";

 export const OfferImgMain = ({url,title,text}) => {
     const {pic}=useImage(url)
    return (
<>
        <Line/>
     <div className="main_for_all_pages">
         <LineTitle title={title}/>
            <p style={{textAlign: 'center'}}>
                <img src={pic} alt=""/>
            </p>
         <div className="">
             <div className="about_title">{title}</div>
             <div className="about_descr">
                 <p dangerouslySetInnerHTML={{__html:
                     text}}/>

             </div>
         </div>
            <p style={{textAlign: 'center'}}>
                <img src="/images/text_img2.jpg" alt=""/>
            </p>
        </div>
    </>
    );
};

