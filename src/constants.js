// ACTION TYPE
export const ADD_CASH = "ADD_CASH";
export const GET_CASH = "GET_CASH";
export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const DELETE_CUSTOMER = "GET_CUSTOMER";
export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";
export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";



// ACTIONS
export const addCash = (payload) => ({type: ADD_CASH, payload});
export const getCash = (payload) => ({type: GET_CASH, payload});
export const addCustomer = (payload) => ({type: ADD_CUSTOMER, payload});
export const addManyCustomers = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
export const deleteCustomer = (payload) => ({type: DELETE_CUSTOMER, payload});
export const incrementCreator = (payload) => ({type: INCREMENT, payload});
export const decrementCreator = (payload) => ({type: DECREMENT, payload});
export const asyncIncrementCreator = (payload) => ({type: ASYNC_INCREMENT, payload});
export const asyncDecrementCreator = (payload) => ({type: ASYNC_DECREMENT, payload});
export const setUsers = (payload) => ({type: SET_USERS, payload});
export const fetchUsers = () => ({type: FETCH_USERS});