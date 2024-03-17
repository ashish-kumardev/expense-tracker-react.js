import React from "react";

export default function ContextMenu({
  contextMenuPosition,
  setContextMenuPosition,
  rowId,
  expenseData,
  setExpenseData,
  setExpense,
  setIsEdit,
  setEditRowId,
}) {
  return (
    <div className="context-menu" style={contextMenuPosition}>
      <div
        onClick={() => {
          const [{ title, category, amount }] = expenseData.filter(
            (expense) => expense.id === rowId
          );
          setExpense({ title, category, amount });
          setIsEdit(true);
          setEditRowId(rowId);
          setContextMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenseData((prev) =>
            prev.filter((expense) => expense.id !== rowId)
          );
          setContextMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
