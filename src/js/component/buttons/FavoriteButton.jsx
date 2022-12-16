import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";


export const FavoriteButton = (props) => {

    const { store, actions } = useContext(Context);
    const {name, nature, id} = props
    
    const favObjectName = (store.favorites.find((item) => item["name"] === name))?.name

	return (
    <button
        onClick={() => {actions.favorite(name, nature, id)}} 
        className={`more btn btn-warning text-danger ` + (favObjectName ? "btn-danger text-white": null)}
    ><i class="fa-solid fa-heart"></i></button>
    )
};
