import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import { FavoriteButton } from "./buttons/FavoriteButton.jsx";
import { DetailPeople } from "./details/DetailPeople.jsx";
import { DetailPlanets } from "./details/DetailPlanets.jsx";
import { DetailVehicles } from "./details/DetailVehicles.jsx";
import { DetailSpecies } from "./details/DetailSpecies.jsx";

export const Detail = () => {

    const { store } = useContext(Context);
    const params = useParams();

    const [item, setItem] = useState([])

    const findDetail = () => {
        const detail = store[params.detail].find( (person) => (person._id === params.theid) )
        setItem(detail)
    }

    useEffect(() => {
        findDetail();
    }, [params.theid]) 
    
	return (
        <div className="container d-flex flex-column detail mt-5 border rounded p-3">
            <div className="d-flex mb-2 align-items-center">
                {params.detail === "people" ? <DetailPeople item_properties={item?.properties} uid={item?.uid} /> : null}
                {params.detail === "planets" ? <DetailPlanets item_properties={item?.properties} uid={item?.uid} /> : null}
                {params.detail === "vehicles" ? <DetailVehicles item_properties={item?.properties} uid={item?.uid} /> : null}
                {params.detail === "species" ? <DetailSpecies item_properties={item?.properties} uid={item?.uid} /> : null}
            </div>
            <FavoriteButton name={item?.properties?.name} nature={params.detail} id={item?._id} />
            <Link to={"/"}>
                <span className="btn btn-primary btn-lg mt-2 w-100" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    )
};
