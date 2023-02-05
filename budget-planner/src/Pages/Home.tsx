import React, { useEffect, useState } from 'react'
import AddExpenses from '../components/AddExpenses'
import "./home.css";
import Budget from '../components/Budget'
import ExpenseList from '../components/ExpenseList'

const Home = () => {
    const [budget, setBudget] = useState<number | null>(null)
    const [expense, setExpense] = useState<ExpenseType>({
        expenseName:"",
        expenseCost:0,
        id:Date.now()
    })
    const [expenseList, setExpenseList] = useState<ExpenseType[]>([])
    useEffect(() => {
 console.log(expenseList)
    }, [expenseList])
    
  return (
    <div className='mx-auto col col-sm-4 col-md-6 col-lg-8 contentWrapper rounded px-3'>
      <Budget budget = {budget} setBudget = {setBudget} expenseList={expenseList} />
      <div className='d-flex gap-1 mt-2'>
      
        <ExpenseList setExpense={setExpense} expenseList={expenseList} setExpenseList = {setExpenseList} />
        <AddExpenses expense={expense}   setExpense={setExpense} setExpenseList={setExpenseList} expenseList={expenseList}  />
      </div>
        
        
    </div>
  )
}

export default Home