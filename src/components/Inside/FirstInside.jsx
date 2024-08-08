function FirstInside({img, imgAlt, text}) {
	return(
		<>
			<a className="InsideItems__Container" href="#">
				<img className="InsideItems__Container--img" src={img} alt={imgAlt}/>
				<div className="InsideTitle__Container">
					<h3 className="InsideItems__Container--h3">{text}</h3>
				</div>
			</a>
		</>
	)
}

export default FirstInside