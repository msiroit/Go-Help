import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/donde-ayudar'>Donde puedo ayudar</Link></li>
        <li><Link to='/aqui-se-necesita'>Aquí se necesita</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
