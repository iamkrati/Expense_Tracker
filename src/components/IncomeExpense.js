import React,{useContext} from 'react'
import './IncomeExpense.css'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {

    const {transactions}=useContext(GlobalContext)

    const totalArr=transactions.map((item)=>{
        return item.amount
    })
    const totalincome=totalArr.reduce((sum,num)=> {
        if(num>0) return sum+num;
        return sum;
    },0)
    const totalexpense=totalArr.reduce((sum,num)=> {
        if(num<0) return sum+num;
        return sum;
    },0)

    // console.log(totalexpense)
    return (
        <div className='incomeexpense'>
            <div className='income'>
                <h3>Income</h3>
                <p>$ {totalincome}</p>
            </div>
            <hr></hr>
            <div className="expense">
                <h3>Expense</h3>
                <p>$ {totalexpense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense