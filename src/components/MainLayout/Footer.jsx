import React from 'react'

const Company_Name = "Trading Platform";
const DATE = new Date().getFullYear();

function Footer() {
  return (
      <footer className='App-footer'>
          <p>&copy;{`${DATE} ${Company_Name}. All Rights Reserved.`}</p>
      </footer>
  )
}

export default Footer;
