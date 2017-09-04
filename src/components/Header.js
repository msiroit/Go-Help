import React from 'react'
import { Link } from 'react-router-dom'
import "../css/DondeAyudar.css"
import "../css/AquiSeNecesita.css"
import "../css/Logo.css"
import logo from "../img/Go-HELP.png"
const Header = () => (
  <header>
    <nav>
		<img alt="go-help" className="img-logo" src={logo} />
		<Link className="button-da" to='/donde-ayudar'>Donde ayudar?</Link>
		<Link className="button-asn" to='/aqui-se-necesita'>Aquí se necesita</Link>
	</nav>
  </header>
)

export default Header
