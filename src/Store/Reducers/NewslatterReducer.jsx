import { ADD_NEWSLATTER_RED, DELETE_NEWSLATTER_RED, GET_NEWSLATTER_RED } from "../Constants"
export function NewslatterReducer(state = [], action) {
    switch (action.type) {
        case ADD_NEWSLATTER_RED:
            state.push(action.data)
            return state
        case GET_NEWSLATTER_RED:
            return action.data
        case DELETE_NEWSLATTER_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        default:
            return state
    }
}