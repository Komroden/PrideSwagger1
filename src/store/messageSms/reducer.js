import {OPEN_MESSAGE_SMS,OPEN_SNACK_BAR} from './actions'
const initialState = {
    openMessage: false,
    openSnack:{
        status:false,
        text:'',
        color:'error'}


}

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_MESSAGE_SMS: {
            return {
                ...state,
                openMessage: !state.openMessage
            }

        }
        case OPEN_SNACK_BAR: {
            return {
                ...state,
                openSnack: action.payload
            }

        }

        default:
            return state
    }
}