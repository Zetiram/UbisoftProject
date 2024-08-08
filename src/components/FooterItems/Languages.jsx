import arrow from '../../assets/logos&Icons/grayRightArrow.svg'
function Languages({languageText}) {
	return(
		<>
			<a className="LanguagesItem__Container" href="#">
				<img className="LanguagesItem__Container--img" src={arrow} alt="arrow"/>
				<p className="LanguagesItem__Container--p">{languageText}</p>
			</a>
		</>
	)
}

export default Languages