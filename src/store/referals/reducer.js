import {REFERALS} from './actions'
const initialState = {
    value:[]
}

export const referalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFERALS: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}