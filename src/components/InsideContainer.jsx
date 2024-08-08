import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InsideItems from './Inside/InsideItems.jsx'
import FirstInside from './Inside/FirstInside.jsx'
import UbiForward from '../assets/UbiForward.png'
import UbiTheCrew from '../assets/UbiTheCrew.jpg'
import UbiPride from '../assets/UbiPride.jpg'
import LeftArrow from '../assets/logos&Icons/darkGrayLeftArrow.svg';
import RightArrow from '../assets/logos&Icons/darkGrayRightArrow.svg';

function InsideContainer() {
		const Buttons = ({next, previous, goToSlide, ...rest}) => {
		const {carouselState: {currentSlide}} = rest;
		return(
			<div className="CarouselLogosNBtns__Container">

				<button className="CarouselBtn--btn InsideLeft InsideBtn" onClick={() =>  previous()}>
					<img className="CarouselBtn--img ExploreGamesCarouselBtn--img"src={LeftArrow} alt="LefttBtn"/>
				</button>

				<button className="CarouselBtn--btn InsideRight InsideBtn" onClick={() => next()}>
					<img className="CarouselBtn--img ExploreGamesCarouselBtn--img" src={RightArrow} alt="RightBtn"/>
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
			<div className="Carousel__Container">
				<h2 className="Carousel__Container--h2">INSIDE UBISOFT</h2>
				<Carousel responsive={responsive} infinite={true} arrows={false} customButtonGroup={<Buttons/>} containerClass="PaddingBtn">

				<div className="CarouselItem">
					<InsideItems img={UbiForward} imgAlt="Ubisoft Forward 2024" text="UBISOFT FORWARD 2024 ANNOUNCE"/>
				</div>

				<div className="CarouselItem">
					<InsideItems img={UbiTheCrew} imgAlt="The Crew Story" text="THE INSIDE STORY OF THE CREW"/>
				</div>

				<div className="CarouselItem">
					<InsideItems img={UbiPride} imgAlt="Ubisoft LGTBQERWEASDZXCASD+" text="UBISOFT'S COMMITMENT TO LGBTQIA+ COMMUNITIES"/>
				</div>

				</Carousel> 
			</div>
		</>
	)
}

export default InsideContainer 