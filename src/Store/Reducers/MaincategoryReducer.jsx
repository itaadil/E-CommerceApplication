import { ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constants"
export function MaincategoryReducer(state = [], action) {
    switch (action.type) {
        case ADD_MAINCATEGORY_RED:
            state.push(action.data)
            return state
        case GET_MAINCATEGORY_RED:
            return action.data
        case DELETE_MAINCATEGORY_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        case UPDATE_MAINCATEGORY_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        default:
            return state
    }
}