import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useParams } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton.jsx";


export const Planets = (props) => {

    const { nature } = props
    const { store, actions } = useContext(Context);

	return (
    <div className="container">
            <h3 className="display-3 text-center">Planets</h3>
            <div className="scroll-x d-flex my-3 text-center">
                {store.planets.map((item) => (
                <div key={item.uid} className="d-flex flex-column character-card fw-light fs-5 p-2">
                    <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt="" />

                    <div className="my-3 d-flex flex-column">
                        <div><strong>Name:</strong> {item.properties.name}</div>
                        <div><strong>Population:</strong> {item.properties.population}</div>
                        <div><strong>Terrain:</strong> {item.properties.terrain}</div>
                    </div>

                    <Link to={`/${nature}/` + item._id}>
                        <button className="w-100 more btn btn-primary mb-2">
                            More
                        </button>
                    </Link>

                    <FavoriteButton name={item?.properties?.name} />
                    
                </div>
                ))}
            </div>
	</div>
    )
};
