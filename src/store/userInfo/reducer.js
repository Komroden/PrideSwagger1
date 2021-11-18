import {USER_DATA,USER_DATA_UPDATE} from './actions'
const initialState = {
    value:{
        userInfo:{
            login:''
        }
    },
    // isUpdate:false

}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA: {
            return {
                ...state,
                value:action.payload
            }
        }
        // case USER_DATA_UPDATE: {
        //     return {
        //         ...state,
        //         isUpdate:!state.isUpdate
        //     }
        // }

        default:
            return state
    }
}