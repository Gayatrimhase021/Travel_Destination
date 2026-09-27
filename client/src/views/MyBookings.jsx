import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Users,
  ArrowLeft,
  MapPin
} from "lucide-react";
import axios from "axios";

import Navbar from "../components/Navbar";
import footer from "../components/Footer"
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/bookings/my`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.data.success) {
          setBookings(response.data.bookings);
        }
      } catch (error) {
        console.log("Bookings fetch error:", error);

        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("loggedInUser");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [navigate]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="bookings-loading">
          Loading your bookings...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="my-bookings-page">
        <div className="my-bookings-container">

          <Link to="/tours" className="bookings-back">
            <ArrowLeft size={18} />
            Explore Tours
          </Link>

          <div className="bookings-header">
            <div>
              <span>TRAVELDESTINATION</span>
              <h1>My Bookings</h1>
              <p>
                Manage and view all your upcoming and previous trips.
              </p>
            </div>

            <div className="booking-count">
              {bookings.length} Booking
              {bookings.length !== 1 ? "s" : ""}
            </div>
          </div>

          {bookings.length > 0 ? (
            <div className="bookings-list">
              {bookings.map((booking) => (
                <div
                  className="booking-card"
                  key={booking._id}
                >
                  <div className="booking-image">
                    <img
                      src={booking.tour?.image}
                      alt={booking.tour?.title}
                    />
                  </div>

                  <div className="booking-card-content">

                    <div className="booking-title-row">
                      <div>
                        <span className="booking-status">
                          {booking.status}
                        </span>

                        <h2>
                          {booking.tour?.title}
                        </h2>
                      </div>

                      <div className="booking-price">
                        ₹
                        {booking.totalAmount.toLocaleString("en-IN")}
                      </div>
                    </div>

                    <div className="booking-details">

                      <div>
                        <CalendarDays size={17} />
                        <span>
                          <small>Travel Date</small>
                          {formatDate(booking.travelDate)}
                        </span>
                      </div>

                      <div>
                        <Users size={17} />
                        <span>
                          <small>Guests</small>
                          {booking.guests}
                        </span>
                      </div>

                      <div>
                        <MapPin size={17} />
                        <span>
                          <small>Tour</small>
                          {booking.tour?.duration}
                        </span>
                      </div>

                    </div>

                    <div className="booking-card-footer">
                      <span>
                        Booking ID: {booking._id}
                      </span>

                      <Link
                        to={`/tours/${booking.tour?._id}`}
                      >
                        View Tour
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-bookings">
              <CalendarDays size={48} />

              <h2>No bookings yet</h2>

              <p>
                You haven't booked any tours yet.
              </p>

              <Link to="/tours">
                Explore Tours
              </Link>
            </div>
          )}

        </div>

        <Footer />
      </main>
    </>
  );
};

export default MyBookings;