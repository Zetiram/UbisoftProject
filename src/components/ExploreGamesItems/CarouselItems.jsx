function CarouselItems({thumbnail, thumbnailAlt, title}){
	return(
		<>
			<div className="ViewGamesCarouselItem__Container">
				<img className="ViewGamesCarouselItem__Container--img" src={thumbnail} alt={thumbnailAlt}/>

				<a href="#" className="ViewGamesCarouselItem__Container--a">{title}</a>
			</div>
		</>
	)
}

export default CarouselItems