import React, { useState, useEffect, useContext } from "react";

export const DetailSpecies = (props) => {

    const { item_properties, uid } = props
    
	return (
    <>
        <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/species/${uid}.jpg`} alt="" />
        <ul>
            <li><strong>Name:</strong> {item_properties?.name}</li>
            <li><strong>Classification:</strong> {item_properties?.classification}</li>
            <li><strong>Designation:</strong> {item_properties?.designation}</li>
            <li><strong>Average Height:</strong> {item_properties?.average_height}</li>
            <li><strong>Average Lifespan:</strong> {item_properties?.average_lifespan}</li>
            <li><strong>Language:</strong> {item_properties?.language}</li>
            <li><strong>Skin Colors:</strong> {item_properties?.skin_colors}</li>
            <li><strong>Eye Colors:</strong> {item_properties?.eye_colors}</li>
        </ul>
    </>
    )
};
