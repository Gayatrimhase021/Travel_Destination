import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MapPin,
  Star,
  ArrowRight,
  Trash2,
  Compass
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import "./Wishlist.css";


const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (destination) => destination.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <>
      <Navbar />

      <main className="wishlist-page">

        {/* HERO */}

        <section className="wishlist-hero">

          <div className="wishlist-hero-overlay"></div>

          <div className="wishlist-hero-content">

            <span className="wishlist-label">
              YOUR TRAVEL COLLECTION
            </span>

            <h1>
              Your Wishlist
            </h1>

            <p>
              Save your favourite destinations and keep
              your next adventure within reach.
            </p>

          </div>

        </section>

        {/* CONTENT */}

        <section className="wishlist-content">

          <div className="wishlist-heading">

            <div>

              <span className="section-label">
                SAVED DESTINATIONS
              </span>

              <h2>
                Places You Love
              </h2>

              <p>
                Your favourite travel destinations are saved here.
              </p>

            </div>

            <div className="wishlist-count">

              <Heart
                size={18}
                fill="currentColor"
              />

              {wishlist.length}{" "}
              {wishlist.length === 1
                ? "destination"
                : "destinations"}

            </div>

          </div>

          {/* EMPTY WISHLIST */}

          {wishlist.length === 0 ? (

            <div className="wishlist-empty">

              <div className="wishlist-empty-icon">
                <Heart size={42} />
              </div>

              <h3>
                Your wishlist is empty
              </h3>

              <p>
                Explore destinations and save the places
                you would love to visit.
              </p>

              <Link
                to="/destinations"
                className="wishlist-explore-btn"
              >
                <Compass size={18} />
                Explore Destinations
                <ArrowRight size={18} />
              </Link>

            </div>

          ) : (

            <div className="wishlist-grid">

              {wishlist.map((destination) => (

                <div
                  className="wishlist-card"
                  key={destination.id}
                >

                  <div className="wishlist-card-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <span className="wishlist-category">
                      {destination.category}
                    </span>

                    <button
                      className="wishlist-remove-btn"
                      onClick={() =>
                        removeFromWishlist(destination.id)
                      }
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                  <div className="wishlist-card-content">

                    <div className="wishlist-card-title">

                      <div>

                        <h3>
                          {destination.name}
                        </h3>

                        <div className="wishlist-location">

                          <MapPin size={15} />

                          {destination.location}

                        </div>

                      </div>

                      <div className="wishlist-rating">

                        <Star
                          size={15}
                          fill="currentColor"
                        />

                        {destination.rating}

                      </div>

                    </div>

                    <p className="wishlist-reviews">
                      {destination.reviews} travellers reviewed
                    </p>

                    <div className="wishlist-card-footer">

                      <div className="wishlist-price">

                        <span>
                          Starting from
                        </span>

                        <strong>
                          ₹{destination.price.toLocaleString("en-IN")}
                        </strong>

                      </div>

                      <Link
                        to={`/destinations/${destination.id}`}
                        className="wishlist-view-btn"
                      >
                        View Details
                        <ArrowRight size={16} />
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>
         <Footer />
      </main>
    </>
  );
};

export default Wishlist;
