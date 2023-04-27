import React,{useContext} from 'react'
import './Balance.css';
import { GlobalContext } from '../context/GlobalState';
const Balance = () => {
    const {transactions}=useContext(GlobalContext)

    const totalArr=transactions.map((item)=>{
        return item.amount
    })
    // const num=0
    const total=totalArr.reduce((sum,num)=> sum+num,0)
    console.log(total)
    return (
        <div className='balance'>
            <h4>Balance</h4>
            <p id="balance"> $ : {total}</p>
        </div>
    )
}

export default Balance