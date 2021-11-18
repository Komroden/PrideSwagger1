import { USER_INFO  } from './actions'
const initialState = {
    value:{}

}

export const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}