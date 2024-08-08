import SubMenu from './subMenu.jsx'
function MenuShop({ l1, l2}) {
	return(
		<> 

					<ul className="ListContainer">
					<li>
						<a href="#">{l1}</a>
					</li>

					<li>
						<a href="#">{l2}</a>
					</li>

				</ul>

		</>
	)
}

export default MenuShop