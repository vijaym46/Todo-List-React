import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const Additems = ( {setItems, newItem, setNewItem, handleSubmit} ) => {
    const inputRef = useRef();
    return (
    <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor="addForm"> Add Item </label>
    <input 
      ref={inputRef}
      autoFocus
      id = 'addItem'
      type="text" 
      placeholder='Add Item'
      required
      value= {newItem}
      onChange={(e) => setNewItem(e.target.value)}
    />
    <button
      type='submit'
      aria-label='Add Item'
      onClick={() => inputRef.current.focus()}
    >
      <FaPlus />
    </button>
    </form>
  )
}

export default Additems