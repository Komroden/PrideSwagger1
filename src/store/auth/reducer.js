import {LOGOUT_USER, REGIST_USER} from './actions'
const initialState = {
    token:null,
    refresh_token:null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGIST_USER: {
            return {
                ...state,
                token: action.payload.token,
                refresh_token: action.payload.refresh_token
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                token: null,
                refresh_token:null
            }
        }
        default:
            return state
    }
}