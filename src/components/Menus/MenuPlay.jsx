import {useState} from 'react'
import SubMenu from './subMenu.jsx'
function MenuPlay({l1, l2, l3,}) {
	return(
		<> 

				<ul className="ListContainer">
					<li>
						<a href="#">{l1}</a>
					</li>

					<li>
						<a href="#">{l2}</a>
					</li>

					<li>
						<a href="#">{l3}</a>
					</li>

				</ul>
		</>
	)
}

export default MenuPlay