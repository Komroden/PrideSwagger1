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
import {ProgramMaxiThree} from "./pages/Lk/ProgramMaxiThree";
import {ProgramMaxiTwo} from "./pages/Lk/ProgramMaxiTwo";
import {ChatList} from "./pages/Lk/ChatList";
import {Structure} from "./pages/Lk/Structure";
import {CryptoData} from "./store/crypto/actions";
import {UserRegistration} from "./store/auth/actions";
import { setContestsListActive, setContestsListPast} from "./store/contest/actions";
import {AllUserData, UserAvatar, UserWallets} from "./store/allInfoUser";
import {Votes} from "./store/votes/actions";
import {useToken} from "./hooks/useToken";
import {setReferalsList} from "./store/referals/actions";
import {useFetchWithTokenGet} from "./hooks/useFetchWithTokenGet";
import {useFetchWithoutTokenGet} from "./hooks/useFetchWithoutTokenGet";



const saveJSON = (key,data)=>
    sessionStorage.setItem(key,JSON.stringify(data));
const loadJSON=key=>
    JSON.parse(sessionStorage.getItem(key));


export function App() {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [isUpdateToken,setIsUpdateToken]=useState(0)


    const setTokens = useCallback(() => {
        dispatch(UserRegistration(loadJSON('keySwagger')))
    }, [dispatch]);//auth.token
    const header = useToken(auth.token)
    useEffect(()=>{
        if(auth.token&&header<100){


            const payload={
                token:{
                    access_token:auth.token,
                    refresh_token:auth.refresh_token
                }
            }
            fetch('http://lk.pride.kb-techno.ru/api/Auth/refresh-token',{
                method:'POST',
                headers:{'Content-Type': 'application/json',
                    'Accept': 'application/json'},
                    body:JSON.stringify(payload)
            })
                .then((res) => res.json())
                .then((body)=>{
                    setIsUpdateToken(isUpdateToken+1)
                    saveJSON('keySwagger', {token:body.access_token,
                    refresh_token:body.refresh_token })
                })

                .catch((e) => {
                    console.log(e.message);
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth,header])

    useEffect(()=>{
        if(loadJSON('keySwagger')){
            setTokens()
        }
    },[setTokens,auth.token,isUpdateToken])


    const[value,setValue]=useState({

            userInfo:
                    {login:''},
        partnerInfo:{
            fullName:'',
            id:null
        }
                })
    const setUserData = useCallback(() => {
        dispatch(UserData(value))
    }, [dispatch,value]);
    useEffect(() => {
        setUserData()
    },[value,setUserData])

    useEffect(()=>{
        if (!auth.token){
            setValue({

                userInfo:
                    {login:''},
                partnerInfo:{
                    fullName:'',
                    id:null
                }
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
    },[minute,setMinutes])
    useEffect(() => {
        setPrices()
    },[price,setPrices])
    useEffect(() => {
        setSecond()
    },[seconds,setSecond])
    // 07.12
    // const[crypto,setCrypto]=useState([])
    const crypto =useFetchWithoutTokenGet('http://lk.pride.kb-techno.ru/api/Main/currency-rates',[])
    const setCryptoData = useCallback(() => {
        dispatch(CryptoData(crypto.data))
    }, [dispatch,crypto.data]);
    // useEffect(()=>{
    //     fetch('http://lk.pride.kb-techno.ru/api/Main/currency-rates',{
    //         method:'GET',
    //         headers:{'Content-Type': 'application/json',
    //             'Accept': 'application/json'}
    //     })
    //         .then((res) => res.json())
    //         .then((body)=>setCrypto(body)
    //         )
    //         .catch((e) => {
    //             console.log(e.message);
    //         });
    //
    // },[])
    useEffect(()=>{
        if(!crypto.data) return
        setCryptoData()
    },[setCryptoData,crypto.data])



    // const[news,setNews]=useState([])
    const news=useFetchWithoutTokenGet('http://lk.pride.kb-techno.ru/api/News/last',[])
    const setNewses = useCallback(() => {
        dispatch(setNewsList(news.data))
    }, [dispatch,news.data]);
    // useEffect(()=>{
    //     fetch('http://lk.pride.kb-techno.ru/api/News/last',{
    //         method:'GET',
    //         headers:{'Content-Type': 'application/json',
    //             'Accept': 'application/json'}
    //     })
    //         .then((res) => res.json())
    //         .then((body)=>{
    //             setNews(body)
    //         })
    //
    //         .catch((e) => {
    //             console.log(e.message);
    //         });
    // },[])
    useEffect(()=>{
        setNewses()
    },[news.data,setNewses])



    // from Home AllInfo
    // const [contestActive,setContestActive]= useState([])
    const contestActive=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Contest/contest-list?onlyActive=true',[])
    // const [contestPast,setContestPast]= useState([])
    const contestPast=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Contest/contest-list?onlyActive=false',[])
    // const [allInfo,setAllInfo]= useState({
    //     balance:0,
    //     balanceBitcoin:0,
    //     balanceEthereum:0,
    //     balanceLitecoin:0,
    //     balanceUsdc:0
    // })
    const allInfo=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Partners/current',{
        value:{
            id:0
        },
        balance:0,
        balanceBitcoin:0,
        balanceEthereum:0,
        balanceLitecoin:0,
        balanceUsdc:0
    })

    const [pic,setPic]=useState('')
    const setContestsActive = useCallback(() => {
        dispatch(setContestsListActive(contestActive.data))
    }, [dispatch,contestActive.data]);
    const setContestsPast = useCallback(() => {
        dispatch(setContestsListPast(contestPast.data))
    }, [dispatch,contestPast.data]);
    const setInfo = useCallback(() => {
        dispatch(AllUserData(allInfo.data))
    }, [dispatch,allInfo.data]);
    const setAvatar = useCallback(() => {
        dispatch(UserAvatar(pic))
    }, [dispatch,pic]);

    // useEffect(()=>{
    //     if(auth.token){
    //     fetch('http://lk.pride.kb-techno.ru/api/Contest/contest-list?onlyActive=false',{
    //         method:'GET',
    //         headers:{
    //             'Accept': 'application/json',
    //             'Authorization':`Bearer ${auth.token}`}
    //     })
    //         .then((res) => res.json())
    //         .then((body)=>{
    //             setContestPast(body)
    //         })
    //         .catch((e) => {
    //             console.log(e.message);
    //         });
    //     }
    // },[auth.token])
    // useEffect(()=>{
    //     if(auth.token){
    //         fetch('http://lk.pride.kb-techno.ru/api/Contest/contest-list?onlyActive=true',{
    //             method:'GET',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'Authorization':`Bearer ${auth.token}`}
    //         })
    //             .then((res) => res.json())
    //             .then((body)=>{
    //                 setContestActive(body)
    //             })
    //             .catch((e) => {
    //                 console.log(e.message);
    //             });
    //     }
    // },[auth.token])
    useEffect(()=>{
        setContestsPast()
    },[setContestsPast,contestPast.data])
    useEffect(()=>{
        setContestsActive()
    },[setContestsActive,contestActive.data])
    useEffect(()=>{
        setInfo()
    },[setInfo,allInfo.data])
    useEffect(()=>{
        if (pic==='') return
        setAvatar()
    },[setAvatar,pic])
    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Partners/current', {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then((res) => res.json())
    //             .then((body) => {
    //                 setAllInfo(body)
    //             })
    //             .catch((e) => {
    //                 console.log(e.message);
    //             });
    //     }
    // },[auth.token])
    useEffect(()=>{
        if(auth.token) {
            if (!allInfo.data.image) return
            fetch(`http://lk.pride.kb-techno.ru/assets/Img/${allInfo.data.image}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/octet-stream',
                    'Authorization': `Bearer ${auth.token}`
                }

            })
                .then(res => setPic(res.url))
        }
    },[auth.token,allInfo.data])

    // votes


    const voteList=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Poll/poll-list',{items:[]})
    const setVote = useCallback(() => {
        dispatch(Votes(voteList.data))
    }, [dispatch,voteList.data]);
    useEffect(()=>{
        setVote()
    },[setVote,voteList.data])

    // useEffect(()=>{
    //     if(auth.token) {
    //         fetch('http://lk.pride.kb-techno.ru/api/Poll/poll-list', {
    //             method: 'GET',
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Authorization': `Bearer ${auth.token}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(body => setVoteList(body))
    //     }
    // },[auth.token])

    const referals=useFetchWithTokenGet('http://lk.pride.kb-techno.ru/api/Partners/structure',[])

    const setReferal = useCallback(() => {
        dispatch(setReferalsList(referals.data))
    }, [dispatch,referals.data]);
    useEffect(()=>{
        setReferal()
    },[setReferal,referals.data])

    // useEffect(()=>{
    //     if(auth.token){
    //         fetch('http://lk.pride.kb-techno.ru/api/Partners/structure',{
    //             method:'GET',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'Authorization':`Bearer ${auth.token}`}
    //         })
    //             .then((res) => res.json())
    //             .then(data=>setReferals(data))
    //             .catch((e) => {
    //                 console.log(e.message);
    //             });
    //     }
    // },[auth.token])


    //wallets
    const [wallets,setWallets]=useState([])
    const setRequisites = useCallback(() => {
        dispatch(UserWallets(wallets))
    }, [dispatch,wallets]);
    useEffect(()=>{
        if(auth.token) {
            fetch('http://lk.pride.kb-techno.ru/api/Profile/requisites', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => res.json())
                .then(body => setWallets(body.cryptoWallets))
        }
    },[auth.token])
    useEffect(()=>{
        setRequisites()
    },[wallets,setRequisites])


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
        <Route  path='/register:partnerId'>
            <Registration/>
        </Route>
        <PrivateRoute auth={auth}  path='/structure'>
            <Structure/>
        </PrivateRoute>
        <PrivateRoute auth={auth}  path='/lk'>
            <LkHome/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/user:id'>
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
        <PrivateRoute auth={auth} path='/chats'>
            <ChatList/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/messages:id/:name'>
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
        <PrivateRoute auth={auth} path='/programMaxi2'>
            <ProgramMaxiTwo/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/programMaxi3'>
            <ProgramMaxiThree/>
        </PrivateRoute>
        {/*<PrivateRoute auth={auth} path='/program15'>*/}
        {/*   <Program15/>*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute auth={auth} path='/programMatrix'>*/}
        {/*  <ProgramMatrix/>*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute auth={auth} path='/programAuto'>*/}
        {/*    <ProgramAuto/>*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute auth={auth} path='/technique'>*/}
        {/*    <ProgramTechnique/>*/}
        {/*</PrivateRoute>*/}
        <PrivateRoute auth={auth} path='/draw'>
            <Draw/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/settings'>
            <Settings/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/offer'>
            <Offer/>
        </PrivateRoute>
        <Route  path='/lkNews:id'>
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


