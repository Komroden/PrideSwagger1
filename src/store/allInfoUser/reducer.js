import {ALL_USER_DATA,USER_AVATAR,USER_WALLETS} from './actions'
const initialState = {
    value:{
        balanceBitcoin:0,
        balanceEthereum:0,
        balanceLitecoin:0,
        balanceUsdc:0,
        email:'',
        messageCount:0,
        isVerify:false,
        firstName:'',
        middleName:'',
        lastName:'',
        phoneNumber:'',
        country:'',
        city:'',
        birthDate:'',
        telegram:'',
        vkontakte:'',
        rang:null,
        balance:0,
    },
    avatar:'',
    wallets:[],


}

export const AlluserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_USER_DATA: {
            return {
                ...state,
                value:action.payload
            }
        }
        case USER_AVATAR: {
            return {
                ...state,
                avatar:action.payload
            }
        }
        case USER_WALLETS: {
            return {
                ...state,
                wallets:action.payload
            }
        }

        default:
            return state
    }
}