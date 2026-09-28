import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { CalendarDays, Users, ArrowLeft } from "lucide-react";
import axios from "axios";

import Navbar from "../components/Navbar";
import footer from "../components/Footer";
import "./Booking.css";
import Footer from "../components/Footer";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const [travelDate, setTravelDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!loggedInUser) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/tours/${id}`
      );

      const tour = response.data.tour;

      const totalAmount = tour.price * Number(guests);

      const bookingResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        {
          tour: id,
          travelDate,
          guests: Number(guests),
          totalAmount
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      if (bookingResponse.data.success) {
        alert("Tour booked successfully!");
        navigate("/my-bookings");
      }
    } catch (error) {
      console.log("Booking error:", error);

      alert(
        error.response?.data?.message ||
        "Booking failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="booking-page">
        <div className="booking-container">

          <Link to={`/tours/${id}`} className="booking-back">
            <ArrowLeft size={18} />
            Back to Tour
          </Link>

          <div className="booking-wrapper">

            <div className="booking-info-section">
              <span className="booking-label">
                TRAVEL DESTINATION
              </span>

              <h1>Book Your Tour</h1>

              <p>
                Complete your booking details and get ready
                for an unforgettable travel experience.
              </p>
            </div>

            <form
              className="booking-form"
              onSubmit={handleBooking}
            >
              <div className="form-group">
                <label>
                  <CalendarDays size={17} />
                  Travel Date
                </label>

                <input
                  type="date"
                  value={travelDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setTravelDate(e.target.value)
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Users size={17} />
                  Number of Guests
                </label>

                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) =>
                    setGuests(e.target.value)
                  }
                  required
                />
              </div>

              <div className="booking-summary">
                <h3>Booking Summary</h3>

                <p>
                  Your total amount will be calculated based
                  on the selected number of guests.
                </p>

                <strong>
                  Guests: {guests}
                </strong>
              </div>

              <button
                type="submit"
                className="confirm-booking-btn"
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : "Confirm Booking"}
              </button>
            </form>

          </div>
        </div>
        < Footer/>
      </main>
    </>
  );
};

export default Booking;