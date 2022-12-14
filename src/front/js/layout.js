import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home.jsx";
import { Planets } from "./pages/planets.jsx";
import { People } from "./pages/people.jsx";
import { Films } from "./pages/films.jsx";
import { Species } from "./pages/species.jsx";
import { Starships } from "./pages/starships.jsx"
import { Vehicles } from "./pages/vehicles.jsx";
import { PlanetsInfo } from "./pages/planetsInformation.jsx";
import { PeopleInfo } from "./pages/peopleInformation.jsx";
import { VehiclesInfo } from "./pages/vehiclesInformation.jsx"
import { SpeciesInfo } from "./pages/speciesInformation.jsx"
import { StarshipsInfo } from "./pages/starshipsInformation.jsx"
import { FilmsInfo } from "./pages/filmsInformation.jsx"
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>

            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<People />} path="/people" />
                        <Route element={<Films />} path="/films/" />
                        <Route element={<Species />} path="/species/" />
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<Vehicles />} path="/vehicles/" />
                        <Route element={<PlanetsInfo />} path="/planets/:planetid" />
                        <Route element={<PeopleInfo />} path="/people/:peopleid" />
                        <Route element={<SpeciesInfo />} path="/species/:speciesid" />
                        <Route element={<StarshipsInfo />} path="/starships/:starshipsid" />
                        <Route element={<VehiclesInfo />} path="/vehicles/:vehiclesid" />
                        <Route element={<FilmsInfo />} path="/films/:filmsid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
