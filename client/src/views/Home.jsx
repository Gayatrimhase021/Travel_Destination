import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  ArrowRight,
  Star,
  Heart,
  Mountain,
  Waves,
  Landmark,
  Compass,
  Users,
  ShieldCheck,
  Wallet,
  CalendarDays
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");

  const destinations = [
    {
      name: "Goa",
      location: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=900",
      rating: "4.8",
      reviews: "245",
      price: "₹6,999",
      category: "Beach"
    },
    {
      name: "Manali",
      location: "Himachal Pradesh, India",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=900",
      rating: "4.9",
      reviews: "312",
      price: "₹8,499",
      category: "Mountain"
    },
    {
      name: "Kerala",
      location: "Kerala, India",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900",
      rating: "4.8",
      reviews: "198",
      price: "₹7,999",
      category: "Nature"
    },
    {
      name: "Jaipur",
      location: "Rajasthan, India",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900",
      rating: "4.7",
      reviews: "176",
      price: "₹5,999",
      category: "Heritage"
    },
    {
      name: "Kashmir",
      location: "Jammu & Kashmir, India",
      image:
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200",
      rating: "4.9",
      reviews: "289",
      price: "₹11,999",
      category: "Nature"
    },
    {
      name: "Mumbai",
      location: "Maharashtra, India",
      image:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=900",
      rating: "4.6",
      reviews: "154",
      price: "₹4,999",
      category: "City"
    }
  ];

  const features = [
    {
      icon: <Compass size={28} />,
      title: "Smart Trip Planning",
      text: "Plan your trip based on destination, budget, duration and travel preferences."
    },
    {
      icon: <Wallet size={28} />,
      title: "Budget Friendly",
      text: "Explore travel packages that match your budget and travel requirements."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Packages",
      text: "Get useful tour information to make your travel planning easier."
    },
    {
      icon: <Users size={28} />,
      title: "Travel For Everyone",
      text: "Find experiences suitable for solo travellers, couples, families and groups."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="home-page">

        {/* ================= HERO ================= */}

        <section className="hero-section">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-badge">
              <Compass size={15} />
              Explore. Plan. Travel.
            </div>

            <p className="hero-small-title">
              DISCOVER INDIA'S BEAUTIFUL DESTINATIONS
            </p>

            <h1>
              Your Journey
              <br />
              <span>Starts Here.</span>
            </h1>

            <p className="hero-description">
              Discover amazing destinations, compare travel experiences,
              plan your trip and create unforgettable memories.
            </p>

            {/* Search Box */}

            <div className="hero-search">

              <div className="search-input">

                <MapPin size={21} />

                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

              </div>

              <button className="search-button">
                <Search size={18} />
                Search
              </button>

            </div>

            <div className="hero-actions">

              <Link to="/destinations" className="explore-button">
                Explore Destinations
                <ArrowRight size={18} />
              </Link>

              <Link to="/tours" className="hero-secondary-btn">
                View Tours
              </Link>

            </div>

            {/* Trust Stats */}

            <div className="hero-stats">

              <div>
                <strong>50+</strong>
                <span>Destinations</span>
              </div>

              <div>
                <strong>100+</strong>
                <span>Tour Packages</span>
              </div>

              <div>
                <strong>4.8</strong>
                <span>Average Rating</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= QUICK CATEGORIES ================= */}

        <section className="category-section">

          <div className="category-container">

            <div className="category-item">
              <div className="category-icon">
                <Mountain size={25} />
              </div>
              <span>Mountains</span>
            </div>

            <div className="category-item">
              <div className="category-icon">
                <Waves size={25} />
              </div>
              <span>Beaches</span>
            </div>

            <div className="category-item">
              <div className="category-icon">
                <Landmark size={25} />
              </div>
              <span>Heritage</span>
            </div>

            <div className="category-item">
              <div className="category-icon">
                <Compass size={25} />
              </div>
              <span>Adventure</span>
            </div>

            <div className="category-item">
              <div className="category-icon">
                <CalendarDays size={25} />
              </div>
              <span>Weekend Trips</span>
            </div>

          </div>

        </section>


        {/* ================= POPULAR DESTINATIONS ================= */}

        <section className="destinations-section">

          <div className="section-heading">

            <div className="section-label">
              EXPLORE INDIA
            </div>

            <h2>
              Popular Destinations
            </h2>

            <p>
              Find beautiful places, exciting experiences and
              memorable journeys across India.
            </p>

          </div>


          <div className="destination-grid">

            {destinations.map((destination, index) => (

              <div className="destination-card" key={index}>

                <div className="destination-image">

                  <img
                    src={destination.image}
                    alt={destination.name}
                  />

                  <span className="destination-category">
                    {destination.category}
                  </span>

                  <button className="wishlist-btn">
                    <Heart size={18} />
                  </button>

                  <div className="image-bottom-gradient"></div>

                  <div className="destination-location">
                    <MapPin size={15} />
                    {destination.location}
                  </div>

                </div>


                <div className="destination-info">

                  <div className="destination-title-row">

                    <h3>{destination.name}</h3>

                    <div className="rating">
                      <Star size={15} fill="currentColor" />
                      <span>{destination.rating}</span>
                    </div>

                  </div>

                  <p className="review-text">
                    {destination.reviews} travellers reviewed
                  </p>


                  <div className="destination-bottom">

                    <div className="price-box">
                      <span>Starting from</span>
                      <strong>{destination.price}</strong>
                    </div>

                    <Link
                      to="/destinations"
                      className="card-arrow"
                    >
                      <ArrowRight size={18} />
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>


          <div className="center-button">

            <Link to="/destinations" className="outline-button">
              View All Destinations
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>


        {/* ================= WHY CHOOSE US ================= */}

        <section className="features-section">

          <div className="section-heading">

            <div className="section-label">
              WHY TRAVEL WITH US
            </div>

            <h2>
              Everything You Need For Your Journey
            </h2>

            <p>
              From discovering destinations to planning your trip,
              TravelDestination makes travel simple.
            </p>

          </div>


          <div className="features-grid">

            {features.map((feature, index) => (

              <div className="feature-card" key={index}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>

            ))}

          </div>

        </section>


        {/* ================= SMART TRIP PLANNER ================= */}

        <section className="planner-section">

          <div className="planner-content">

            <div className="planner-text">

              <div className="section-label">
                SMART TRIP PLANNER
              </div>

              <h2>
                Plan Your Perfect Trip
                <br />
                Based On Your Needs
              </h2>

              <p>
                Tell us your budget, travel duration and preferred
                experience. Find suitable travel options for your journey.
              </p>

              <Link to="/tours" className="planner-button">
                Start Planning
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="planner-options">

              <div className="planner-option">
                <Wallet size={22} />
                <div>
                  <span>Budget</span>
                  <strong>Choose your budget</strong>
                </div>
              </div>

              <div className="planner-option">
                <CalendarDays size={22} />
                <div>
                  <span>Duration</span>
                  <strong>How many days?</strong>
                </div>
              </div>

              <div className="planner-option">
                <Compass size={22} />
                <div>
                  <span>Travel Type</span>
                  <strong>Adventure / Family / Couple</strong>
                </div>
              </div>

              <div className="planner-option">
                <MapPin size={22} />
                <div>
                  <span>Destination</span>
                  <strong>Where do you want to go?</strong>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="cta-section">

          <div className="cta-content">

            <div className="cta-icon">
              <PlaneIcon />
            </div>

            <h2>
              Ready To Explore The World?
            </h2>

            <p>
              Your next adventure is just one click away.
              Start planning your journey today.
            </p>

            <Link to="/tours" className="cta-button">
              Explore Tours
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

      </main>
    </>
  );
};


const PlaneIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2c-.7-.2-1.4.1-1.8.7l-.7 1.1 7.3 3.6-3.1 3.1-3.1-.6-1 1 4.2 2.4 2.4 4.2 1-1-.6-3.1 3.1-3.1 3.6 7.3 1.1-.7c.6-.4.9-1.1.7-1.8z" />
  </svg>
);

export default Home;