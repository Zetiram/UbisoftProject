import UbiConnectItems from './UbiConnect/UbiConnectItems.jsx'
import Connect from '../assets/ubisoftConnect.png'
function UbiConnectContainer() {
	return(
		<>
			<UbiConnectItems img={Connect} imgAlt="Ubisoft Connect" title="Ubisoft Connect" description="All your games, friends and benefits in one place." consoles="PC | Console | Mobile" />
			<div className="UbiConnectBtn__Container">
				<button className="UbiConnectBtn__Container--btn">GET UBISOFT CONNECT</button>
			</div>
		</>

	)
}

export default UbiConnectContainer