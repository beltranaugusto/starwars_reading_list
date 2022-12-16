# Detail.jsx comments

// Aqui tenia un error que no me dejaba avanzar.
// Aqui se muestra el detalle de planetas, personajes. Se llega mediante un link que envia un parametro que es lo que se usa para obtener la informacion del store mediante un filter.
// No funcionaba si entraba directo a la ruta, porque la informacion en el store aun no se guarda.
// Se resolvió mediante el uso de useState para tener lo que se le pide al store en un estado.
// useEffect con dependencias para ejecutar la funcion que nos devuelve lo que queremos del store cuando se el fetch lo modifique.
// Y esa funcion modifica el estado re renderizando el componente cuando ya exista la data en el store.
// Y las propiedades del planeta o personaje en el html con un nullish para que el codigo no explote si aun no existe nada.

//dependencia, se vuelve a ejecutar cuando haya cambio en la ruta de la pagina