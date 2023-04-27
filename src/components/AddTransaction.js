import React,{useState} from 'react'
import './AddTransaction.css'


const AddTransaction = () => {

    const[text,setText]=useState("");
    const[amount,setAmount]=useState(0);




    return (
        <div className='addtrans' >
            <h3>Add new Transaction</h3>
            <hr></hr>
            <form className='form-control'>
                <div>
                    <label htmlFor=''>Items</label>
                    <br></br>
                    <input  onChange={(e)=>  setText(e.target.value)} value={text} type='text' placeholder='Enter Text ...'></input>
                </div>
                <div>
                    <label htmlFor=''>Amount (negative-expense , positive -income)</label>
                    <br></br>
                    <input  onChange={(e)=>  setAmount(e.target.value)} value={amount} type='number' placeholder=''></input>
                </div>
                <div>
                   <button type='submit'>AddTransaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction