import React, {useCallback} from 'react';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {openMenu} from "../../../../store/menu/actions";

export const MenuRightLinkItem = ({path,title,linkClassName}) => {

    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const {push}=useHistory()
    const handlePush=() => {
        push(path)
        setName()
    }
    return (
        <a className={linkClassName?linkClassName:''} onClick={handlePush}>{title}</a>
    );
};

