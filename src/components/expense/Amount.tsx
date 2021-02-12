import React from 'react'

interface PropsI{
    title: string
    color: string,
    // amount: number
}
const Amount:React.FC<PropsI> = ({title, color}) => {
    console.log(title, color)
    return (
        <div className='card'>
            <div className="card-Heading text-center">{title}</div>
            <div className={`card-body text-center ${color}`}>$ 23456</div>
        </div>
    )
}

export default Amount
