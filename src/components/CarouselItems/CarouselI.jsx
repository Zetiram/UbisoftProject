import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UbisoftP from '../ubisoftP.jsx'
import CarouselImage from './CarouselImage.jsx';
import CarouselItemBtn from './CarouselItemBtn.jsx'
import Logos from './logos.jsx'

function CarouselI({GameDescription__Container, carouselImage, carouselAlt, GameTitle__ContainerClass, GameTitle__ContainerTitleClass, title, description, CarouselItemBtn__ContainerClass, btnText1, btnText2, classN, logoImage, logoAlt}) {
	useEffect(() => {
		AOS.init();
	}, [])

	return(
		<>
			<div className="CarouselItemContainer">
				<UbisoftP/>

				<CarouselImage image={carouselImage} alt={carouselAlt}/>


				<div className="GameNBtnContainer">
					
					<div className={GameTitle__ContainerClass}>
						<h2 className={GameTitle__ContainerTitleClass}>{title}</h2>
					</div>


					
					<div className={GameDescription__Container}>
						<p className="GameDescription__Container--p">{description}</p>
					</div>

					<div className={CarouselItemBtn__ContainerClass}>
						<CarouselItemBtn classN={classN} text={btnText1}/>
						<CarouselItemBtn classN={classN} text={btnText2}/>
					</div>

				</div>

				<div className="CarouselNameLogo__Container">
					<Logos logoImage={logoImage} logoAlt={logoAlt}/>
				</div>

			</div>
		</>
	)
}

export default CarouselI