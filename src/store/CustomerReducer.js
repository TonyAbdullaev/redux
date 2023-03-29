import {ADD_CUSTOMER, ADD_MANY_CUSTOMERS, DELETE_CUSTOMER} from "../constants";

const defaultState = {
    customer: []
}

export const customerReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customer: [...state.customer, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customer: [...state.customer, action.payload]}
        case DELETE_CUSTOMER:
            return {...state, customer: state.customer.filter(state => state.id !== action.payload)}
        default :
            return state

    }
}