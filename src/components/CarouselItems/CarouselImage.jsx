function CarouselImage({image, alt,}){
	return(
		<>
			<div className="CarouselImage__Container">
				<img className="CarouselImage__Container--img" src={image} alt={alt}/>
			</div>
		</>
	)
}

export default CarouselImage