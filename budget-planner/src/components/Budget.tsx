import React, { useState } from "react";

interface IBudgetItem {
  budget: number | null;
  setBudget: React.Dispatch<React.SetStateAction<number | null>>;
  expenseList: ExpenseType[];
}

const Budget = ({
  budget,
  setBudget,
  expenseList,
}: IBudgetItem): JSX.Element => {
  const [tempBudget, setTempBudget] = useState<number | null>(null);
  const [toggleBudget, setToggleBudget] = useState<boolean>(true);
  const handleBudget = () => {
    setBudget(tempBudget);
    setToggleBudget(!toggleBudget);
  };
  let total;
  {
    total = expenseList?.reduce((a, b) => a + b.expenseCost, 0);
  }
  return (
    <>
      <h1 className="text-center mb-3" style={{color:"#004e92"}}>My Budget Planner</h1>
      <div className="row d-flex justify-content-between m-0 p-0 ">
        <div className="col col-sm-12 col-md-8 col-lg-4  d-flex justify-content-between gap-4 ps-2 pe-3 py-2 rounded" style={{color:"#0d511d", backgroundColor:"#9feaec"}}>
          <input
            className="form-control w-75 p-1"
            disabled={!toggleBudget}
            type="number"
            onChange={(e) => setTempBudget(parseInt(e.target.value))}
          />
          <button className="btn btn-primary w-25" onClick={handleBudget}>
            {toggleBudget ? "Save" : "Edit"}
          </button>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-3 rounded ps-2 pt-1" style={{color:"#0d511d", backgroundColor:"#adfabf"}}>
          <p className="h5"> Remaining: {budget && budget - total} </p>
        </div>
        <div className=" col col-sm-12 col-md-8 col-lg-4 rounded ps-2 pt-1" style={{color:"#b00f3f",backgroundColor:"#ffa4b7" }}>
          <p className="h5"> Total spent so far: {total}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Budget;
