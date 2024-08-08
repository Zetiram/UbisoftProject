import download from '../../assets/logos&Icons/downloadIcon.svg'
import search from '../../assets/logos&Icons/searchIcon.svg'

function DownloadMenu() {
	return(
		<>
			<div className="DMenuContainer">
				<a href="#">Download Ubisoft Connect</a>
				<img className="DMenuContainer--img" src={download} alt="download icon"/>
			</div>

			<div className="DInputContainer">
				<input type="text" placeholder="Type your search" />
			</div>
		</>
	)
}

export default DownloadMenu