interface IExpenseItem {
  setExpense: React.Dispatch<React.SetStateAction<ExpenseType>>;
  expense: ExpenseType;
  setExpenseList: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
  expenseList: ExpenseType[];
}
const AddExpenses = ({
  setExpense,
  expense,
  expenseList,
  setExpenseList,
}: IExpenseItem): JSX.Element => {
  const handleClick = () => {
    setExpense({ ...expense, id: Date.now() });
    let temp = [...expenseList];
    temp.push(expense);
    setExpenseList(temp);
    setExpense({ expenseName: "", expenseCost: 0, id: Date.now() });
  };

  return (
    <>

<div className={expenseList.length < 1 ? "col col-md-8 col-lg-12 d-flex flex-column  gap-3 rounded mx-auto  p-3":
        "col col-md-8 col-lg-6 d-flex flex-column  gap-3 p-3 rounded"}>
        <div className="w-100 text-start h5">
            <label htmlFor="add">Expense Name</label>
            <input className='form-control mt-2 p-1' type="text" id="add" value={expense?.expenseName} onChange={(e) => setExpense({...expense, expenseName:e.target.value})}/>
        </div>
        <div className="w-100 text-start h5">
            <label htmlFor="cost">Amount</label>
            <input className='form-control mt-2 p-1' type="text" id="cost" value={expense.expenseCost ? expense.expenseCost: "" } onChange={(e) => setExpense({...expense, expenseCost:parseInt(e.target.value)})}/>
        </div>
        <div className="w-100">
            <button className="w-100 btn btn-primary p-1"  onClick={handleClick}>Add</button>
        </div>
    </div>

    </>
  );
};

export default AddExpenses;
