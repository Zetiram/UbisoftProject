import downArrow from '../../assets/logos&Icons/MenuArrow.png'
function SubMenu({title, clas}) {
	return(
		<>
			<div className="MobileSubMenuContainer">
				<h3 className="MobileSubMenuContainer--h3">{title}</h3>

				<img className={clas} src={downArrow} alt="down Arrow"/>
			</div>

			

		</>
	)
}

export default SubMenu;