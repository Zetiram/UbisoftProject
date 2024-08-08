import SubMenu from './subMenu.jsx'
function MenuExplore({ l1 ,l2, l3, l4, l5}) {
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

					<li>
						<a href="#">{l4}</a>
					</li>

					<li>
						<a href="#">{l5}</a>
					</li>

				</ul>


		</>
	)
}

export default MenuExplore