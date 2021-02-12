import React, { useState } from 'react'
import { useSelector } from '../../hooks/useTypesSelectors'
import Amount from './Amount'

const Calculation : React.FC = () => {
    const [income, setIncome] = useState<number>(2345)
    const [expense, setExpense] = useState<number>(2345)
    const [balance, setBalance] = useState<number>(2345)
    const transactions = useSelector(state => state.transactions.transactions)

    const amount = transactions.map(transaction => transaction.amount)
    const incomeArr:number[] = [];
    const expenseArr: number[] = [];
    amount.forEach((value) => {
        if (value > 0) {
            incomeArr.push(value)
        } else {
            expenseArr.push(value)
        }
    })
    console.log(transactions)
    console.log(incomeArr)
    console.log(expenseArr)
    return (
        <div>
            <div className="row">
            <div className="col-sm-4">
            <Amount 
          title='Balance'
          color='text-dark'
          />
            </div>
            <div className="col-sm-4">
            <Amount 
          title='Income'
          color='text-success'
          />
            </div>
            <div className="col-sm-4">
            <Amount 
          title='Expense'
          color='text-danger'
          />
            </div>
          </div>
        </div>
    )
}

export default Calculation
