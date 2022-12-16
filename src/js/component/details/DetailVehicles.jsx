import React, { useState, useEffect, useContext } from "react";

export const DetailVehicles = (props) => {

    const { item_properties, uid } = props
    
	return (
    <>
        <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} alt="" />
        <ul>
            <li><strong>Name:</strong> {item_properties?.name}</li>
            <li><strong>Vehicle Class:</strong> {item_properties?.vehicle_class}</li>
            <li><strong>Manufacturer:</strong> {item_properties?.manufacturer}</li>
            <li><strong>Cost in Credits:</strong> {item_properties?.cost_in_credits}</li>
            <li><strong>Lenght:</strong> {item_properties?.lenght}</li>
            <li><strong>Crew:</strong> {item_properties?.crew}</li>
            <li><strong>Passengers:</strong> {item_properties?.passengers}</li>
            <li><strong>Cargo Capacity:</strong> {item_properties?.cargo_capacity}</li>
            <li><strong>Consumables:</strong> {item_properties?.consumables}</li>
        </ul>
    </>
    )
};
