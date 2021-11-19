import {ALL_USER_DATA} from './actions'
const initialState = {
    value:{
        email:'',
        messageCount:0,
        isVerify:false
    }

}

export const AlluserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_USER_DATA: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}