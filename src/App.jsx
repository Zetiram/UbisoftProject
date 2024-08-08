import {useState} from 'react'
import Nav from './components/Nav.jsx'
import UbiLogo from './components/ubilogo.jsx'
import MenuContainer from './components/MenuContainer.jsx'
import CarouselContainer from './components/CarouselContainer.jsx'
import UbisoftPremium from './components/UbisoftPremium.jsx'
import ExploreGames from './components/ExploreGames.jsx'
import News from './components/News.jsx'
import StoreContainer from './components/StoreContainer.jsx'
import InsideContainer from './components/InsideContainer.jsx'
import Promo from './components/promo.jsx'
import UbiConnectContainer from './components/UbiConnectContainer.jsx'
import Footer from './components/footer.jsx'
// Assets
import ubisoftLogo from './assets/logos&Icons/ubisoftLogo.svg'
import ellipse from './assets/logos&Icons/elipsis.svg'
import userIcon from './assets/logos&Icons/userIcon.svg'
import closeIcon from './assets/logos&Icons/closeIcon.svg'
import promotion from './assets/promo.png'
import Discord from './assets/logos&Icons/Discord.png'
import Linkedin from './assets/logos&Icons/Linkedin.png'
// style
import './styles/style.css'

function App() {
	const [active, setActive] = useState(false)

	const burger = () => {
		setActive(!active)
}

  return (
    <>
      <nav>
      		<div className="NavMobile">

				<div className="ellipseMenu__Container" onClick={burger}>
					{active == false ? <img className="ellipseMenu__Container--img" src={ellipse} alt="Elipse"/> :  <img className="userIcon__Container--img" src={closeIcon} alt="userIcon"/>}
				</div>

				<div className="UbisoftLogo__Container">
					<UbiLogo/>
				</div>

				<div className="userIcon__Container">
					<img className="userIcon__Container--img" src={userIcon} alt="userIcon"/>

				</div>

			</div>
      </nav>

        {active ? <> <div className="MenuCContainer"> <MenuContainer/> </div> </> : <div className="MenuCContainer"> </div>}

      <main>

        <div className="message">
          <p className="messageContainer--pEs">Por motivos de copyright, este proyecto solo es visible móviles. Puedes usar Chrome Dev Tools con un ancho de 375px a 425px.</p>
          <p className="messageContainer--pEn">Due to copyright issues, this project is only visible on mobile devices. You can use Chrome Dev Tools with a width of 375px to 425px.</p>
        </div>

          <section className="CarouselSection">
          	<CarouselContainer/>
          </section>

          <section>
          	<UbisoftPremium title="XDefiant Out Now!" description="Ubisoft+ Premium members get acces to skins and exclusive content." btnText="Join Now"/>
          </section>

          <section className="ExploreGamesSection">
            <ExploreGames/>
          </section>

          <section className="NewsContainerSection">
            <News/>
              <div className="NewsBtn__Container">
                <button className="NewsBtn__Container--btn PinkBtn">ALL NEWS</button>
              </div>
          </section>

          <section className="StoreContainerSection">
            <StoreContainer/>
          </section>

          <section className="InsideContainerSection">
            <InsideContainer/>
          </section>

          <section>
            <Promo img={promotion} imgAlt="Ubisoft Fan kits, Wallpapers and More!" text="Ubisoft Fan kits, Wallpapers and More!"/>
          </section>

          <section className="UbiConnectSection">
            <div className="UbiConnectSection__Container">
               <UbiConnectContainer/>

            </div>
          </section>

            <div className="SocialMedia__Container">
              <img className="SocialMedia__Container--img" src={Discord} alt="Discord"/>
              <img className="SocialMedia__Container--img" src={Linkedin} alt="Linkedin"/>
            </div>
      </main>


          <Footer/>
    </>
  )
}

export default App



