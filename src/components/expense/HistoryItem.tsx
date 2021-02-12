import React from 'react'
import classnames from 'classnames'

interface PropsI{
    id: number,
    amount: number,
    item: string
}
const HistoryItem:React.FC<PropsI> = ({item,id,amount}) => {
    return (
                <div className={classnames('row border border-success mb-1 py-3 text-center ' , {
                    'border border-danger': amount<0
                })}>
                     <div className="col-4">{item}</div>
                    <div className="col-4">{amount}</div>
                    <div className="col-4"><i className="fas fa-times" style={{color: 'red'}}></i></div>
                </div>
    )
}

export default HistoryItem;
