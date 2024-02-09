import React, { useState } from 'react'

import './Modal.css';

export const Modal = ({closeModal, onSubmit, defaultValue}) => {
    const [formState, setFormState] = useState(defaultValue ||{
        username: "",
        date: "",
        status:'inactive',
    });

    const [errors, setErrors] = useState('')

    const validateForm =() => {
        if(formState.username && formState.date && formState.status){
            setErrors('')
            return true;
        }else{
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(', '));
            return false;
        }

    }

    

    const handleChange =(e) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) return;

        onSubmit(formState)

        closeModal();
    }

  return (
    <div className='abc-container' onClick={
        (e) => {
            if (e.target.className ==='abc-container')
            closeModal();
        }} 
        >
        <div className='abc'>
            <form>

                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input name='username'type='text' value={formState.username} onChange={handleChange}/>
                </div>

                <div className='form-group'>
                    <label htmlFor='date'>Date</label>
                    <input name='date' type='date' value={formState.date} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor='Status'>Status</label>
                    <select name='status'  value={formState.status} onChange={handleChange}>
                        <option value='active'>Active</option>
                        <option value='inactive'>InActive</option>
                    </select>
                </div>
                {errors && <div className='error'>{`Please include: ${errors}`}</div>}

                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    </div>
  )
}
