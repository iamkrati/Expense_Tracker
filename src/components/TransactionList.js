import React from 'react'
import './TransactionList.css';
const TransactionList = () => {
    return (
        <div className='list'>
            <h3>History</h3>
            <hr></hr>
            <ul>
                <li>Payment 
                    <span>
                        <p>$ : 0.00</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default TransactionList