import React, { useState, useEffect, useContext } from "react";

export const DetailPlanets = (props) => {

    const { item_properties, uid } = props
    
	return (
    <>
        <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} alt="" />
        <ul>
            <li><strong>Name:</strong> {item_properties?.name}</li>
            <li><strong>Terrain:</strong> {item_properties?.terrain}</li>
            <li><strong>Climate:</strong> {item_properties?.climate}</li>
            <li><strong>Gravity:</strong> {item_properties?.gravity}</li>
            <li><strong>Population:</strong> {item_properties?.population}</li>
            <li><strong>Diameter:</strong> {item_properties?.diameter}</li>
            <li><strong>Rotation Period:</strong> {item_properties?.rotation_period}</li>
            <li><strong>Orbital Period:</strong> {item_properties?.orbital_period}</li>
        </ul>
    </>
    )
};
