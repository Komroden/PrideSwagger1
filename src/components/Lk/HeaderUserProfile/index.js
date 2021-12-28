import React, {useCallback} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {UserLogout} from "../../../store/auth/actions";
import {useSubstringText} from "../../../hooks/useSubstringText";

export const LkHeaderUserProfile = ({path,homeClassName,textClassName,buttonClassName}) => {
    const { auth,userData,allInfoUser } = useSelector((state) => state);

    const dispatch = useDispatch();
    const setLogout = useCallback(() => {
        dispatch(UserLogout())
    }, [dispatch]);
    const handleLogout =(e)=>{
        e.preventDefault()
        fetch(`http://lk.pride.kb-techno.ru/api/Auth/logout?refreshToken=${auth.refresh_token}`,{
            method:'DELETE',
            headers:{'Accept': 'application/octet-stream',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(()=>{
                setLogout()
                sessionStorage.clear()
            })
            .catch(console.error);
    };
    const {push}=useHistory()
    const handlePushLogin=(e)=>{
        e.preventDefault()
        push('/login')
    }
    const handlePush=() => {
        push(path)
    }
    const login=useSubstringText(userData.value.userInfo.login,10)
    return (
        <div className={"user_part "+homeClassName}>
            <div className={"user_part_text "+textClassName}>
                <div className="user_part_hi">Добрый день</div>
                <div className="user_part_name">{userData.value.userInfo?login:'User'}</div>
                <a href={'/'} onClick={auth.token!=null?handleLogout:handlePushLogin} className={buttonClassName?`user_part_exit ${buttonClassName}`:"user_part_exit"}>{auth.token!=null?'Выход':'Вход'}</a>
            </div>
            <div onClick={handlePush} className="user_part_logo">
                <div className="user_part_logo_img">
                    <img src={allInfoUser.avatar?allInfoUser.avatar:'/images/logo_dark.png'} alt=""/>
                </div>
            </div>
        </div>
    );
};

