import React from 'react'
import { useSelector } from '../../hooks/useTypesSelectors'
import Amount from './Amount'

const Calculation: React.FC = () => {
    const transactions = useSelector(state => state.transactions.transactions)
    const amount: number[] = transactions.map(transaction => transaction.amount)
    const incomeArr: number[] = [];
    const expenseArr: number[] = [];
    amount.forEach((value) => {
        if (value > 0) {
            incomeArr.push(value)
        } else {
            expenseArr.push(value)
        }
    })
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <Amount
                        title='Balance'
                        color='text-dark'
                        amount={amount.length && amount.reduce((a: number, b: number) => a + b)}
                    />
                </div>
                <div className="col-sm-4">
                    <Amount
                        title='Income'
                        color='text-success'
                        amount={incomeArr.length && incomeArr.reduce((a: number, b: number) => a + b)}
                    />
                </div>
                <div className="col-sm-4">
                    <Amount
                        title='Expense'
                        color='text-danger'
                        amount={expenseArr.length && expenseArr.reduce((a: number, b: number) => a + b)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Calculation
