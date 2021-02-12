import { combineReducers } from 'redux';
import reducer from './expenseReducer';

const reducers = combineReducers({
    transactions: reducer
})

export default reducers;
export type RootState = ReturnType<typeof reducers>