import StoreItems from './Store/StoreItems.jsx'
import ACStore from '../assets/ACStore.jpg'
import SWOStore from '../assets/SWOStore.jpg'
import JoinStore from '../assets/joinToStore.jfif'
function StoreContainer() {
	return(
		<>
			<div className="Store__Container">
				<h2 className="Store__Container--h2">UBISOFT STORE</h2>
				
				<div className="ThumbnailContainer">
					<StoreItems title="PRE-ORDER THE GOLD OR ULTIMATE EDITION FOR EARLY ACCESS" img={SWOStore} imgAlt="Star Wars Outlaws"/>
					<StoreItems title='PRE-ORDER AND GET BONUS QUEST "THROWN TO THE DOGS"' img={ACStore} imgAlt="Assassin's Creed Shadows"/>
					<StoreItems title="JOIN UBISOFT+ CLASSICS FOR ONLY 1$" img={JoinStore} imgAlt="Join Ubisoft+"/>
				</div>
			</div>
		</>
	)
}

export default StoreContainer