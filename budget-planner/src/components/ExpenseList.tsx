import React, { SetStateAction, useState, useEffect } from "react";
import Edit from "./Edit";
interface IExpenseList {
  expenseList: ExpenseType[];
  setExpense: React.Dispatch<React.SetStateAction<ExpenseType>>;

  setExpenseList: React.Dispatch<SetStateAction<ExpenseType[]>>;
}
const ExpenseList = ({
  setExpense,
  expenseList,
  setExpenseList,
}: IExpenseList): JSX.Element => {
  const [editItem, setEditItem] = useState<ExpenseType>({
    expenseName:"",
    expenseCost:0,
  id:0  });
  // console.log(expenseList)
  const handleDelete = (item: ExpenseType) => {
    let a = expenseList.filter((list) => list.id !== item.id);
    setExpenseList(a);
  };
  // const handleEdit = (item: ExpenseType) => {
  //   console.log(item);
  // };
  useEffect(() => {

  }, [expenseList])
  

  return (
    <div className={expenseList.length > 0 ? "row col col-md-8 col-lg-6 d-flex flex-column  gap-3 rounded w-50 mt-4 ps-4 " : "row d-none col col-md-8 col-lg-6 d-flex flex-column  gap-3  rounded mt-5 "}>
      {expenseList?.map((item: ExpenseType) => {
        return (
          <div
            className="col col-md-8 col-lg-6  d-flex justify-content-between w-75 p-2  rounded"
            key={item.id}
            style={{backgroundColor:"#9feaec"}}
          >
            <p className="h6">
              {item.expenseName} -----&gt; {item.expenseCost}
            </p>
            <div>
              <i
                data-bs-toggle="modal"
                data-bs-target="#edit"
                onClick={() => setEditItem(item)}
                className="fa-solid fa-pen-to-square mx-3"
              ></i>
              <i
                onClick={() => handleDelete(item)}
                className="fa-solid fa-trash"
              ></i>
            </div>
          </div>
        );
      })}
      <Edit setEditItem={setEditItem} editItem = {editItem} setExpenseList= {setExpenseList} expenseList = {expenseList} setExpense={setExpense} />
    </div>
  );
};

export default ExpenseList;
