import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "../css/DondeAyudar.css"
import "../css/AquiSeNecesita.css"
import "../css/Logo.css"
import logo from "../img/Go-HELP.png"
import home from "../img/home.png"
const Header = (props) => (
  <header>
    <nav className={props.location.pathname.replace('/','') || 'home'}>
		<Link className="button-home" to='/'>
			<img alt="home" className="img-home" src={home} />
		</Link>
			<img alt="go-help" className="img-logo" src={logo} />
		<Link className="button-da" to='/donde-ayudar'>Donde ayudar?</Link>
		<Link className="button-asn" to='/aqui-se-necesita'>Aquí se necesita</Link>
	</nav>
  </header>
)

export default withRouter(props => <Header {...props}/>)
