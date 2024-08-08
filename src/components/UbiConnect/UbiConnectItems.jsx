import arrow from '../../assets/logos&Icons/MenuArrow.png'
function UbiConnectItems({img, imgAlt, title, description, consoles}) {
	return(
		<>
			<div className="ConnectArrow__Container">
				<img className="ConnectArrow__Container--img" src={arrow} alt="arrow"/>
			</div>

			<div className="UbiConnectImg__Container">
				<img className="UbiConnectImg__Container--img" src={img} alt={imgAlt}/>
			</div>

			<div className="UbiConnectTitle__Container">
				<h2 className="UbiConnectTitle__Container--h2">{title}</h2>
			</div>

			<div className="UbiConnectDesc__Container">
				<p className="UbiConnectDesc__Container--p">{description}</p>
				<strong className="UbiConnectDesc__Container--strong">{consoles}</strong>
			</div>
		</>
	)
}

export default UbiConnectItems