import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AssassinsCreed from '../assets/acShadowsMobile.jpg'
import StarWars from '../assets/ubi-homescreen-swo-fwd23-bg-desktop-v2.jpg'
import AssassinsCreedLogo from '../assets/logos&Icons/ACLogo.png'
import StarWarsLogo from '../assets/logos&Icons/SWLogo.png';
import ubisoftPlus from '../assets/UbisoftPlus.png'
import CarouselI from './CarouselItems/CarouselI.jsx'
import Logos from './CarouselItems/logos.jsx'
import LeftArrow from '../assets/logos&Icons/grayLeftArrow.svg';
import RightArrow from '../assets/logos&Icons/grayRightArrow.svg';

/*Images*/

import XDefiant from '../assets/XdefiantMobile.jpg';
import XDefiantLogo from '../assets/logos&Icons/XDefiantLogo.png'
import BattleCoreArena from '../assets/BattleCoreArena.jpg'
import BattleCoreArenaLogo from '../assets/logos&Icons/BattleCoreArenaLogo.png'
import Avatar from '../assets/AvatarMobile.jpg'
import AvatarLogo from '../assets/logos&Icons/AvatarLogo.png'

function CarouselContainer() { 
	const Buttons = ({next, previous, goToSlide, ...rest}) => {
		const {carouselState: {currentSlide}} = rest;
		return(
			<div className="CarouselLogosNBtns__Container">

				<button className="CarouselBtn--btn CarouselLeft" onClick={() =>  previous()}>
					<img className="CarouselBtn--img"src={LeftArrow} alt="LefttBtn"/>
				</button>

				<button className="CarouselBtn--btn CarouselRight" onClick={() => next()}>
					<img className="CarouselBtn--img" src={RightArrow} alt="RightBtn"/>
				</button>
			</div>
			)
	}
	const responsive = {
		mobile: {
			breakpoint: {
				max: 476, min: 0
			},
			items: 1
		}
	}
	return(
		<>
			<div className="CarouselContainer">
				<Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true} customButtonGroup={<Buttons/>} >
					<div>
					
					<CarouselI 
					GameDescription__Container="GameDescription__Container"
					carouselImage={AssassinsCreed} 
					carouselAlt="AssassinsCreed Shadows"
					GameTitle__ContainerClass="GameTitle__Container AssassinsCreedTitleContainer"
					GameTitle__ContainerTitleClass="GameTitle__Container--title"
					title="ASSASSIN'S CREED SHADOWS RELEASES NOVEMBER 15TH" 
					description="Become a legendary samurai and a shinobi assassins in feudal Japan. Watch more than 12 minutes of gameplay footage now." 
					classN="CarouselItemBtn__Container--btn BlackBtn"
					CarouselItemBtn__ContainerClass="CarouselItemBtn__Container"
					btnText1="WATCH NOW"
					btnText2="PRE-ORDER NOW"
					logoImage={AssassinsCreedLogo}/>
				</div>

				<div>
					<CarouselI
						GameDescription__Container="GameDescription__Container Short"
						carouselImage={XDefiant}
						carouselAlt="XDefiant"
						GameTitle__ContainerClass="GameTitle__Container XDefiantTitleContainer"
						GameTitle__ContainerTitleClass="GameTitle__Container--title"
						title="XDEFIANT SEASON 1: OUT NOW!"
						description="New Faction, Maps, Weapons, and Ranked are coming with Season 1."
						classN="CarouselItemBtn__Container--btn YellowBtn"
						CarouselItemBtn__ContainerClass="CarouselItemBtn__Container"
						btnText1="WATCH TRAILER"
						btnText2="PLAY FREE NOW"
						logoImage={XDefiantLogo}/>
				</div>

				<div>
					<CarouselI
						GameDescription__Container="GameDescription__Container BattleCoreArenaGameContainer"
						carouselImage={BattleCoreArena}
						carouselAlt="BattleCoreArena"
						GameTitle__ContainerClass="GameTitle__Container BattleCoreTitleContainer"
						GameTitle__ContainerTitleClass="GameTitle__Container--title BattleCoreTitle"
						title="BATTLECORE ARENA - PLAY FOR FREE NOW!"
						description="BattleCore Arena is a competitive platform shooter where gravity mastery is the key to victory."
						classN="CarouselItemBtn__Container--btn OrangeBtn BattleCoreArenaBtn"
						CarouselItemBtn__ContainerClass="CarouselItemBtn__Container BattleCoreArenaBtnContainer"
						btnText1="PLAY FOR FREE"
						logoImage={BattleCoreArenaLogo}/>	
				</div>

				<div>
					<CarouselI
						GameDescription__Container="GameDescription__Container AvatarDescriptionContainer"
						carouselImage={Avatar}
						carouselAlt="Avatar Frontiers of Pandora"
						GameTitle__ContainerClass="GameTitle__Container AvatarContainer"
						GameTitle__ContainerTitleClass="GameTitle__Container--title AvatarTitle"
						title="PROTECT PANDORA. BECOME NA'VI."
						description="Reconnect with your lost heritage, discover what it truly means to be Na'vi, and join other clans to protect Pandora."
						classN="CarouselItemBtn__Container--btn BlueBtn"
						CarouselItemBtn__ContainerClass="CarouselItemBtn__Container"
						btnText1="WATCH TRAILER"
						btnText2="BUY NOW"
						logoImage={AvatarLogo}
					/>	
				</div>
				</Carousel>

{/* 				<div className="CarouselLogosNBtns__Container"> */}
{/* 					<button className="CarouselBtn--btn CarouselLeft"> */}
{/* 						<img className="CarouselBtn--img"src={LeftArrow} alt="LefttBtn"/> */}
{/* 					</button> */}
{/*  */}
{/*  */}
{/* 					<div className="CarouselNameLogo__Container"> */}
{/* 						<div className="CarouselDisplay"> */}
{/* 			 */}
{/* 						<Logos image={AssassinsCreedLogo} imageAlt='AssassinsCreed'/> */}
{/* 						<Logos image={StarWarsLogo} imageAlt="StarWars"/> */}
{/* 						 */}
{/* 						</div> */}
{/* 					</div> */}
{/*  */}
{/* 					<button className="CarouselBtn--btn CarouselRight"> */}
{/* 						<img className="CarouselBtn--img" src={RightArrow} alt="RightBtn"/> */}
{/* 					</button> */}
{/* 				</div> */}
			</div>
		</>
	)
}

export default CarouselContainer 