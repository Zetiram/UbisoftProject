import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItems from './ExploreGamesItems/CarouselItems.jsx'
import Logos from './ExploreGamesItems/logos.jsx'

// 
import StarWarsBox from '../assets/swo-boxshot.jpg';
import ACShadowBox from '../assets/AC-Shadows-boxshot.jpg';
import XDefiantBox from '../assets/XDefiant-boxshot.jpg';
import AnnoBox from '../assets/anno-boxshot.jpg'
import AvatarBox from '../assets/avatar-boxshot.jpg'
import SkullNBonesBox from '../assets/SkullNBonesBox.jpg'
import POPBox from '../assets/POPBox.jpg'
import MotorFestBox from '../assets/MotorFestBox.jpg'
import ACMirageBox from '../assets/ACMirageBox.jpg'
import JustDanceBox from '../assets/JustDanceBox.jpg'


// 

import AppleLogo from '../assets/logos&Icons/appleLogo.svg'
import PS4Logo from '../assets/logos&Icons/ps4Logo.svg'
import SwitchLogo from '../assets/logos&Icons/SwitchIcon.svg'
import WindowsLogo from '../assets/logos&Icons/WindowsIcon.svg'
import XboxLogo from '../assets/logos&Icons/xboxLogo.svg'
import LunaLogo from '../assets/logos&Icons/lunaLogo.svg'
import LeftArrow from '../assets/logos&Icons/darkGrayLeftArrow.svg';
import RightArrow from '../assets/logos&Icons/darkGrayRightArrow.svg';

