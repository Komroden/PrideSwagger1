import  {useState} from 'react';
import {useValidation} from "./useValidation";

export const useInputV = (initialValue,validations) => {
    const [value,setValue]=useState(initialValue);
    const [isDirty,setDirty]=useState(false);
    const valid=useValidation(value,validations);

    const onChange=(e)=>{
        setValue(e.target.value)
    }

    const onBlur =(e)=>{
        setDirty(true)
    }
    const onReset=()=>{
        setValue('')
    }

    return {
        value,
        onChange,
        onBlur,
        onReset,
        isDirty,
        ...valid,
        setDirty
    }
};

