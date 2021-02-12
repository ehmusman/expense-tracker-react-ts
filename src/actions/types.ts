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
export interface addRecord {
    type: ActionType.ADD_TRANSACTION,
    payload: expenseI
}
export interface removeRecord {
    type: ActionType.REMOVE_TRANSACTION,
    payload: number
}

export type ActionI = addRecord | removeRecord;