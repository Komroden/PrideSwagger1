import './App.scss'
import React, {useCallback, useEffect, useState} from 'react';
import WOW from "wowjs";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch} from "react-router";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Faq} from "./pages/Faq";
import {Review} from "./pages/Review";
import {Contact} from "./pages/Contact";
import {FullNews} from "./pages/FullNews";
import {AllNews} from "./pages/AllNews";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {LkHome} from "./pages/Lk/Home";
import {setMinute, setPrice, setSeconds} from "./store/timer/actions";
import {LkUser} from "./pages/Lk/User";
import {LkUserTransactions} from "./pages/Lk/UserTransactions";
import {AddProg} from "./pages/AddProg";
import {Guest} from "./pages/Guest";
import {History} from "./pages/History";
import {Messages} from "./pages/Lk/Messages";
import {NewMessage} from "./pages/Lk/NewMessage";
import {News} from "./pages/Lk/News";
import {Refill} from "./pages/Lk/Refill";
import {ProgramMaxi} from "./pages/Lk/ProgramMaxi";
import {Program15} from "./pages/Lk/Program15";
import {ProgramMatrix} from "./pages/Lk/ProgramMatrix";
import {ProgramAuto} from "./pages/Lk/ProgramAuto";
import {ProgramTechnique} from "./pages/Lk/ProgramTechnique";
import {Draw} from "./pages/Lk/Draw";
import {Settings} from "./pages/Lk/Settings";
import {PrivateRoute} from "./hocs/PrivateRoute";
import {Offer} from "./pages/Lk/Offer";
import {OfferImg} from "./pages/Lk/OfferImg";
import {Output} from "./pages/Lk/Output";
import {Vote} from "./pages/Lk/Vote";


import {UserData} from "./store/userInfo/actions";

import {setNewsList} from "./store/news/actions";

import {Notifications} from "./pages/Lk/Notifications";
import {useTimerUp} from "./hooks/useTimerUp";




export function App() {
    const { showMessage,timerDown,auth,userData } = useSelector((state) => state);
    const dispatch = useDispatch();
    const[news,setNews]=useState([])
    const[value,setValue]=useState({

            userInfo:
                    {login:''}
                })
    const setUserData = useCallback(() => {
        dispatch(UserData(value))
    }, [dispatch,value]);
    useEffect(() => {
        setUserData()
    },[value])

    useEffect(()=>{
        if (!auth.token){
            setValue({

                userInfo:
                    {login:''}
            })
            return
        }
        fetch('http://lk.pride.kb-techno.ru/api/Main/info',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then((body)=>{
                setValue(body)
            })
            .catch((e) => {
                console.log(e.message);

            });
    },[auth.token])


    useEffect(()=>{
        new WOW.WOW({
            live:false,
            mobile: true,
        }).init();
    },[])

    const{seconds,minute,price}=useTimerUp()
    const setSecond = useCallback(() => {
        dispatch(setSeconds(seconds))
    }, [dispatch,seconds]);
    const setMinutes = useCallback(() => {
        dispatch(setMinute(minute))
    }, [dispatch,minute]);
    const setPrices = useCallback(() => {
        dispatch(setPrice(price))
    }, [dispatch,price]);


    useEffect(() => {
        setMinutes()
    },[minute])
    useEffect(() => {
        setPrices()
    },[price])
    useEffect(() => {
        setSecond()
    },[seconds])




    const setNewses = useCallback(() => {
        dispatch(setNewsList(news))
    }, [dispatch,news]);
    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/News/last',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => res.json())
            .then((body)=>{
                setNews(body)
            })

            .catch((e) => {
                console.log(e.message);
            });
    },[])
    useEffect(()=>{
        setNewses()
    },[news])

  return(
<div>
    <Switch>
        <Route  exact path='/'>
            <Home/>
        </Route>
        <Route  path='/about'>
            <About/>
        </Route>
        <Route path='/faq'>
            <Faq/>
        </Route>
        <Route  path='/review'>
            <Review/>
        </Route>
        <Route  path='/contact'>
            <Contact/>
        </Route>
        <Route  path='/full:id'>
            <FullNews/>
        </Route>
        <Route  path='/allNews'>
            <AllNews/>
        </Route>
        <Route  path='/login'>
            <Login/>
        </Route>
        <Route  path='/register'>
            <Registration/>
        </Route>
        <PrivateRoute auth={auth} path='/lk'>
            <LkHome/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/user'>
           <LkUser/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/transactions'>
            <LkUserTransactions/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/addProg'>
          <AddProg/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/guest'>
           <Guest/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/history'>
           <History/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/messages'>
           <Messages/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/notifications'>
            <Notifications/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/newMessage'>
            <NewMessage/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/lkNews'>
            <News/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/refill'>
            <Refill/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/programMaxi'>
          <ProgramMaxi/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/program15'>
           <Program15/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/programMatrix'>
          <ProgramMatrix/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/programAuto'>
            <ProgramAuto/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/technique'>
            <ProgramTechnique/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/draw'>
            <Draw/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/settings'>
            <Settings/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/offer'>
            <Offer/>
        </PrivateRoute>
        <Route  path='/offerImg'>
            <OfferImg/>
        </Route>
        <PrivateRoute auth={auth} path='/output'>
            <Output/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/vote'>
            <Vote/>
        </PrivateRoute>
    </Switch>

</div>


  )}

