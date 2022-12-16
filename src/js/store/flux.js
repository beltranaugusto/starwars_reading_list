import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fetchNames: ["people", "planets", "vehicles", "species"],
			people: (localStorage["people"]) ? JSON.parse(localStorage["people"]) : [],
			planets: (localStorage["planets"]) ? JSON.parse(localStorage["planets"]) : [],
			vehicles: (localStorage["vehicles"]) ? JSON.parse(localStorage["vehicles"]) : [],
			species: (localStorage["species"]) ? JSON.parse(localStorage["species"]) : [],
			favorites: [],
		},
		
		actions: {
			fetchApiData: async () => {
				let store = getStore();
				for (let name of store.fetchNames){
					if (!store[name].length){
						try {
							let response = await fetch(`https://www.swapi.tech/api/${name}/`)
							if (response.ok){
								let data = await response.json()
								data.results.forEach(async (item) => {
									let response = await fetch(item.url)
									let data = await response.json()
									setStore({[name]:[...store[name], data.result]});
									localStorage.setItem(name, [JSON.stringify(store[name])])
								})
							}
						} catch(error) {
							console.log(error)
						}
					}
				} 			
			},
			favorite: (favoritedName, favoritedNature, favoritedId) => {
				let store = getStore();
				let favorites = store.favorites
				let alreadyFavorited = false

				for (let element of favorites){
					if (element["name"] === favoritedName) {
						alreadyFavorited = true
					}
				}

				if (alreadyFavorited){
					let newFavorites = favorites.filter((item, index) => item["name"] != favoritedName )
					setStore({favorites: newFavorites})
				} else {
					setStore({favorites:[...store.favorites, {"name":favoritedName, "nature":favoritedNature, "id": favoritedId}]})
				}

			}
		}
	};
};

export default getState;
