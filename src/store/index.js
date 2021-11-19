import { createStore, combineReducers,compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import {menuReducer} from "./menu/reducer";
import {timerReducer} from "./timer/reducer";
import {leftMenuReducer} from "./leftMenu/reducer";
import {userReducer} from "./auth/reducer";
import {userInfoReducer} from "./user/reducer";
import {userDataReducer} from "./userInfo/reducer";
import {messageReducer} from "./messageSms/reducer";
import {cryptoDataReducer} from "./crypto/reducer";
import {votesReducer} from "./votes/reducer";
import {newsReducer} from "./news/reducer";
import {contestsReducer} from "./contest/reducer";
import {AlluserDataReducer} from "./allInfoUser/reducer";






const rootReducer = combineReducers({
    showMenu: menuReducer,
    showMessage:timerReducer,
    auth:userReducer,
    leftMenu:leftMenuReducer,
    userInfo:userInfoReducer,
    userData:userDataReducer,
    messageSms:messageReducer,
    cryptoData:cryptoDataReducer,
    votes:votesReducer,
    news:newsReducer,
    contests:contestsReducer,
    allInfoUser:AlluserDataReducer



})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))