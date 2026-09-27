
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destinations from "./views/Destinations";
import DestinationDetails from "./views/DestinationDetails";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Tours from "./views/Tours";
import TourDetails from "./views/TourDetails";
import Booking from "./views/Booking";
import MyBookings from "./views/MyBookings";
import Contact from "./views/Contact";
import About from "./views/About"; 
import Wishlist from "./views/Wishlist";
import TripPlanner from "./views/tripPlanner";
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

        <Route
          path="/tours"
          element={<Tours />}
        />

        <Route
          path="/tours/:id"
          element={<TourDetails />}
        />

        <Route
          path="/booking/:id"
          element={<Booking />}
        />

        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
          <Route
        path="/about"
        element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
         path="/wishlist" 
         element={<Wishlist />} />

         <Route
         path="/trip-planner"
         element={<TripPlanner />}
         />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

