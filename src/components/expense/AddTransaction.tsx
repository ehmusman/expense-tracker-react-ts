import React, { useState } from 'react'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { expenseI } from '../../actions/types'
import { addTransaction } from '../../actions/expenseActions'


const AddTransaction: React.FC = () => {
    const [transaction, setTransaction] = useState(true)
    const [item, setItem] = useState<string>('')
    const [income, setIncome] = useState<string>('')
    const [expense, setExpense] = useState<string>('')
    const dispatch = useDispatch();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        const data: expenseI = {
            id: 0,
            amount: 0,
            item: ''
        }

        if (item !== '' && income !== '') {
            console.log(item, 'income: ', income)
            data.id = ((Math.random() * 1234567) / 2345);
            data.amount = +Math.abs(Number(income));
            data.item = item
            dispatch(addTransaction(data))
            initialStates()
        } else if (item !== '' && expense !== '') {
            console.log(item, 'expense: ', expense)
            data.id = ((Math.random() * 1234567) / 2345);
            data.amount = -Math.abs(Number(expense));
            data.item = item
            dispatch(addTransaction(data))
            initialStates()
        } else {
            alert("Please fill all the fields")
        }
    }
    const initialStates = (): void => {
        setItem('');
        setIncome('');
        setExpense('')
    }
    return (
        <>
            <div className="row">
                <button
                    className={classnames('btn btn-outline-primary col-4 btn-lg my-3', {
                        "active": transaction
                    })}
                    onClick={(e) => {
                        setTransaction(!transaction)
                        setExpense('')
                    }}
                >Income
        </button>
                <button
                    className={classnames('btn btn-outline-primary btn-lg col-4 my-3', {
                        "active": !transaction
                    })}
                    onClick={() => {
                        setTransaction(!transaction)
                        setIncome('')

                    }}>
                    Expense
        </button>
            </div>
            <form className="form" onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Transaction</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                        value={item}
                        onChange={e => setItem(e.target.value)}
                    />
                    {transaction ? (
                        <>
                            <label htmlFor="name">Income</label>
                            <input
                                className="form-control" type="number"
                                id="name"
                                placeholder="Enter Income"
                                value={income}
                                onChange={e => setIncome(e.target.value)}
                            />
                            <br />
                            <input
                                type="submit"
                                value="Submit Income" className='btn btn-outline-primary btn-block'
                            />
                        </>
                    ) : (<>
                        <label htmlFor="name">Expense</label>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Enter Expense"
                            value={expense}
                            onChange={e => setExpense(e.target.value)}
                        />
                        <br />
                        <input type="submit" value="Submit Expense" className='btn btn-outline-primary btn-block' />
                    </>)}
                </div>
            </form>
        </>
    )
}

export default AddTransaction;