function ExploreGames() {
		const Buttons = ({next, previous, goToSlide, ...rest}) => {
		const {carouselState: {currentSlide}} = rest;
		return(
			<div className="CarouselLogosNBtns__Container ExploreGamesCarouselBtns">

				<button className="CarouselBtn--btn CarouselLeft ExploreGamesCarouselBtn--btn" onClick={() =>  previous()}>
					<img className="CarouselBtn--img ExploreGamesCarouselBtn--img"src={LeftArrow} alt="LefttBtn"/>
				</button>

				<button className="CarouselBtn--btn CarouselRight ExploreGamesCarouselBtn--btn" onClick={() => next()}>
					<img className="CarouselBtn--img ExploreGamesCarouselBtn--img" src={RightArrow} alt="RightBtn"/>
				</button>
			</div>
			)
	}
	const responsive = {
		mobile: {
			breakpoint: {max: 476, min: 0},
			items: 3
		}
	}
	return(
		<>
			<div className="ExploreGames__Container">
				<h2 className="ExploreGames__Container--h2">EXPLORE MORE GAMES</h2>
				
				<Carousel responsive={responsive} infinite={true} arrows={false} customButtonGroup={<Buttons/>} containerClass="ExplorePaddingBtn">
					<div>
						<CarouselItems thumbnail={StarWarsBox} thumbnailAlt="Star Wars Outlaws" title="Star Wars Outlaws"/>
						<div className="LogosContainer">
							<Logos img={XboxLogo} imgAlt="Xbox logo"/>
							<Logos img={PS4Logo} imgAlt="PS4 logo"/>
							<Logos img={WindowsLogo} imgAlt="Windows logo"/>

						</div>
					</div>

					<div>
						<CarouselItems thumbnail={ACShadowBox} thumbnailAlt="Assassins Creed Shadows" title="Assassin's Creed Shadows"/>
						<div className="LogosContainer">
							<Logos img={XboxLogo} imgAlt="Xbox logo"/>
							<Logos img={PS4Logo} imgAlt="PS4 logo"/>
							<Logos img={WindowsLogo} imgAlt="Windows logo"/>
							<Logos img={LunaLogo} imgAlt="Luna Logo"/>
							<Logos img={AppleLogo} imgAlt="Apple Logo"/>
						</div>

					</div>

					<div>
						<CarouselItems thumbnail={XDefiantBox} thumbnailAlt="XDefiant" title="XDEFIANT"/>
						<div className="LogosContainer">							
							<Logos img={WindowsLogo} imgAlt="Windows logo"/>
							<Logos img={PS4Logo} imgAlt="PS4 logo"/>
							<Logos img={XboxLogo} imgAlt="Xbox logo"/>
							<Logos img={LunaLogo} imgAlt="Luna Logo"/>

						</div>

					</div>
					<div>
						<CarouselItems thumbnail={AnnoBox} thumbnailAlt="Anno 117: Pax Romana" title="Anno 117: Pax Romana"/>
						<div className="LogosContainer">
							<Logos img={WindowsLogo} imgAlt="Windows logo"/>
							<Logos img={PS4Logo} imgAlt="PS4 logo"/>
							<Logos img={XboxLogo} imgAlt="Xbox logo"/>
						</div>
					</div>

					<div>
						<CarouselItems thumbnail={AvatarBox} thumbnailAlt="Avatar: Frontiers of Pandora" title="Avatar: Frontiers of Pandora"/>
						<div className="LogosContainer">
							<Logos img={WindowsLogo} imgAlt="Windows logo"/>
							<Logos img={XboxLogo} imgAlt="Xbox logo"/>
							<Logos img={PS4Logo} imgAlt="PS4 logo"/>
							<Logos img={LunaLogo} imgAlt="Luna Logo"/>

						</div>

					</div>

					<div>
						<CarouselItems thumbnail={SkullNBonesBox} thumbnailAlt="Skull And Bones" title="Skull and Bones"/>
						 <div className="LogosContainer">
						 	<Logos img={PS4Logo} imgAlt="PS4Logo"/>
						 	<Logos img={XboxLogo} imgAlt="XboxLogo"/>
						 	<Logos img={LunaLogo} imgAlt="LunaLogo"/>
						 	<Logos img={WindowsLogo} imgAlt="WindowsLogo"/>
						 </div>
					</div>

					<div>
						<CarouselItems thumbnail={POPBox} thumbnailAlt="Prince of Persia: the lost Crown" title="Prince of Persia: The Lost Crown"/>
						 <div className="LogosContainer">
						 	<Logos img={WindowsLogo} imgAlt="WindowsLogo"/>
						 	<Logos img={SwitchLogo} imgAlt="SwitchLogo"/>
						 	<Logos img={PS4Logo} imgAlt="PS4Logo"/>
						 	<Logos img={XboxLogo} imgAlt="XboxLogo"/>
						 	<Logos img={LunaLogo} imgAlt="LunaLogo"/>

						 </div>
					</div>

					<div>
						<CarouselItems thumbnail={MotorFestBox} thumbnailAlt="the Crew Motorfest" title="the Crew Motorfest"/>
						 <div className="LogosContainer">
						 	<Logos img={WindowsLogo} imgAlt="WindowsLogo"/>
						 	<Logos img={PS4Logo} imgAlt="PS4Logo"/>
						 	<Logos img={XboxLogo} imgAlt="XboxLogo"/>
						 	<Logos img={LunaLogo} imgAlt="LunaLogo"/>
						 </div>
					</div>

					<div>
						<CarouselItems thumbnail={ACMirageBox} thumbnailAlt="Assassin's Creed Mirage" title="Assassin's Creed Mirage"/>
						 <div className="LogosContainer">
						 	<Logos img={XboxLogo} imgAlt="XboxLogo"/>
						 	<Logos img={PS4Logo} imgAlt="PS4Logo"/>
						 	<Logos img={WindowsLogo} imgAlt="WindowsLogo"/>
						 	<Logos img={LunaLogo} imgAlt="LunaLogo"/>
						 	<Logos img={AppleLogo} imgAlt="AppleLogo"/>
						 </div>
					</div>

					<div>
						<CarouselItems thumbnail={JustDanceBox} thumbnailAlt="Just Dance 2024 Edition" title="Just Dance 2024 Edition"/>
						 <div className="LogosContainer">
						 	<Logos img={SwitchLogo} imgAlt="SwitchLogo"/>
						 	<Logos img={XboxLogo} imgAlt="XboxLogo"/>
						 	<Logos img={PS4Logo} imgAlt="PS4Logo"/>
						 </div>
					</div>
					
				</Carousel>
				
			<div className="ViewGames__Container">
				<button className="ViewGames__Container--Btn PinkBtn">
					VIEW ALL GAMES
				</button>
			</div>
			</div>

		</>
	)
}

export default ExploreGames