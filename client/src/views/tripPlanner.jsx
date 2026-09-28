import { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Users,
  Wallet,
  Compass,
  Clock,
  ArrowRight
} from "lucide-react";

import Navbar from "../components/Navbar";
import footer from "../components/Footer";
import "./TripPlanner.css";
import Footer from "../components/Footer";

const TripPlanner = () => {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [budget, setBudget] = useState("");
  const [preference, setPreference] = useState("");

  const [tripPlan, setTripPlan] = useState(null);

  const destinations = [
    "Goa",
    "Manali",
    "Kerala",
    "Jaipur",
    "Kashmir",
    "Mumbai",
    "Rishikesh",
    "Andaman"
  ];

  const createTripPlan = (e) => {
    e.preventDefault();

    if (
      !destination ||
      !travelDate ||
      !travellers ||
      !budget ||
      !preference
    ) {
      return;
    }

    const plans = {
      Goa: [
        "Explore Baga Beach and Calangute Beach",
        "Visit Fort Aguada and enjoy sunset",
        "Explore Dudhsagar Falls",
        "Relax at a beautiful beach and enjoy local food"
      ],

      Manali: [
        "Explore Mall Road and Hadimba Temple",
        "Visit Solang Valley",
        "Enjoy mountain views and local sightseeing",
        "Explore nearby attractions and enjoy a peaceful evening"
      ],

      Kerala: [
        "Explore Munnar and its beautiful tea gardens",
        "Enjoy a peaceful Kerala backwater experience",
        "Visit Thekkady and explore nature",
        "Relax at Kovalam Beach"
      ],

      Jaipur: [
        "Visit Amber Fort and Jal Mahal",
        "Explore Hawa Mahal and City Palace",
        "Enjoy Jaipur local markets",
        "Experience traditional Rajasthani food and culture"
      ],

      Kashmir: [
        "Explore Srinagar and Dal Lake",
        "Visit Gulmarg and enjoy mountain views",
        "Explore Pahalgam",
        "Enjoy a peaceful evening in Srinagar"
      ],

      Mumbai: [
        "Visit Gateway of India",
        "Enjoy Marine Drive and city sightseeing",
        "Explore Elephanta Caves",
        "Relax at Juhu Beach"
      ],

      Rishikesh: [
        "Explore Laxman Jhula and Triveni Ghat",
        "Enjoy river rafting adventure",
        "Visit Neer Garh Waterfall",
        "Relax beside the Ganga"
      ],

      Andaman: [
        "Relax at Radhanagar Beach",
        "Visit Cellular Jail",
        "Enjoy water activities at Elephant Beach",
        "Explore Ross Island"
      ]
    };

    setTripPlan({
      destination,
      travelDate,
      travellers,
      budget,
      preference,
      days: plans[destination] || plans.Goa
    });
  };

  return (
    <>
      <Navbar />

      <main className="trip-planner-page">

        {/* HERO */}

        <section className="trip-planner-hero">

          <div className="trip-planner-overlay"></div>

          <div className="trip-planner-hero-content">

            <span className="trip-planner-label">
              SMART TRAVEL PLANNER
            </span>

            <h1>
              Plan Your Perfect Trip
            </h1>

            <p>
              Tell us your travel preferences and create
              a simple personalized trip plan.
            </p>

          </div>

        </section>

        {/* PLANNER */}

        <section className="trip-planner-content">

          <div className="planner-heading">

            <span className="section-label">
              CREATE YOUR JOURNEY
            </span>

            <h2>
              Trip Planner
            </h2>

            <p>
              Fill in your travel details to generate your itinerary.
            </p>

          </div>

          <div className="planner-layout">

            {/* FORM */}

            <div className="planner-form-card">

              <form onSubmit={createTripPlan}>

                <div className="planner-form-group">

                  <label>
                    <MapPin size={17} />
                    Destination
                  </label>

                  <select
                    value={destination}
                    onChange={(e) =>
                      setDestination(e.target.value)
                    }
                  >
                    <option value="">
                      Select destination
                    </option>

                    {destinations.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>

                </div>

                <div className="planner-form-group">

                  <label>
                    <CalendarDays size={17} />
                    Travel Date
                  </label>

                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) =>
                      setTravelDate(e.target.value)
                    }
                  />

                </div>

                <div className="planner-form-row">

                  <div className="planner-form-group">

                    <label>
                      <Users size={17} />
                      Travellers
                    </label>

                    <select
                      value={travellers}
                      onChange={(e) =>
                        setTravellers(e.target.value)
                      }
                    >
                      <option value="1">1 Traveller</option>
                      <option value="2">2 Travellers</option>
                      <option value="3">3 Travellers</option>
                      <option value="4">4 Travellers</option>
                      <option value="5">5 Travellers</option>
                      <option value="6">6 Travellers</option>
                      <option value="7">7 Travellers</option>
                      <option value="8">8 Travellers</option>
                      <option value="9">9 Travellers</option>
                      <option value="10">10 Travellers</option>
                    </select>

                  </div>

                  <div className="planner-form-group">

                    <label>
                      <Wallet size={17} />
                      Budget
                    </label>

                    <select
                      value={budget}
                      onChange={(e) =>
                        setBudget(e.target.value)
                      }
                    >
                      <option value="">
                        Select budget
                      </option>

                      <option value="Budget">
                        Under ₹10,000
                      </option>

                      <option value="Standard">
                        ₹10,000 - ₹25,000
                      </option>

                      <option value="Premium">
                        ₹25,000 - ₹50,000
                      </option>

                      <option value="Luxury">
                        Above ₹50,000
                      </option>
                    </select>

                  </div>

                </div>

                <div className="planner-form-group">

                  <label>
                    <Compass size={17} />
                    Travel Preference
                  </label>

                  <select
                    value={preference}
                    onChange={(e) =>
                      setPreference(e.target.value)
                    }
                  >
                    <option value="">
                      Select preference
                    </option>

                    <option value="Relaxation">
                      Relaxation
                    </option>

                    <option value="Adventure">
                      Adventure
                    </option>

                    <option value="Nature">
                      Nature & Wildlife
                    </option>

                    <option value="Heritage">
                      Heritage & Culture
                    </option>

                    <option value="Beach">
                      Beach
                    </option>

                    <option value="Family">
                      Family Trip
                    </option>
                  </select>

                </div>

                <button
                  type="submit"
                  className="generate-trip-btn"
                >
                  Generate Trip Plan
                  <ArrowRight size={18} />
                </button>

              </form>

            </div>

            {/* INFO */}

            <div className="planner-info-card">

              <div className="planner-info-icon">
                <Compass size={30} />
              </div>

              <h3>
                Smart Trip Planning
              </h3>

              <p>
                Create a simple travel itinerary based on
                your destination, budget and travel preference.
              </p>

              <div className="planner-benefit">

                <CalendarDays size={20} />

                <div>
                  <strong>
                    Plan Your Days
                  </strong>

                  <span>
                    Get a simple day-wise itinerary.
                  </span>
                </div>

              </div>

              <div className="planner-benefit">

                <Wallet size={20} />

                <div>
                  <strong>
                    Set Your Budget
                  </strong>

                  <span>
                    Choose a budget that suits your trip.
                  </span>
                </div>

              </div>

              <div className="planner-benefit">

                <MapPin size={20} />

                <div>
                  <strong>
                    Explore Places
                  </strong>

                  <span>
                    Discover popular attractions.
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* TRIP PLAN */}

          {tripPlan && (

            <section className="generated-trip">

              <div className="generated-trip-heading">

                <div>

                  <span className="section-label">
                    YOUR PERSONALIZED PLAN
                  </span>

                  <h2>
                    {tripPlan.destination} Trip Plan
                  </h2>

                </div>

                <div className="generated-trip-date">

                  <CalendarDays size={18} />

                  {tripPlan.travelDate}

                </div>

              </div>

              <div className="trip-summary">

                <div>
                  <Users size={19} />
                  <span>
                    {tripPlan.travellers} Travellers
                  </span>
                </div>

                <div>
                  <Wallet size={19} />
                  <span>
                    {tripPlan.budget}
                  </span>
                </div>

                <div>
                  <Compass size={19} />
                  <span>
                    {tripPlan.preference}
                  </span>
                </div>

              </div>

              <div className="itinerary-list">

                {tripPlan.days.map((day, index) => (

                  <div
                    className="itinerary-item"
                    key={index}
                  >

                    <div className="itinerary-day">

                      <span>
                        DAY
                      </span>

                      <strong>
                        {index + 1}
                      </strong>

                    </div>

                    <div className="itinerary-content">

                      <h3>
                        Day {index + 1}
                      </h3>

                      <p>
                        {day}
                      </p>

                    </div>

                    <Clock size={20} />

                  </div>

                ))}

              </div>

            </section>

          )}

        </section>
            <Footer />
      </main>
    </>
  );
};

export default TripPlanner;