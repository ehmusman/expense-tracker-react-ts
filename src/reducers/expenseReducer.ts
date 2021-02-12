import { ActionI, ActionType, initialStateI } from "../actions/types";

const initialState: initialStateI = {
    transactions: [
        { id: 1, amount: 345, item: 'salary' },
        { id: 2, amount: -45, item: 'item' },
        { id: 3, amount: -435, item: 'item' },
        { id: 4, amount: 495, item: 'item' },
        { id: 5, amount: -345, item: 'item' },
        { id: 6, amount: 845, item: 'item' },
        { id: 7, amount: 2345, item: 'item' },
        { id: 8, amount: 3045, item: 'item' }
    ]
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