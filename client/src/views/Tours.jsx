import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Clock,
  MapPin,
  ArrowRight,
  Search
} from "lucide-react";

import Navbar from "../components/Navbar";
import footer from "../components/Footer";
import "./Tours.css";
import Footer from "../components/Footer";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/tours`
        );

        if (response.data.success) {
          setTours(response.data.tours);
        }
      } catch (error) {
        console.log("Tour fetch error:", error);
      }
    };

    fetchTours();
  }, []);

  const filteredTours = tours.filter((tour) =>
    tour.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="tours-page">
        <section className="tours-hero">
          <div className="tours-hero-overlay"></div>

          <div className="tours-hero-content">
            <span>EXPLORE OUR TOURS</span>

            <h1>
              Find Your Perfect
              <strong> Travel Experience</strong>
            </h1>

            <p>
              Discover carefully planned tours, exciting experiences
              and unforgettable journeys across India.
            </p>

            <div className="tour-search">
              <Search size={20} />

              <input
                type="text"
                placeholder="Search tours..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button>Search</button>
            </div>
          </div>
        </section>

        <section className="tours-content">
          <div className="tours-heading">
            <div>
              <span>TRAVEL WITH US</span>
              <h2>Popular Tours</h2>
              <p>
                Choose from our specially designed travel packages.
              </p>
            </div>

            <div className="tour-count">
              {filteredTours.length} Tours
            </div>
          </div>

          {filteredTours.length > 0 ? (
            <div className="tours-grid">
              {filteredTours.map((tour) => (
                <div className="tour-card" key={tour._id}>
                  <div className="tour-card-image">
                    <img
                      src={tour.image}
                      alt={tour.title}
                    />

                    <span className="tour-category">
                      {tour.category}
                    </span>
                  </div>

                  <div className="tour-card-content">
                    <h3>{tour.title}</h3>

                    <div className="tour-location">
                      <MapPin size={16} />

                      {tour.destination?.location}
                    </div>

                    <div className="tour-duration">
                      <Clock size={16} />

                      {tour.duration}
                    </div>

                    <p>{tour.description}</p>

                    <div className="tour-card-footer">
                      <div>
                        <span>Starting from</span>

                        <strong>
                          ₹{tour.price.toLocaleString("en-IN")}
                        </strong>
                      </div>

                      <Link
                        to={`/tours/${tour._id}`}
                        className="tour-details-btn"
                      >
                        View Tour
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-tours">
              <Search size={40} />

              <h3>No tours found</h3>

              <p>
                Try searching for another tour.
              </p>
            </div>
          )}
        </section>
        <Footer />

      </main>
    </>
  );
};

export default Tours;