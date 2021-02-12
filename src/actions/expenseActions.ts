import { ActionI, ActionType, expenseI } from "./types";

export const addTransaction = (data: expenseI): ActionI => {
    return ({
        type: ActionType.ADD_TRANSACTION,
        payload: data
    })
};

export const deleteTransaction = (data: number): ActionI => {
    return ({
        type: ActionType.REMOVE_TRANSACTION,
        payload: data
    })
};
