function NewsItem({img, imgAlt, date, title}) {

	return(
		<>
			<a className="ThumbnailContainer__AContainer" href="#">
				<div className="NewsItem__Container">
					<img className="NewsItem__Container--img" src={img} alt={imgAlt}/>

					<div className="NewsItemText__Container">
						<small className="NewsItemText__Container--small">{date}</small>
						<h2 className="NewsItemText__Container--h2">{title}</h2>
					</div>
				</div>
			</a>
		</>
	)
}

export default NewsItem