import { ActionI, ActionType, initialStateI } from "../actions/types";

const initialState: initialStateI = {
    transactions: []
}

const reducer = (state: initialStateI = initialState, action: ActionI): initialStateI => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case ActionType.REMOVE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;