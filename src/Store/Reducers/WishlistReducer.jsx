import { ADD_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED, UPDATE_WISHLIST_RED } from "../Constants"
export function WishlistReducer(state = [], action) {
    switch (action.type) {
        case ADD_WISHLIST_RED:
            state.push(action.data)
            return state
        case GET_WISHLIST_RED:
            return action.data
        case DELETE_WISHLIST_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        case UPDATE_WISHLIST_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        default:
            return state
    }
}