import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./buttons/FavoriteButton.jsx";

export const ItemScroll = (props) => {
    
    const { nature } = props
    const { store } = useContext(Context);

	return (
    <div className="container">
            <div className="scroll-x d-flex my-3 text-center align-items-center">
                {store[nature].map((item) => (
                    <div key={item.uid} className="scroll-card d-flex flex-column fw-light fs-5 p-2 text-wrap my-3 border rounded mx-2">

                        {nature === "people" ?
                            <>
                                <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="" />
                                <div className="my-3 d-flex flex-column">
                                    <div><strong>Name:</strong> {item.properties.name}</div>
                                    <div><strong>Gender:</strong> {item.properties.gender}</div>
                                    <div><strong>Hair Color:</strong> {item.properties.hair_color}</div>
                                    <div><strong>Eye Color:</strong> {item.properties.eye_color}</div>
                                </div>
                            </>
                        : null}

                        {nature === "planets" ?
                            <>
                                <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt="" />
                                <div className="my-3 d-flex flex-column">
                                    <div><strong>Name:</strong> {item.properties.name}</div>
                                    <div><strong>Population:</strong> {item.properties.population}</div>
                                    <div><strong>Terrain:</strong> {item.properties.terrain}</div>
                                </div>
                            </>
                        : null}

                        {nature === "vehicles" ?
                            <>
                                <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} alt="" />
                                <div className="my-3 d-flex flex-column">
                                    <div><strong>Name:</strong> {item.properties.name}</div>
                                    <div><strong>Passengers:</strong> {item.properties.passengers}</div>
                                    <div><strong>Vehicle Class:</strong> {item.properties.vehicle_class}</div>
                                </div>
                            </>
                        : null}

                        {nature === "species" ?
                            <>
                                <img className="rounded" onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} src={`https://starwars-visualguide.com/assets/img/species/${item.uid}.jpg`} alt="" />
                                <div className="my-3 d-flex flex-column">
                                    <div><strong>Name:</strong> {item.properties.name}</div>
                                    <div><strong>Classification:</strong> {item.properties.classification}</div>
                                    <div><strong>Language:</strong> {item.properties.language}</div>
                                </div>
                            </>
                        : null}  
                                              
                        <FavoriteButton name={item?.properties?.name} nature={nature} id={item?._id} />

                        <Link to={`/${nature}/` + item._id}>
                            <button className="w-100 more btn btn-primary mt-2">
                                More
                            </button>
                        </Link>

                    </div>
                ))}
            </div>
	</div>
    )
};
