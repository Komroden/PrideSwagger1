import React, {useEffect, useState} from 'react';

export const useValidation = (value,validations) => {
    const [isEmpty,setEmpty]=useState(true);
    const [minLengthError,setMinLengthError]=useState(false);
    const [maxLengthError,setMaxLengthError]=useState(false);
    const [emailError,setEmailError]=useState(false);
    const [phoneError,setPhoneError]= useState(false)
    const [inputValid,setInputValid]= useState(false)
useEffect(()=>{
    for (const validation in validations) {
        switch (validation) {
            case 'minLength':
                value.length<validations[validation]?setMinLengthError(true):setMinLengthError(false)
                break;

            case 'isEmpty':
                value? setEmpty(false):setEmpty(true);
                break;
            case 'maxLength':
                value.length>validations[validation]?setMaxLengthError(true):setMaxLengthError(false)
                break;
            case 'isEmail':
                const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                regEmail.test(String(value).toLowerCase())? setEmailError(false):setEmailError(true)
            break;
            case 'isPhone':
                const regPhone= /^\+[7][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
                regPhone.test(value)? setPhoneError(false):setPhoneError(true)

        }
    }
})

    useEffect(()=>{
        if(isEmpty||minLengthError||maxLengthError||emailError||phoneError){
            setInputValid(false)
        }else {
            setInputValid(true)
}
    },[isEmpty,minLengthError,maxLengthError,emailError])
    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        phoneError,
        inputValid
    }
};

