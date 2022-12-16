import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./component/Navbar.jsx";
import { Detail } from "./component/Detail.jsx";
import { Home } from "./views/Home.jsx";
import injectContext from "./store/appContext";


const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div className="container">
			<BrowserRouter basename={basename}>
					<Navbar/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/:detail/:theid" element={<Detail />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
