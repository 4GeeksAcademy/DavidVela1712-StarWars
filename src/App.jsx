import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router";
import { pages } from "./utils/pages";
import React, { useState } from "react";

export const App = () => {
  const [favoritos, setFavoritos] = useState([])
  return (
    <>
      <NavBar favoritos={favoritos} setFavoritos={setFavoritos} />
      <Routes>
        {pages.map((page) => (
          <Route path={page.route} element={React.cloneElement(page.component, {favoritos, setFavoritos})} />
        ))}
      </Routes>
    </>
  );
};
