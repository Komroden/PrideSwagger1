import {CRYPTO_DATA} from './actions'
const initialState = {
    value:{
        1:{name:'',
            total_supply:0,
            quote:{
                USD:{
                    market_cap:0,
                    percent_change_1h:0,
                    price:0,
                    volume_24h:0}}
        },
        2:{name:'',
            total_supply:0,
            quote:{
                USD:{
                    market_cap:0,
                    percent_change_1h:0,
                    price:0,
                    volume_24h:0}}
        },
        825:{name:'',
            total_supply:0,
            quote:{
                USD:{
                    market_cap:0,
                    percent_change_1h:0,
                    price:0,
                    volume_24h:0}}
        },
        1027:{name:'',
            total_supply:0,
            quote:{
                USD:{
                    market_cap:0,
                    percent_change_1h:0,
                    price:0,
                    volume_24h:0}}
        },
        1831:{name:'',
            total_supply:0,
            quote:{
                USD:{
                    market_cap:0,
                    percent_change_1h:0,
                    price:0,
                    volume_24h:0}}
        },
        1958:{name:'',
            total_supply:0,
            quote:{
                USD:{
                    market_cap:0,
                    percent_change_1h:0,
                    price:0,
                    volume_24h:0}}
        }

}}

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