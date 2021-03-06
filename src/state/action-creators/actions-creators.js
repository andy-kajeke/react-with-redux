
export const DepositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "Deposit",
            payload: amount
        })
    }
}

export const WithdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "Withdraw",
            payload: amount
        })
    }
}