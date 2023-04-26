import React from 'react'
import './IncomeExpense.css'
const IncomeExpense = () => {
    return (
        <div className='incomeexpense'>
            <div className='income'>
                <h3>Income</h3>
                <p>$0.00</p>
            </div>
            <hr></hr>
            <div className="expense">
                <h3>Expense</h3>
                <p>$0.00</p>
            </div>
        </div>
    )
}

export default IncomeExpense