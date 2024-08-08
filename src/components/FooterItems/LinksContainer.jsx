import Links from './Links.jsx'
import UbiLogo from '../ubilogo.jsx'
function LinksContainer() {
	return(
		<>
			<div className="LinksContainer">
				<ul className="LinksContainer__ul">
					<li className="LinksContainer__ul--li">
						<Links text="UBISOFT CONNECT" />

					</li>


					<li className="LinksContainer__ul--li">
						<Links text="SUPPORT" />

					</li>

					<li className="LinksContainer__ul--li">
						<Links text="INVESTORS" />

					</li>

					<li className="LinksContainer__ul--li">
						<Links text="PRESS" />

					</li>

					<li className="LinksContainer__ul--li">
						<Links text="ABOUT US" />

					</li>

					<li className="LinksContainer__ul--li">
						<Links text="CAREERS" />

					</li>

					<li className="LinksContainer__ul--li">
						<Links text="LOCATIONS" />

					</li>

				</ul>
			</div>

			<div className="LogoLinkContainer">
				<UbiLogo/>
			</div>

			<div className="LinksContainer">
				<ul className="LinksContainer__ul--li">
					<li className="LinksContainer__ul--li">
						<Links text="CONTACT US"/>

					</li>

					<li className="LinksContainer__ul--li">
						<Links text="PRIVACY & LEGAL"/>

					</li>

				</ul>
			</div>
		</>
	)
}

export default LinksContainer