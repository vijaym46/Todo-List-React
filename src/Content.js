import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <>
      
    {(items.length) ? (
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input 
            type="checkbox" 
            onChange={() => handleCheck(item.id)}
            checked = {item.checked}
            />
            <label
            onDoubleClick={() => handleCheck(item.id)} 
            style={{textDecoration: item.checked ? 'line-through' : 'none'}} >
              
              {item.item}
            
            </label>
            <FaTrashAlt 
              role='button'
              tabIndex='0'
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    
    ) : ( <p> Your list is empty </p> )} 
    </>
  )
}

export default Content