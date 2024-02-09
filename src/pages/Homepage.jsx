// src/components/Home.js

import React, { useState } from 'react';
import Weather from '../components/Weather';
import { Table } from '../components/Table';
import './Homepage.css';
import { Modal } from '../components/Modal';


const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] =useState([
    {username:'User1', date: '01/01/2024', status: 'inactive'},
    {username:'User2', date: '02/01/2024', status: 'active'}
  ]);

  const [rowToEdit, setRowToEdit] = useState(null)

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
    }

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows, newRow]): setRows(rows.map((currRow, idx) =>{
      if (idx != rowToEdit) return currRow

      return newRow;
    } ))
  };

  return (
    <div className='homepage' >

      <Weather />

      <Table  rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
      <button className='btn' onClick={() => setModalOpen(true)}>Add Users</button>
      {modalOpen && <Modal closeModal = {() => {
        setModalOpen(false)
        setRowToEdit(null);
      }}
      onSubmit={handleSubmit}
      defaultValue={rowToEdit !==null && rows[rowToEdit]}
      />}


    </div>
  );
};

export default Homepage; 