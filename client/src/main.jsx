import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destinations from "./views/Destinations";
import Login from "./views/Login";
import Signup from "./views/Signup";
import DestinationDetails from "./views/DestinationDetails";
import Tours from "./views/Tours";
import TourDetails from "./views/TourDetails";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/destinations"
          element={<Destinations />}
        />
        <Route
          path="/destinations/:id"
          element={<DestinationDetails />}
        />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>


    </BrowserRouter>
  </React.StrictMode>
);
