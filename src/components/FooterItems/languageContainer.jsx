import Languages from './Languages.jsx'
function LanguageContainer({}) {
	return(
		<>
			<div className="LanguageContainer">
				<h3 className="LanguageContainer--h3">Europe</h3>

				<div className="LanguageContainer--line"></div>

				<div className="LanguageContainer__ItemContainer">
					<Languages languageText="DEUTCH"/>
					<Languages languageText="ENGLISH - EU / UK"/>
					<Languages languageText="ESPAÑOL"/>
					<Languages languageText="FRENCH"/>
					<Languages languageText="ITALIANO"/>
					<Languages languageText="POLSKI"/>
					<Languages languageText="RUSSIAN"/>
				</div>
			</div>

			<div className="LanguageContainer">
				<h3 className="LanguageContainer--h3">Americas</h3>

				<div className="LanguageContainer--line"></div>

				<div className="LanguageContainer__ItemContainer">
					<Languages languageText="ENGLISH - CA"/>
					<Languages languageText="ENGLISH - US"/>
					<Languages languageText="ESPAÑOL - MX"/>
					<Languages languageText="FRENCH - CA"/>
					<Languages languageText="POTUGUÉS - BR"/>
				</div>
			</div>

			<div className="LanguageContainer">
				<h3 className="LanguageContainer--h3">Asia / Pacific</h3>

				<div className="LanguageContainer--line"></div>

				<div className="LanguageContainer__ItemContainer">
					<Languages languageText="ENGLISH - AU"/>
					<Languages languageText="ENGLISH - SG / PH / MY / ID"/>
					<Languages languageText="JAPANESE"/>
					<Languages languageText="KOREAN"/>
					<Languages languageText="HINDI"/>
					<Languages languageText="CHINESE - SIMPLIFIED"/>
					<Languages languageText="CHINESE"/>
				</div>
			</div>
		</>
	)
}

export default LanguageContainer