import React from 'react'

const Footer = (props) => {
const year = new Date();

  return (
    <footer>
      { props.length} List {props.length === 1 ? "item" : "items"}  
      <br />
    Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer