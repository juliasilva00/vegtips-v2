import React from 'react'
import './Header.css';

function Header({ titulo }) {
  return (
    <div id='header'>
      <p>{titulo}</p>
    </div>
  )
}
export default Header