import { useState, useEffect } from "react";
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
import footer from "../components/Footer"
import "./Destinations.css";

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  const toggleWishlist = (destination) => {
    const alreadyAdded = wishlist.some(
      (item) => item.id === destination.id
    );

    let updatedWishlist;

    if (alreadyAdded) {
      updatedWishlist = wishlist.filter(
        (item) => item.id !== destination.id
      );
    } else {
      updatedWishlist = [...wishlist, destination];
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  const destinations = [
    {
      id: 1,
      name: "Goa",
      location: "Goa, India",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      rating: 4.8,
      reviews: 245,
      price: 6999
    },
    {
      id: 2,
      name: "Manali",
      location: "Himachal Pradesh, India",
      category: "Mountain",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
      rating: 4.7,
      reviews: 198,
      price: 8499
    },
    {
      id: 3,
      name: "Kerala",
      location: "Kerala, India",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
      rating: 4.9,
      reviews: 312,
      price: 7999
    },
    {
      id: 4,
      name: "Jaipur",
      location: "Rajasthan, India",
      category: "Heritage",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
      rating: 4.6,
      reviews: 176,
      price: 6499
    },
    {
      id: 5,
      name: "Kashmir",
      location: "Jammu & Kashmir, India",
      category: "Mountain",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=85",
      rating: 4.9,
      reviews: 289,
      price: 9999
    },
    {
      id: 6,
      name: "Mumbai",
      location: "Maharashtra, India",
      category: "City",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=85",
      rating: 4.5,
      reviews: 221,
      price: 5499
    },
    {
      id: 7,
      name: "Rishikesh",
      location: "Uttarakhand, India",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85",
      rating: 4.7,
      reviews: 164,
      price: 5999
    },
    {
      id: 8,
      name: "Andaman",
      location: "Andaman & Nicobar, India",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
      rating: 4.8,
      reviews: 187,
      price: 11999
    }
  ];

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
    const searchText = search.toLowerCase();

    const matchesSearch =
      destination.name.toLowerCase().includes(searchText) ||
      destination.location.toLowerCase().includes(searchText);

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

          {/* DESTINATION CARDS */}

          {filteredDestinations.length > 0 ? (

            <div className="destinations-grid">

              {filteredDestinations.map((destination) => (

                <div
                  className="destination-card-page"
                  key={destination.id}
                >

                  <div className="destination-card-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                    />

                    <span className="destination-card-category">
                      {destination.category}
                    </span>

                    <button
                      className={`destination-heart ${wishlist.some((item) => item.id === destination.id)
                          ? "wishlist-active"
                          : ""
                        }`}
                      onClick={() => toggleWishlist(destination)}
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        size={18}
                        fill={
                          wishlist.some((item) => item.id === destination.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
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
                        to={`/destinations/${destination.id}`}
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
             <Footer />
      </main>
    </>
  );
};

export default Destinations;