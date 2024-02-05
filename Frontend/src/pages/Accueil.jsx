import React, { useState, useEffect } from "react";
import { MenuBtn } from "../Components/MenuBtn.jsx";
import "./Acceuil.css";
import { Link } from "react-router-dom";
function Acceuil() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:8081/");
				console.log("response -> ", response);
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	console.log("--->", data);

	return (
		<div className="home-page">
			<header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 d-flex d-sm-block flex-colum align-items-center">
							<h2 className="mb-0 text-black fw-bold">
								Savourez l'instant, goûtez l'exception – Votre voyage culinaire
								commence ici!
							</h2>
							<h1 className="mb-5 text-black fw-bold text-center-items-sm-smart">
								Bistronomie Gourmande
							</h1>
							<MenuBtn />
						</div>
					</div>
				</div>
			</header>

			<div className="container my-4">
				<div className="row">
					<h2 className="fs-1 mb-5 text-uppercase fw-bold d-flex justify-content-center">
						Bistronomie Gourmande en quelques mots
					</h2>

					<p>
						L'art de la gastronomie décontractée. Savourez des plats exquis dans
						une ambiance conviviale. Une expérience culinaire qui allie
						créativité et gourmandise.
					</p>
					<p className="mb-5">
						Une fusion unique entre bistrot et gastronomie, offrant une
						expérience culinaire délicieuse et décontractée. Découvrez des plats
						raffinés dans une ambiance conviviale. Bienvenue dans un lieu où la
						gourmandise devient une célébration.
					</p>
					<Link to="/about" className="about_link">
						<div className="d-flex justify-content-center">
							<button type="button" className="btn btn-outline-danger btn-lg ">
								En savoir plus sur nous
							</button>
						</div>
					</Link>
				</div>
			</div>
			<div className="menu-section py-5 text-light shadow">
				<div className="container d-flex flex-column align-items-center">
					<h2 className="fs-1 mb-5 text-uppercase fw-bold text-white">
						Nos favoris
					</h2>
					<div className="row mb-5 w-100">
						<div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
							<h3 className="fs-2 mb-5 text-white">Nourriture</h3>
							<ul className="px-0">
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-white">Petit-déjeuner</p>
									<p className="fs-3 mx-2 text-success fw-nold ">12€</p>
								</li>
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-white">Boeuf épicé</p>
									<p className="fs-3 mx-2 text-success fw-nold">15€</p>
								</li>
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-white">Spaghetti Bolognaise</p>
									<p className="fs-3 mx-2 text-success fw-nold">11€</p>
								</li>
							</ul>
						</div>
						<div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
							<h3 className="fs-2 mb-5 text-white">Boissons</h3>
							<ul className="px-0">
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-white">Café</p>
									<p className="fs-3 mx-2 text-success fw-nold ">2€</p>
								</li>
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-white">Jus</p>
									<p className="fs-3 mx-2 text-success fw-nold">1€</p>
								</li>
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-white">Boissons spiritueuse</p>
									<p className="fs-3 mx-2 text-success">5€</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Acceuil;
