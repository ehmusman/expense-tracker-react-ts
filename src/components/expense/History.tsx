import React, { useState } from 'react'
import { Recoverable } from 'repl'
import { initialStateI } from '../../actions/types'
import {useSelector} from '../../hooks/useTypesSelectors'
import HistoryItem from './HistoryItem'
const History: React.FC = () => {
    // const [expense, setExpense]= useState<initialStateI[]>([])
    const transactions = useSelector(state => state.transactions.transactions)

    return (
        <div className="container">
        <div className='card'>
        <div className="card-heading">
            <h3 className="text-center">
                History
            </h3>
            <div className="d-flex">
                    <span className="col-4">Transaction</span>
                    <span className="col-4">Amount</span>
                    <span className="col-4">Delete</span>
                </div>
        </div>
            <div className="card-body">
                <div >
                    {transactions.map(record => (
                        <HistoryItem 
                        key={record.id}
                        id={record.id}
                        amount={record.amount}
                        item={record.item}
                        />
                    ))}
            </div>
        </div>
    </div>
    </div>  
    )
}

export default History
