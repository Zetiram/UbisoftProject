import CorpItem from './CorpItem.jsx'
function CorpContainer() {
	return(
		<>
			<div className="CorpContainer" >
				<ul className="CorpContainerUl" >
					<li className="CorpContainerUl__li">
						<CorpItem text="Notice At Collection"/>
					</li>

					<li className="CorpContainerUl__li">
						<CorpItem text="Interest-Based Ads"/>
					</li>

					<li className="CorpContainerUl__li">
						<CorpItem text="Do Not Sell / Share My Personnal Information"/>
					</li>

					<li className="CorpContainerUl__li">
						<CorpItem text="Limit Use / Disclosure of My Sensitive Personal Information"/>
					</li>

					<li className="CorpContainerUl__li">
						<CorpItem text="Set cookies"/>
					</li>
				</ul>
			</div>
		</>
	)
}

export default CorpContainer