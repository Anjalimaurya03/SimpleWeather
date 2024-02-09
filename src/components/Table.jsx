import "./Table.css";
import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="expand">Username</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);
            return (
              <tr key={idx}>
                <td className="expand">{row.username}</td>
                <td>{row.date}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="detete-btn" onClick={() => deleteRow(idx)} />
                    <BsFillPencilFill onClick={() => {editRow(idx)}}/>
                  </span>
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
};
