import React from 'react'

interface PropsI {
    title: string
    color: string,
    amount: number
}

const Amount: React.FC<PropsI> = ({ title, color, amount }) => {
    return (
        <div className='card'>
            <div className="card-Heading text-center">{title}</div>
            <div className={`card-body text-center ${color}`}>$ {amount}</div>
        </div>
    )
}

export default Amount
