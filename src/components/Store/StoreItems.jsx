function StoreItems({img, imgAlt, title}) {
	return(
		<>
			<a href="#" className="StoreItems__Container">
				<h3 className="StoreItems__Container--h3">{title}</h3>

				<img className="StoreItems__Container--img" src={img} alt={imgAlt}/>
			</a>
		</>
	)
}

export default StoreItems