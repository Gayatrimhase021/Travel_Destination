import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  Heart,
  CalendarDays,
  Wallet,
  Compass,
  ArrowRight
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./DestinationDetails.css";

const DestinationDetails = () => {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/destinations/${id}`
        );

        const data = await response.json();

        if (data.success) {
          setDestination(data.destination);
        }
      } catch (error) {
        console.log("Destination details error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="destination-loading">
          <h2>Loading destination...</h2>
        </div>
      </>
    );
  }

  if (!destination) {
    return (
      <>
        <Navbar />

        <div className="destination-not-found">
          <h2>Destination not found</h2>

          <Link to="/destinations">
            <ArrowLeft size={18} />
            Back to Destinations
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="destination-details-page">

        {/* HERO IMAGE */}

        <section className="destination-details-hero">

          <img
            src={destination.image}
            alt={destination.name}
          />

          <div className="destination-details-overlay"></div>

          <div className="destination-details-hero-content">

            <Link
              to="/destinations"
              className="back-destinations"
            >
              <ArrowLeft size={18} />
              Back to Destinations
            </Link>

            <span className="details-category">
              {destination.category}
            </span>

            <h1>
              {destination.name}
            </h1>

            <div className="details-location">
              <MapPin size={18} />
              {destination.location}
            </div>

          </div>

        </section>


        {/* MAIN CONTENT */}

        <section className="destination-details-content">

          <div className="details-main">

            {/* TITLE */}

            <div className="details-title-row">

              <div>
                <span className="section-label">
                  DISCOVER {destination.name.toUpperCase()}
                </span>

                <h2>
                  Explore {destination.name}
                </h2>
              </div>

              <button className="details-wishlist">
                <Heart size={20} />
                Add to Wishlist
              </button>

            </div>


            {/* RATING */}

            <div className="details-rating">

              <div className="rating-stars">
                <Star
                  size={18}
                  fill="currentColor"
                />

                <strong>
                  {destination.rating}
                </strong>
              </div>

              <span>
                {destination.reviews} travellers reviewed
              </span>

            </div>


            {/* DESCRIPTION */}

            <div className="details-description">

              <h3>
                About {destination.name}
              </h3>

              <p>
                {destination.description}
              </p>

            </div>


            {/* INFORMATION CARDS */}

            <div className="details-info-grid">

              <div className="details-info-card">

                <div className="details-info-icon">
                  <CalendarDays size={22} />
                </div>

                <div>
                  <span>Best Time To Visit</span>

                  <strong>
                    {destination.bestTime}
                  </strong>
                </div>

              </div>


              <div className="details-info-card">

                <div className="details-info-icon">
                  <Wallet size={22} />
                </div>

                <div>
                  <span>Starting Price</span>

                  <strong>
                    ₹{destination.price.toLocaleString("en-IN")}
                  </strong>
                </div>

              </div>


              <div className="details-info-card">

                <div className="details-info-icon">
                  <Compass size={22} />
                </div>

                <div>
                  <span>Travel Category</span>

                  <strong>
                    {destination.category}
                  </strong>
                </div>

              </div>

            </div>


            {/* PLACES TO VISIT */}

            <div className="places-section">

              <span className="section-label">
                MUST VISIT
              </span>

              <h3>
                Places To Visit
              </h3>

              <div className="places-grid">

                {destination.placesToVisit.map(
                  (place, index) => (
                    <div
                      className="place-item"
                      key={index}
                    >
                      <span>
                        {index + 1}
                      </span>

                      <strong>
                        {place}
                      </strong>
                    </div>
                  )
                )}

              </div>

            </div>

          </div>


          {/* BOOKING CARD */}

          <aside className="details-booking-card">

            <span className="booking-label">
              PLAN YOUR JOURNEY
            </span>

            <h3>
              Explore {destination.name}
            </h3>

            <p>
              Start planning your trip to {destination.name}
              and create unforgettable travel memories.
            </p>

            <div className="booking-price">

              <span>
                Starting from
              </span>

              <strong>
                ₹{destination.price.toLocaleString("en-IN")}
              </strong>

              <small>
                per person
              </small>

            </div>

            <Link
              to="/tours"
              className="book-tour-btn"
            >
              Explore Tours
              <ArrowRight size={18} />
            </Link>

            <div className="booking-note">
              <Compass size={17} />
              Flexible travel options available
            </div>

          </aside>

        </section>

      </main>
    </>
  );
};

export default DestinationDetails;