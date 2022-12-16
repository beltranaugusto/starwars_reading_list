import React from "react";
import { ItemScroll } from "../component/ItemScroll.jsx";



export const Home = () => {

	return (
    <>  
        
        <h3 className="display-5 page-scroll mb-0 pt-3">Characters</h3>
        <ItemScroll nature="people" />
        
        <h3 className="display-5 page-scroll mb-0 pt-3">Planets</h3>
        <ItemScroll nature="planets" />
        
        <h3 className="display-5 page-scroll mb-0 pt-3">Vehicles</h3>
        <ItemScroll nature="vehicles" />
        
        <h3 className="display-5 page-scroll mb-0 pt-3">Species</h3>
        <ItemScroll nature="species" />
        <hr className="last-hr"/>
        
    </> 
    )
};
