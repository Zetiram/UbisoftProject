import UConnect from './FooterItems/UbisoftConnectBtn.jsx'
import languageContainer from './FooterItems/languageContainer.jsx'
import LinksContainer from './FooterItems/LinksContainer.jsx'
import CorpContainer from './FooterItems/CorpContainer.jsx'
import esrb from '../assets/esrb-privacy-footer.jpg'
function Footer() {
	return(
		<>
			<footer>
				<UConnect text="DOWNLOAD UBISOFT CONNECT"/>

				<div className="FooterLinkContainer">
					<LinksContainer/>

				</div>

				<CorpContainer/>

				<div className="LegalContainer">
					<small className="LegalContainer--small">
						&copy; 2024 Ubisoft Entertainment. All Rights Reserved. Ubisoft, Ubi.com and the Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S. and/or other countries.
					</small>
				</div>

				<div className="EsrbContainer">
					<img className="EsrbContainer--img" src={esrb} alt="rate"/>
				</div>

			</footer>
		</>
	)
}

export default Footer