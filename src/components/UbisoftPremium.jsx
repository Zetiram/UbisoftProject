function UbisoftPremium({title, description, btnText}) {
	return(
		<>
			<div className="UbisoftPremium">
				<div className="UbisoftPremium__Container">
					<h2 className="UbisoftPremium__Container--h2">{title}</h2>
					<p className="UbisoftPremium__Container--p">{description}</p>
					<button className="UbisoftPremium__Container--btn PinkBtn">{btnText}</button>
				</div>

			</div>
		</>
	)
}

export default UbisoftPremium