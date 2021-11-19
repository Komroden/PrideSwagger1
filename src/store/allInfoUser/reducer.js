import {USER_DATA} from './actions'
const initialState = {
    value:{
        userInfo:{
            login:''
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