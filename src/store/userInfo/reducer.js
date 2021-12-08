import {USER_DATA} from './actions'
const initialState = {
    value:{
        userInfo:{
            login:''
        },
        partnerInfo:{
            fullName:'',
            id:null
        }
    }

}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}