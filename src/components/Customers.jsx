import {useDispatch, useSelector} from "react-redux";
import {addCustomer, deleteCustomer} from "../constants";
import {PrimaryButton} from "./UI/PrimaryButton";
import {SecondaryButton} from "./UI/SecondaryButton";
import {fetchCustomers} from "../store/asyncAction/customers";

export const Customers = () => {
    const dispatch = useDispatch()
    const customers = useSelector(state => state.customers.customer)

    const addCustomerEvent = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomer(customer))
    }
    const deleteCustomerEvent = (name) => dispatch(deleteCustomer(name))

    return (
        <div className="layout">
            <h1>Customers</h1>
            <div>
                <PrimaryButton onClick={() => addCustomerEvent(prompt('Add customer...'))}>Add Customer</PrimaryButton>
                <SecondaryButton onClick={() => dispatch(fetchCustomers())}>Get all users</SecondaryButton>
            </div>

            {
                customers.length > 0 ?
                    <div>
                        {customers.map(customer =>
                            <div className="customer" key={customer.id} onClick={() => deleteCustomerEvent(customer.id)}>{customer.name}</div>
                        )}
                    </div>
                    : <h3>You don't have clients</h3>
            }
        </div>
    )
}