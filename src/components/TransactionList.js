import React, { useContext } from 'react'
import './TransactionList.css';
import { GlobalContext } from '../context/GlobalState';
const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return (
        <div className='list'>
            <h3>History</h3>
            <hr></hr>
            <ul>

                {
                    transactions.map(item => {
                      return   <li>{item.text}
                            <span>
                                <p>{item.amount}</p>
                            </span>
                        </li>
                    })

                }

            </ul>
        </div>
    )
}

export default TransactionList