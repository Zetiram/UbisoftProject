import { useState } from 'react';
import MenuPlay from './Menus/MenuPlay.jsx';
import MenuShop from './Menus/MenuShop.jsx';
import MenuExplore from './Menus/MenuExplore.jsx';
import MenuHelp from './Menus/MenuHelp.jsx';
import DownloadMenu from './Menus/DownloadMenu.jsx';
import SubMenu from './Menus/subMenu.jsx';

function MenuContainer() {
//   const [activeMenu, setActiveMenu] = useState(null);
// 
//   const show = (menuName) => {
//     setActiveMenu(prevMenu => (prevMenu === menuName ? null : menuName));
//   };

	const [active, setActive] = useState(null)

	const show = (name) => {
		setActive(check => (check === name ? null : name ))
	}

  return (
    <>

    	<div className="MenuContainer" onClick={() => show('play')}>
    		{active === 'play' ? (
    		<>
				<SubMenu title="PLAY" clas="MobileSubMenuContainer--img imgActive" />
	            <MenuPlay l1="BROWSE BY CATEGORY" l2="BROWSE BY GAME" l3="UBISOFT+" />
             </>) : (<SubMenu title="PLAY" clas="MobileSubMenuContainer--img imgInactive" />
    			)}
    	</div>

    	<div className="MenuContainer" onClick={() => show('shop')}>
    		{active === 'shop' ? (
    			<>
    				<SubMenu title="SHOP" clas="MobileSubMenuContainer--img imgActive" /> 
         			<MenuShop title="SHOP" l1="SHOP BY GAME" l2="MOST POPULAR" />
    			</>
    			) : (<SubMenu title="SHOP" clas="MobileSubMenuContainer--img imgInactive"/>
    			)}
    	</div>

    	<div className="MenuContainer" onClick={() => show('explore')}>
    		{active === 'explore' ? (
    			<>
    				<SubMenu title="EXPLORE" clas="MobileSubMenuContainer--img imgActive" /> 
         			<MenuExplore title="EXPLORE" l1="NEWS" l2="ABOUT US" l3="CAREERS" l4="SOCIAL IMPACT" l5="MORE THAN GAMES" />
    			</>
    			) : (<SubMenu title="EXPLORE" clas="MobileSubMenuContainer--img imgInactive"/>
    			)}
    	</div>

    	<div className="MenuContainer" onClick={() => show('help')}>
    		{active === 'help' ? (
    			<>
    				<SubMenu title="HELP" clas="MobileSubMenuContainer--img imgActive" /> 
         			<MenuHelp title="HELP" l1="GET HELP" l2="JOIN DISCORD" l3="DOWNLOAD UBISOFT CONNECT PC" />
    			</>
    			) : (<SubMenu title="HELP" clas="MobileSubMenuContainer--img imgInactive"/>
    			)}
    	</div>

      <div className="MenuContainerDownload DownloadMenuContainer">
        <DownloadMenu />
      </div>
    </>
  );
}

export default MenuContainer;
