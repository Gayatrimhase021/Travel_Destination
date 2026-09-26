import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  Heart,
  ArrowRight,
  SlidersHorizontal
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./Destinations.css";

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/destinations`
        );

        if (response.data.success) {
          setDestinations(response.data.destinations);
        }
      } catch (error) {
        console.log("Destination fetch error:", error);
      }
    };

    fetchDestinations();
  }, []);

  const categories = [
    "All",
    "Beach",
    "Mountain",
    "Nature",
    "Heritage",
    "Adventure",
    "City"
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      destination.location
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      destination.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <main className="destinations-page">

        {/* HERO */}

        <section className="destinations-hero">

          <div className="destinations-hero-overlay"></div>

          <div className="destinations-hero-content">

            <span className="destinations-label">
              EXPLORE INDIA
            </span>

            <h1>
              Discover Your Next
              <span> Destination</span>
            </h1>

            <p>
              Explore beautiful places, unique experiences and
              unforgettable journeys across India.
            </p>

            <div className="destination-search">

              <Search size={21} />

              <input
                type="text"
                placeholder="Search destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button>
                Search
              </button>

            </div>

          </div>

        </section>


        {/* DESTINATION CONTENT */}

        <section className="destinations-content">

          <div className="destination-heading">

            <div>
              <span className="section-label">
                FIND YOUR PLACE
              </span>

              <h2>
                Explore Destinations
              </h2>

              <p>
                Choose from our collection of popular travel destinations.
              </p>
            </div>

            <div className="destination-count">
              <SlidersHorizontal size={18} />
              {filteredDestinations.length} destinations
            </div>

          </div>


          {/* CATEGORY FILTER */}

          <div className="category-filter">

            {categories.map((item) => (

              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>

            ))}

          </div>


          {/* CARDS */}

          {filteredDestinations.length > 0 ? (

            <div className="destinations-grid">

              {filteredDestinations.map((destination) => (

                <div
                  className="destination-card-page"
                  key={destination._id}
                >

                  <div className="destination-card-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <span className="destination-card-category">
                      {destination.category}
                    </span>

                    <button className="destination-heart">
                      <Heart size={18} />
                    </button>

                    <div className="destination-card-location">
                      <MapPin size={15} />
                      {destination.location}
                    </div>

                  </div>


                  <div className="destination-card-content">

                    <div className="destination-title">

                      <h3>
                        {destination.name}
                      </h3>

                      <div className="destination-rating">
                        <Star
                          size={15}
                          fill="currentColor"
                        />
                        {destination.rating}
                      </div>

                    </div>

                    <p className="destination-reviews">
                      {destination.reviews} travellers reviewed
                    </p>


                    <div className="destination-card-footer">

                      <div className="destination-price">

                        <span>
                          Starting from
                        </span>

                        <strong>
                          ₹{destination.price.toLocaleString("en-IN")}
                        </strong>

                      </div>


                      <Link
                        to={`/destinations/${destination._id}`}
                        className="destination-details-btn"
                      >
                        View Details
                        <ArrowRight size={17} />
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="no-destinations">

              <Search size={42} />

              <h3>
                No destinations found
              </h3>

              <p>
                Try searching for another destination or category.
              </p>

            </div>

          )}

        </section>

      </main>
    </>
  );
};

export default Destinations;