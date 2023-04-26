import React from 'react'
import './AddTransaction.css'
const AddTransaction = () => {
    return (
        <div className='addtrans' >
            <h3>Add new Transaction</h3>
            <hr></hr>
            <form>
                <div>
                    <label htmlFor=''>Items</label>
                    <br></br>
                    <input type='text' placeholder='Enter Text ...'></input>
                </div>
                <div>
                    <label htmlFor=''>Amount (negative-expense , positive -income)</label>
                    <br></br>
                    <input type='number' placeholder='0'></input>
                </div>
                <div>
                   <button type='submit'>AddTransaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction