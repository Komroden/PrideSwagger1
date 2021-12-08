import  {useEffect, useState} from 'react';

export const UseYears = (years) => {
    const [text,setText]=useState('')
    useEffect(()=>{
        let count = years % 100;
        if (count >= 5 && count <= 20) {
            setText('лет')
        } else {
            count = count % 10;
            if (count === 1) {
                setText('год')
            } else if (count >= 2 && count <= 4) {
                setText('года')
            } else {
                setText('лет')
            }
        }
    },[years])
    return (
        {text}
    );
};

