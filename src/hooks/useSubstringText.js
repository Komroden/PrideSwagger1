import  {useEffect, useState} from 'react';

export const useSubstringText = (str,numberOfShow) => {
    const [newStr,setNewStr]=useState(str)
    useEffect(()=>{
        if(str.length>numberOfShow){
        setNewStr(str.substring(0,numberOfShow)+'...')
        }
        if(str.length<=numberOfShow){
            setNewStr(str)
        }
    },[str,numberOfShow])
    return (
        newStr
    );
};

