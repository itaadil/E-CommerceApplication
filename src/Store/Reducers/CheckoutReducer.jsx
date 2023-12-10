import { ADD_CHECKOUT_RED, DELETE_CHECKOUT_RED, GET_CHECKOUT_RED, UPDATE_CHECKOUT_RED } from "../Constants"
export function CheckoutReducer(state = [], action) {
    switch (action.type) {
        case ADD_CHECKOUT_RED:
            state.push(action.data)
            return state
        case GET_CHECKOUT_RED:
            return action.data
        case DELETE_CHECKOUT_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        case UPDATE_CHECKOUT_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        default:
            return state
    }
}