import {ALL_USER_DATA,USER_AVATAR} from './actions'
const initialState = {
    value:{
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
    avatar:''

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

        default:
            return state
    }
}