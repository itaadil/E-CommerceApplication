import { ADD_CONTACT_RED, DELETE_CONTACT_RED, GET_CONTACT_RED, UPDATE_CONTACT_RED } from "../Constants"
export function ContactReducer(state = [], action) {
    switch (action.type) {
        case ADD_CONTACT_RED:
            state.push(action.data)
            return state
        case GET_CONTACT_RED:
            return action.data
        case DELETE_CONTACT_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        case UPDATE_CONTACT_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        default:
            return state
    }
}