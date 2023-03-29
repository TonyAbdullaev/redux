import {SET_USERS} from "../constants";

const defaultState = {
    users: []
}

export default function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
        default:
            return state
    }
}