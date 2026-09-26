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
    price: 6999,
    description:
      "Goa is famous for its beautiful beaches, vibrant nightlife, Portuguese heritage and relaxing atmosphere. It is a perfect destination for a memorable beach vacation.",
    bestTime: "November to February",
    placesToVisit: [
      "Baga Beach",
      "Calangute Beach",
      "Fort Aguada",
      "Dudhsagar Falls"
    ]
  },
  {
    id: 2,
    name: "Manali",
    location: "Himachal Pradesh, India",
    category: "Mountain",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85",
    rating: 4.7,
    reviews: 198,
    price: 8499,
    description:
      "Manali is a beautiful mountain destination surrounded by snow-covered peaks, green valleys and peaceful landscapes. It is ideal for nature lovers and adventure seekers.",
    bestTime: "October to June",
    placesToVisit: [
      "Solang Valley",
      "Rohtang Pass",
      "Hadimba Temple",
      "Mall Road"
    ]
  },
  {
    id: 3,
    name: "Kerala",
    location: "Kerala, India",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    rating: 4.9,
    reviews: 312,
    price: 7999,
    description:
      "Kerala is known for its peaceful backwaters, lush greenery, beautiful beaches and rich culture. It offers a refreshing and relaxing travel experience.",
    bestTime: "September to March",
    placesToVisit: [
      "Alleppey",
      "Munnar",
      "Kovalam Beach",
      "Thekkady"
    ]
  },
  {
    id: 4,
    name: "Jaipur",
    location: "Rajasthan, India",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",
    rating: 4.6,
    reviews: 176,
    price: 6499,
    description:
      "Jaipur, the Pink City, is famous for its magnificent forts, royal palaces, colourful markets and rich Rajasthani culture.",
    bestTime: "October to March",
    placesToVisit: [
      "Amber Fort",
      "Hawa Mahal",
      "City Palace",
      "Jal Mahal"
    ]
  },
  {
    id: 5,
    name: "Kashmir",
    location: "Jammu & Kashmir, India",
    category: "Mountain",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85",
    rating: 4.9,
    reviews: 289,
    price: 9999,
    description:
      "Kashmir is known for its breathtaking mountains, peaceful lakes, beautiful valleys and scenic landscapes. It is often called paradise on earth.",
    bestTime: "March to October",
    placesToVisit: [
      "Srinagar",
      "Gulmarg",
      "Pahalgam",
      "Dal Lake"
    ]
  },
  {
    id: 6,
    name: "Mumbai",
    location: "Maharashtra, India",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85",
    rating: 4.5,
    reviews: 221,
    price: 5499,
    description:
      "Mumbai is a lively metropolitan city famous for Bollywood, historic landmarks, beaches, shopping and delicious street food.",
    bestTime: "October to February",
    placesToVisit: [
      "Gateway of India",
      "Marine Drive",
      "Elephanta Caves",
      "Juhu Beach"
    ]
  },
  {
    id: 7,
    name: "Rishikesh",
    location: "Uttarakhand, India",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
    rating: 4.7,
    reviews: 164,
    price: 5999,
    description:
      "Rishikesh is a popular destination for adventure activities, yoga, spirituality and peaceful riverside experiences.",
    bestTime: "September to November",
    placesToVisit: [
      "Laxman Jhula",
      "River Rafting",
      "Neer Garh Waterfall",
      "Triveni Ghat"
    ]
  },
  {
    id: 8,
    name: "Andaman",
    location: "Andaman & Nicobar, India",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85",
    rating: 4.8,
    reviews: 187,
    price: 11999,
    description:
      "Andaman is a tropical paradise with crystal-clear water, beautiful beaches, coral reefs and exciting water activities.",
    bestTime: "October to May",
    placesToVisit: [
      "Radhanagar Beach",
      "Cellular Jail",
      "Elephant Beach",
      "Ross Island"
    ]
  }
];

const DestinationDetails = () => {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

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

        <section className="destination-details-content">

          <div className="details-main">

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

            <div className="details-description">

              <h3>
                About {destination.name}
              </h3>

              <p>
                {destination.description}
              </p>

            </div>

            <div className="details-info-grid">

              <div className="details-info-card">

                <div className="details-info-icon">
                  <CalendarDays size={22} />
                </div>

                <div>

                  <span>
                    Best Time To Visit
                  </span>

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

                  <span>
                    Starting Price
                  </span>

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

                  <span>
                    Travel Category
                  </span>

                  <strong>
                    {destination.category}
                  </strong>

                </div>

              </div>

            </div>

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

          <aside className="details-booking-card">

            <span className="booking-label">
              PLAN YOUR JOURNEY
            </span>

            <h3>
              Explore {destination.name}
            </h3>

            <p>
              Start planning your trip to{" "}
              {destination.name} and create
              unforgettable travel memories.
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