import React from "react";

export default function ContextMenu({
  contextMenuPosition,
  setContextMenuPosition,
  rowId,
  setExpenseData,
}) {
  return (
    <div className="context-menu" style={contextMenuPosition}>
      <div
        onClick={() => {
          console.log("Editing....");
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
