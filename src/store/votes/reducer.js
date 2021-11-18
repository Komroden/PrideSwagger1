import {VOTES} from './actions'
const initialState = {
    value:{
        post:[{
            question:'',
            answers:[{
                name:'',
                value: '',
            }],
            all_answers:[],
            all:[]
        }]
    }

}

export const votesReducer = (state = initialState, action) => {
    switch (action.type) {
        case VOTES: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}