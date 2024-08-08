import { useState, useEffect } from 'react';
import { Item } from './News/NewsArray.js';
import NewsItem from './News/NewsItem.jsx';

function News() {
    useEffect(() => {
        setFilteredItems(Item.slice(0, 6));
    }, []);
    
    const [filteredItems, setFilteredItems] = useState(Item);
    const [activeClass, setActiveClass] = useState(null); // Estado para la clase activa

    const AC = () => {
        setActiveClass("Assassin's Creed");
        let item = Item.filter(result => result.id === "Assassin's Creed");
        setFilteredItems(item);
    };

    const R6S = () => {
        setActiveClass("R6S");
        let item = Item.filter(result => result.id === 'R6S');
        setFilteredItems(item);
    };

    const SWO = () => {
        setActiveClass("SWO");
        let item = Item.filter(result => result.id === 'SWO' || result.id3 === 'SWO');
        setFilteredItems(item);
    };

    const TD = () => {
        setActiveClass("The Division");
        let item = Item.filter(result => result.id === 'The Division');
        setFilteredItems(item);
    };

    const All = () => {
        setActiveClass("All");
        setFilteredItems(Item.slice(0, 6));
    };

    const isActive = (id) => {
        return activeClass === id ? 'active' : '';
    };

    return (
        <>
            <div className="News__Container">
                <h2 className="News__Container--h2">LATEST NEWS</h2>
                <div className="NewsP__Container">
                    <p className={`NewsP__Container--p ${isActive('All')}`} onClick={All}>ALL NEWS</p>
                    <p className={`NewsP__Container--p ${isActive("Assassin's Creed")}`} onClick={AC}>ASSASSIN'S CREED</p>
                    <p className={`NewsP__Container--p ${isActive('R6S')}`} onClick={R6S}>RAINBOW SIX</p>
                    <p className={`NewsP__Container--p ${isActive('SWO')}`} onClick={SWO}>STAR WARS OUTLAWS</p>
                    <p className={`NewsP__Container--p ${isActive('The Division')}`} onClick={TD}>THE DIVISION</p>
                </div>
                
                <div className="ThumbnailContainer">
                    {filteredItems.map((item, index) => (
                        <div key={index}>
                            <NewsItem img={item.src} imgAlt={item.imgAlt} date={item.date} title={item.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default News;