import React from 'react'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { deleteTransaction } from '../../actions/expenseActions';


interface PropsI {
    id: number,
    amount: number,
    item: string
}


const HistoryItem: React.FC<PropsI> = ({ item, id, amount }) => {
    const dispatch = useDispatch();

    const handleDeleteItem = (): void => {
        dispatch(deleteTransaction(id))
    }
    return (
        <div className={classnames('row border border-success mb-1 py-3 text-center ', {
            'border border-danger': amount < 0
        })}>
            <div className="col-4">{item}</div>
            <div className="col-4">{amount}</div>
            <div
                className="col-4">
                <i
                    className="fas fa-times"
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={handleDeleteItem}
                >
                </i>
            </div>
        </div>
    )
}

export default HistoryItem;
