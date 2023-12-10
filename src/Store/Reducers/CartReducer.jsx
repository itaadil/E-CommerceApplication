import { ADD_CART_RED, DELETE_CART_RED, GET_CART_RED, UPDATE_CART_RED } from "../Constants"
export function CartReducer(state = [], action) {
    switch (action.type) {
        case ADD_CART_RED:
            state.push(action.data)
            return state
        case GET_CART_RED:
            return action.data
        case DELETE_CART_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        case UPDATE_CART_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        default:
            return state
    }
}