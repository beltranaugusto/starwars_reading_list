import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useParams } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton.jsx";



export const Characters = (props) => {
    
    const { nature } = props
    const { store, actions } = useContext(Context);

	return (
    <div className="container">
            <h3 className="display-3 text-center">Characters</h3>
            <div className="scroll-x d-flex my-3 text-center">
                {store.people.map((item) => (
                <div key={item.uid} className="d-flex flex-column character-card fw-light fs-5 p-2">
                    <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="" />
                    
                    <div className="my-3 d-flex flex-column">
                        <div><strong>Name:</strong> {item.properties.name}</div>
                        <div><strong>Gender:</strong> {item.properties.gender}</div>
                        <div><strong>Hair Color:</strong> {item.properties.hair_color}</div>
                        <div><strong>Eye Color:</strong> {item.properties.eye_color}</div>
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
