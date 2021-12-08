import React, {useCallback} from 'react';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {openLeftMenu} from "../../../../store/leftMenu/actions";


export const LkLeftMenuOpenSubmenu = ({title,path}) => {
    const {push}=useHistory()
    const dispatch = useDispatch();
    const openMenu = useCallback(() => {
        dispatch(openLeftMenu())
    }, [dispatch]);
    const handlePush=(e) => {
        e.preventDefault()
        push(path)
        openMenu()
    }

    return (
        <li>
            <a href={'/'} onClick={handlePush} >{title}</a>
        </li>
    );
};

