import {CONTESTS_ACTIVE,CONTESTS_PAST} from './actions'
const initialState = {
    active:[],
    past:[]



}

export const contestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTESTS_ACTIVE: {
            return {
                ...state,
                active:action.payload
            }
        }
        case CONTESTS_PAST: {
            return {
                ...state,
                past:action.payload
            }
        }

        default:
            return state
    }
}