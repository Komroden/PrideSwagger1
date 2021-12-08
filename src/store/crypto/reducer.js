import {CRYPTO_DATA} from './actions'
const initialState = {
    value:[]
}

export const cryptoDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case CRYPTO_DATA: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}