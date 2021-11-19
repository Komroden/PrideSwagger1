import React, {useCallback, useEffect, useState} from 'react';
import './style.scss';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkMainHeaderTop} from "../../../components/Lk/LkHomeMain/LkMainHeaderTop";
import {LkHomeMain} from "../../../components/Lk/LkHomeMain";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {useDispatch, useSelector} from "react-redux";
import {setContestsList} from "../../../store/contest/actions";
import {AllUserData} from "../../../store/allInfoUser/actions";



export const LkHome = () => {
    const { auth } = useSelector((state) => state);
    const [contest,setContest]= useState([])
    const [allInfo,setAllInfo]= useState({})
    const dispatch=useDispatch()
    const setContests = useCallback(() => {
        dispatch(setContestsList(contest))
    }, [dispatch,contest]);
    const setInfo = useCallback(() => {
        dispatch(AllUserData(allInfo))
    }, [dispatch,allInfo]);

    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/Contest/contest-list',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => res.json())
            .then((body)=>{
                setContest(body)
            })
            .catch((e) => {
                console.log(e.message);
            });
    },[auth.token])
    useEffect(()=>{
        setContests()
    },[contest])
    useEffect(()=>{
        setInfo()
    },[allInfo])
    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/Partners/current',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => res.json())
            .then((body)=>{
                setAllInfo(body)
            })
            .catch((e) => {
                console.log(e.message);
            });
    },[auth.token])



    return (
        <div className='bodyLk full_content bg_fullcontent'>
<LkLeftMenu/>
      <div className='main_content'>
<LkHomeHeader title={'Личный кабинет'}/>
      <div className='main_content_row'>
          <div className="main_content_central">
              <LkMainHeaderTop/>
              <LkHomeMain/>
          </div>
          <LkHomeRightSlidebar/>
      </div>
      </div>
        </div>
    );
};

