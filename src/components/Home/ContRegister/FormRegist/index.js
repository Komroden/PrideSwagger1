import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {UserInfo} from "../../../../store/user/actions";

import Fade from '@mui/material/Fade';
import './style.scss';
import {useInputV} from "../../../../hooks/useInputV";

export const FormRegist = ({status}) => {
    const[value,setValue]=useState({
        login:'',
        email:'',
        firstName:'',
        lastName:'',
        password:'',
        confirmPassword:'',
        phoneNumber:'',
        middleName:'',
        inviterId:''
    })
    const [isLogin,setIsLogin]=useState(false)
    const userName=useInputV('',{isEmpty:true});
    const email=useInputV('',{isEmpty:true,isEmail:true});
    const name=useInputV('',{isEmpty:true});
    const secondName=useInputV('',{isEmpty:true});
    const password=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const passwordConfirm=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const phoneNumber=useInputV('',{isEmpty:true,isPhone:true});
    const patronymic=useInputV('');
    const idInvited=useInputV(1);




    const dispatch = useDispatch();
    const setUser = useCallback(() => {
        dispatch(UserInfo(value))
    }, [dispatch,value]);
    const handleWriteUserInfo=(e)=>{

        setValue({
            login:userName.value,
            email:email.value,
            firstName:name.value,
            lastName:secondName.value,
            password:password.value,
            confirmPassword:password.value,
            phoneNumber:phoneNumber.value,
            middleName:patronymic.value,
            inviterId:Number(idInvited.value)})
    }
    useEffect(()=>{
        if (!userName.value) return
        setIsLogin(true)

        fetch(`http://lk.pride.kb-techno.ru/api/Auth/is-login-registered?login=${userName.value}`,{
            method:'GET',
            headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then(res =>res.json())
            .then(body=>{
                if (body===false) {
                    return ;
                }
                if (body===true ){
                    let error = new Error('?????????? ??????????');
                    error.response = body;
                    throw error
                }
            })
            .then(function(body) {
                setIsLogin(true)
            })
            .catch((e) => {
                setIsLogin(false)
            });
    },[userName.value])

    useEffect(() => {
        setUser()
    },[value,setUser])
    return (
        <Fade  in={status}  unmountOnExit>
            <div>
            <span className="inp">

            <input  onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value} name='email' type='email' placeholder='Email' className=" inputp"
            />
                {(email.isDirty && email.isEmpty) && <span className="required_fail"> ???????????????????????? ????????</span>}
                {(email.isDirty && email.emailError &&!email.isEmpty) && <span className="required_fail"> ???????????????? ????????????</span>}
            </span>

                <span className="inp">
                <input type="text" placeholder="Phone number" className=" inputp" onBlur={e => phoneNumber.onBlur(e)} onChange={e=>phoneNumber.onChange(e)} value={phoneNumber.value}
                />
                    {(phoneNumber.isDirty && phoneNumber.isEmpty) && <span className="required_fail"> ???????????????????????? ????????</span>}
                    {(phoneNumber.isDirty && phoneNumber.phoneError &&!phoneNumber.isEmpty) && <span className="required_fail"> ???????????????? ????????????</span>}
            </span>
                <span className="inp">
                <input type="text" placeholder="Login" className=" inputp" required onBlur={e => userName.onBlur(e)} onChange={e=>userName.onChange(e)} value={userName.value}/>
                    {(userName.isDirty && userName.isEmpty) && <span className="required_fail"> ???????????????????????? ????????</span>}
                    {(userName.isDirty && !isLogin) && <span className="required_fail">?????????? ??????????</span>}
            </span>
                <span className="inp">
                <input type="text" placeholder="Name" className=" inputp" required onBlur={e => name.onBlur(e)} onChange={e=>name.onChange(e)} value={name.value}
                />
                    {(name.isDirty && name.isEmpty) && <span className="required_fail"> ???????????????????????? ????????</span>}

            </span>
                <span className="inp">
                <input type="text" placeholder="Second Name" className=" inputp" required onBlur={e => secondName.onBlur(e)} onChange={e=>secondName.onChange(e)} value={secondName.value}
                />
                    {(secondName.isDirty && secondName.isEmpty) && <span className="required_fail"> ???????????????????????? ????????</span>}

            </span>
                <span className="inp">
                <input type="text" placeholder="Patronymic" className=" inputp" required onBlur={e => patronymic.onBlur(e)} onChange={e=>patronymic.onChange(e)} value={patronymic.value}
                />

            </span>
                <span className="inp">
                <input type="password" placeholder="Password" className=" inputp" onBlur={e => password.onBlur(e)} onChange={e=>password.onChange(e)} value={password.value}
                />
                    {(password.isDirty && password.isEmpty) && <span className="required_fail"> ???????????????????????? ????????</span>}
                    {(password.isDirty && password.minLengthError&&!password.isEmpty) && <span className="required_fail">?????????????????????? ???????????? ???????????? 6 ????????????????</span>}
                    {(password.isDirty && password.maxLengthError&&!password.isEmpty) && <span className="required_fail">???????????????????????? ???????????? ???????????? 10 ????????????????</span>}

            </span>

                <span className="inp"><input type="password" placeholder="Confirm password" onBlur={e => passwordConfirm.onBlur(e)} onChange={e=>passwordConfirm.onChange(e)} value={passwordConfirm.value}
                                             className=" inputp"/>
                    {(passwordConfirm.isDirty && passwordConfirm.isEmpty) && <span className="required_fail"> ???????????????????????? ????????</span>}
                    {(passwordConfirm.value!==password.value && !passwordConfirm.isEmpty) && <span className="required_fail">???????????? ???? ??????????????????</span>}
            </span>

                <span className="inp">
                <input type='text' placeholder="Id ????????????????" className=" inputp" onBlur={e => idInvited.onBlur(e)} onChange={e=>idInvited.onChange(e)} value={idInvited.value}
                />
            </span>

                <div className="reemb_pasw check_b">
                    <input className="input_checkbox" type="checkbox" id="rad"/>
                    <label htmlFor="rad">
                        I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy
                        Policy</a>
                    </label>
                </div>
                <button disabled={!email.inputValid||
                !userName.inputValid||
                !name.inputValid||
                !secondName.inputValid||
                !password.inputValid||
                passwordConfirm.value!==password.value} onClick={handleWriteUserInfo} className="subm_form">??????????</button>

            </div>
        </Fade>

    );
};

