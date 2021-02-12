import React, { useState } from 'react'
import classnames from 'classnames'


const AddTransaction:React.FC = () => {
    const [transaction, setTransaction] = useState(true)
    
    return (
        <>
        <div className="row">
        <button className={classnames('btn btn-outline-primary col-4 btn-lg my-3' , {
            "active" : transaction
        })} 
        onClick={() => setTransaction(!transaction)}
        >Income
        </button>
        <button 
        className={classnames('btn btn-outline-primary btn-lg col-4 my-3' , {
            "active" : !transaction
        })} 
        onClick={() => setTransaction(!transaction)}>
            Expense
        </button>
        </div>
        <form className="form">
        <div className="form-group">
                <label htmlFor="name">Transaction</label>
                <input className="form-control" type="text" id="name" placeholder="Enter Name"/ >
              {transaction ? (
                  <>
                <label htmlFor="name">Income</label>
                <input className="form-control" type="number" id="name" placeholder="Enter Income"/ >
                    <br/>
                <input type="submit" value="Submit Income" className='btn btn-outline-primary btn-block'/>
                  </>
              ) : (<>
                <label htmlFor="name">Expense</label>
                <input className="form-control" type="number" id="name" placeholder="Enter Expense"/ >
                    <br/>
                    <input type="submit" value="Submit Expense" className='btn btn-outline-primary btn-block'/>
              </>)}
            </div>
            </form>
        </>
    )
}

export default AddTransaction;