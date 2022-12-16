import React, { useState, useEffect, useContext } from "react";

export const DetailPeople = (props) => {

    const { item_properties, uid } = props
    
	return (
    <>
        <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt="" />
        <ul>
            <li><strong>Name:</strong> {item_properties?.name}</li>
            <li><strong>Gender:</strong> {item_properties?.gender}</li>
            <li><strong>Birth Year:</strong> {item_properties?.birth_year}</li>
            <li><strong>Height:</strong> {item_properties?.height}</li>
            <li><strong>Mass:</strong> {item_properties?.mass}</li>
            <li><strong>Skin Color:</strong> {item_properties?.skin_color}</li>
            <li><strong>Eye Color:</strong> {item_properties?.eye_color}</li>
            <li><strong>Hair Color:</strong> {item_properties?.hair_color}</li>
        </ul>
    </>
    )
};
