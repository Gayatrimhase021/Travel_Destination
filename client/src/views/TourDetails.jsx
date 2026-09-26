import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Check,
  X,
  CalendarDays
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./TourDetails.css";

const TourDetails = () => {
  const { id } = useParams();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/tours/${id}`
        );

        const data = await response.json();

        if (data.success) {
          setTour(data.tour);
        }
      } catch (error) {
        console.log("Tour details error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="tour-loading">
          Loading tour details...
        </div>
      </>
    );
  }

  if (!tour) {
    return (
      <>
        <Navbar />
        <div className="tour-not-found">
          <h2>Tour not found</h2>
          <Link to="/tours">Back to Tours</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="tour-details-page">

        <section className="tour-details-hero">
          <img src={tour.image} alt={tour.title} />

          <div className="tour-details-overlay"></div>

          <div className="tour-details-hero-content">
            <Link to="/tours" className="back-to-tours">
              <ArrowLeft size={18} />
              Back to Tours
            </Link>

            <span>{tour.category}</span>

            <h1>{tour.title}</h1>

            <div className="tour-meta">
              <div>
                <MapPin size={18} />
                {tour.destination?.location}
              </div>

              <div>
                <Clock size={18} />
                {tour.duration}
              </div>
            </div>
          </div>
        </section>

        <section className="tour-details-content">

          <div className="tour-main-content">

            <div className="tour-description">
              <span className="details-label">
                TOUR OVERVIEW
              </span>

              <h2>About This Tour</h2>

              <p>{tour.description}</p>
            </div>

            <div className="tour-highlights">
              <h2>Tour Highlights</h2>

              <div className="highlight-list">
                {tour.highlights?.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <Check size={18} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-inclusions">

              <div className="inclusion-column">
                <h2>What's Included</h2>

                {tour.inclusions?.map((item, index) => (
                  <div className="inclusion-item" key={index}>
                    <Check size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="inclusion-column exclusion">

                <h2>What's Not Included</h2>

                {tour.exclusions?.map((item, index) => (
                  <div className="inclusion-item" key={index}>
                    <X size={17} />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          <aside className="tour-booking-card">

            <div className="booking-price">
              <span>Starting from</span>

              <strong>
                ₹{tour.price.toLocaleString("en-IN")}
              </strong>

              <small>per person</small>
            </div>

            <div className="booking-info">
              <div>
                <Clock size={19} />
                <span>
                  <small>Duration</small>
                  {tour.duration}
                </span>
              </div>

              <div>
                <CalendarDays size={19} />
                <span>
                  <small>Availability</small>
                  {tour.available ? "Available" : "Not Available"}
                </span>
              </div>
            </div>

            <button className="book-tour-btn">
              Book This Tour
            </button>

            <p className="booking-note">
              Secure your trip with TravelDestination.
            </p>

          </aside>

        </section>
      </main>
    </>
  );
};

export default TourDetails;