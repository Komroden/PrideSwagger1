import React, {useCallback, useEffect} from 'react';
import './style.scss';
import {LkLeftMenu} from "../../../components/Lk/LkLeftMenu";
import {LkHomeHeader} from "../../../components/Lk/LkHomeMain/LkHomeHeader";
import {LkMainHeaderTop} from "../../../components/Lk/LkHomeMain/LkMainHeaderTop";
import {LkHomeMain} from "../../../components/Lk/LkHomeMain";
import {LkHomeRightSlidebar} from "../../../components/Lk/LkHomeMain/LkHomeRightSlidebar";
import {useDispatch, useSelector} from "react-redux";
import {useFetch} from "../../../hooks/useFetch";
import {Votes} from "../../../store/votes/actions";




export const LkHome = () => {
    const { auth } = useSelector((state) => state);
    // const { data }=useFetch('http://127.0.0.1:8000/api/contest/show-post',{
    //     method:'GET',
    //     headers:{
    //         "accept": "application/json",
    //         'Authorization':`Bearer ${auth.token}`}
    // })
    // const dispatch = useDispatch();
    // const setVotes = useCallback(() => {
    //     dispatch(Votes(data))
    // }, [dispatch,data]);
    // useEffect(()=>{
    //     setVotes()
    // },[data])

    // const {data,loading,error}=useFetch('http://lk.pride.kb-techno.ru/api/Profile/requisites',{
    //             method:'GET',
    //     headers:{'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Authorization':`Bearer ${auth.token}`}
    // })


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

