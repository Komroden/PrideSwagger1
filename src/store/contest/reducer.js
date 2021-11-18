import {CONTESTS} from './actions'
const initialState = {
    value:[]



}

export const contestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTESTS: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}