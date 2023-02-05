import React, { SetStateAction } from "react";

interface IEdit {
  editItem: ExpenseType;
  expenseList: ExpenseType[];
  setExpense: React.Dispatch<React.SetStateAction<ExpenseType>>;
  setEditItem: React.Dispatch<React.SetStateAction<ExpenseType>>;
  setExpenseList: React.Dispatch<SetStateAction<ExpenseType[]>>;
}

const Edit = ({
  editItem,
  setEditItem,
  setExpense,
  setExpenseList,
  expenseList,
  
}: IEdit): JSX.Element => {
  // const [editExpenseName, setEditExpenseName] = useState("");
  // const [editExpenseCost, setEditExpenseCost] = useState(0);

 const handleEdit = () => {
  let tempName: any = expenseList.map((item) => {
        return item.id === editItem.id
          ? {
              
              ...editItem
            }
          : item;
      });
      setExpenseList(tempName);
  }

  // const handleEdit = () => {
  //   let tempName: any = expenseList.map((item) => {
  //     return item.id === editItem.id
  //       ? {
  //           ...item,
  //           expenseName: editExpenseName,
  //           expenseCost: editExpenseCost,
  //         }
  //       : item;
  //   });
  //   setExpenseList(tempName);

    //  tempName.expenseName = editExpenseName;
    //  tempName.expensecost = editExpenseCost;
    //    console.log(tempName)
    //   for(let key of Object.values(expenseList)){
    //        if(key.id === editItemId){
    //         let tempIndex = expenseList.indexOf(key)

    //         let temp = {
    //             expenseName:editExpenseName,
    //             expenseCost:editExpenseCost,
    //             id:editItemId
    //         }
    //         let tempexpenselist = expenseList;
    //         tempexpenselist.splice(tempIndex,1,temp)
    //         setExpenseList(tempexpenselist)

    //        }
    //   }
  // };
  return (
    <div>
      <div className="modal fade" id="edit" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{backgroundColor:"#c9c7c7"}}>
            <div className="modal-header">
              <h5 className="modal-title text-danger h4" id="exampleModalLongTitle">
                Edit Your Expense List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body w-100">
              <div>
                <label className="h5" htmlFor="expensename">Edit Expense Name</label><br/>
                <input
                  className="w-100 form-control"
                  type="text"
                  onChange={(e)=>setEditItem({...editItem,[e.target.name]:e.target.value})}
                  id="expensename"
                  name="expenseName"
                  value={editItem.expenseName}
                />
              </div>
              <div className="mt-4">
                <label className="h5" htmlFor="expensecost">Edit Amount</label><br/>

                <input
                className="w-100 form-control"
                  type="text"
                  name="expenseCost"
                  onChange={(e)=>setEditItem({...editItem,[e.target.name]:parseInt(e.target.value)})}
                  id="expensecost"
                  value={editItem.expenseCost}

                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleEdit}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
