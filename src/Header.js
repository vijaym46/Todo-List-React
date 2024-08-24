import React from 'react'

const Header = () => {
  const date = new Date();
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[date.getDay()];

  const dayOfMonth = date.getDate();

  //month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  return (
    <header>
        <p className='h3 fw-bold'>Today's Task</p>
        <p className='display-6 fw-light'>
          {`${day}, ${dayOfMonth} ${month}`}
        </p>
    </header>
  )
}

export default Header