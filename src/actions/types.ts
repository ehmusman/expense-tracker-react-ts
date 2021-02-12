export interface expenseI {
    id: number,
    item: string,
    amount: number
}

export interface initialStateI {
    transactions: expenseI[]
}


export enum ActionType {
    ADD_TRANSACTION,
    REMOVE_TRANSACTION
}
export interface addTransactionI {
    type: ActionType.ADD_TRANSACTION,
    payload: expenseI
}
export interface removeTransactionI {
    type: ActionType.REMOVE_TRANSACTION,
    payload: number
}

export type ActionI = addTransactionI | removeTransactionI;