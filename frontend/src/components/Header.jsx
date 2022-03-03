import React from 'react'
import logo from '../logo.svg';
import Navbrand from './Navbrand'

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Navbrand />
    </header>
  )
}

export default Header