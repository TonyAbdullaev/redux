import {useDispatch, useSelector} from "react-redux";
import {PrimaryButton} from "./UI/PrimaryButton";
import {asyncDecrementCreator, asyncIncrementCreator, fetchUsers} from "../constants";

export const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.usersReducer.users)

    return (
        <div className="layout">
            <div className="count">
                <h2>{count}</h2>
            </div>
            <div className="btns">
                <PrimaryButton onClick={() => dispatch(asyncIncrementCreator())}>Increment++</PrimaryButton>
                <PrimaryButton onClick={() => dispatch(asyncDecrementCreator())}>Decrement--</PrimaryButton>
                <PrimaryButton onClick={() => dispatch(fetchUsers())}>Get users</PrimaryButton>
            </div>
            <div className="users">
                {
                    users.map(user =>
                        <div className="customer" key={user.name}>
                            {user.name}
                        </div>
                    )
                }
            </div>
        </div>
    )
}