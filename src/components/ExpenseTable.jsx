import React, { useState } from "react";
import Select from "./Select";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

export default function ExpenseTable({ expenseData, setExpenseData }) {
  const [contextMenuPosition, setContextMenuPosition] = useState({});
  const [rowId, setRowId] = useState(null);
  let totalAmount = 0;
  const [filteredList, setQuery] = useFilter(expenseData, "category");
  return (
    <>
      <table
        className="expense-table"
        onClick={() => setContextMenuPosition({})}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <Select
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                defaultValue="All"
                optionList={[
                  "Grocery",
                  "Clothes",
                  "Bills",
                  "Education",
                  "Medicine",
                ]}
              />
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map(({ id, title, category, amount }) => {
            totalAmount += +amount;
            return (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setContextMenuPosition({ left: e.clientX, top: e.clientY });
                  setRowId(id)
                }}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>₹{amount}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td></td>
            <td>
              <b>₹{totalAmount}</b>
            </td>
          </tr>
        </tbody>
      </table>
      {contextMenuPosition.left && (
        <ContextMenu
          contextMenuPosition={contextMenuPosition}
          setContextMenuPosition={setContextMenuPosition}
          rowId={rowId}
          setExpenseData = {setExpenseData}
        />
      )}
    </>
  );
}
