import {PrimaryButton} from "./UI/PrimaryButton";
import {SecondaryButton} from "./UI/SecondaryButton";
import {useDispatch, useSelector} from "react-redux";
import {addCash, getCash} from "../constants";

export const Cash = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)

    const addCashEvent = (cash) => {
        dispatch(addCash(cash))
    }
    const getCashEvent = (cash) => {
        dispatch(getCash(cash))
    }

    return (
        <div className="layout">
            <h1>Cash</h1>
            <div className="cash__body">
                <h2 className="cash__title">You have {cash}$</h2>
                <div>
                    <PrimaryButton onClick={() => addCashEvent(Number(prompt('Введите сумму пополнения счета: ')))}>Пополнить счет</PrimaryButton>
                    <SecondaryButton onClick={() => getCashEvent(Number(prompt('Введите сумму снятия со счета: ')))}>Снять со счета</SecondaryButton>
                </div>
            </div>
        </div>
    )
}