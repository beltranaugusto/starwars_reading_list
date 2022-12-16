import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"; 

export const Navbar = () => {

    const { store, actions } = useContext(Context);
    const [ favorite, setFavorite ] = useState(store.favorites)

    useEffect(() => {
        setFavorite(store.favorites)
    }, [store.favorites])

	return (
        <nav className="navbar navbar-light bg-white py-3 page-scroll">
            <div className="container-fluid">
                <img className="nav-icon" src="https://cdn.worldvectorlogo.com/logos/star-wars.svg" />
                <div className="dropdown">
                    <a className="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge bg-secondary">{favorite.length}</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                        {favorite.length
                        ?(favorite.map((item, index) => {
                                return (
                                <>
                                    <div className="d-flex justify-content-between align-items-center px-3 trash-parent">
                                        <Link to={`/${item["nature"]}/` + item["id"]}>
                                            <li key={index}><a className="dropdown-item rounded" href="#">{item["name"]}</a></li>
                                        </Link>
                                        <i onClick={() => actions.favorite(item["name"], item["nature"], item["id"])} className="fa-solid fa-trash mx-2 trash dropdown-item rounded"></i>
                                    </div>
                                </>
                                )
                            }))
                        :<li className="dropdown-item">You have no favorites</li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
};
