import {useState} from 'react'
import UbiLogo from './ubilogo.jsx'
function Nav({user, logo, ellipse}) {
	const [active, setActive] = useState(false)

	const burger = () => {
		setActive(!active)
}

	return(
		<>

			<div className="NavMobile">

				<div className="ellipseMenu__Container" onClick={burger}>
					<img className="ellipseMenu__Container--img" src={ellipse} alt="Elipse"/>
				</div>

				<div className="UbisoftLogo__Container">
					<UbiLogo/>
				</div>

				<div className="userIcon__Container">
					<img className="userIcon__Container--img" src={user} alt="userIcon"/>
				</div>

			</div>

		</>
	)
}

export default Nav;