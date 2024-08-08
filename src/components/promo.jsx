function Promo({img, imgAlt, text}) {
	return(
		<>
			<div className="PromoImg__Container">
				<img className="PromoImg__Container--img" src={img} alt={imgAlt}/>
				<h2 className="PromoImg__Container--h2">{text}</h2>
			</div>

			<div className="PromoBtnContainer">
				<button className="PinkBtn promoBtn">LEARN MORE</button>
			</div>
		</>
	)
}

export default Promo